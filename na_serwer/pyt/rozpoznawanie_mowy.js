// =======================================================
// INTELIGENTNY ASSEMBLE TRANSCRIPT (ELIMINACJA DUPLIKATÓW W WEB SPEECH API)
// =======================================================
function assembleSpeechTranscript(results, initialText = '') {
    function cleanWordForCompare(w) {
        return w.toLowerCase().replace(/^[^\w\s']+|[^\w\s']+$/g, '');
    }

    function normalizeForCompare(str) {
        return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '').replace(/\s+/g, ' ').trim();
    }

    function mergePieces(pieces) {
        let combined = '';
        for (let rawPiece of pieces) {
            let piece = rawPiece.trim();
            if (!piece) continue;

            if (!combined) {
                combined = piece;
                continue;
            }

            const normCombined = normalizeForCompare(combined);
            const normPiece = normalizeForCompare(piece);

            if (!normPiece) continue;

            // 1. Jeśli nowy fragment zawiera w sobie całość dotychczasowego tekstu (kumulacja na Androidzie)
            if (normPiece.startsWith(normCombined)) {
                combined = piece;
                continue;
            }

            // 2. Jeśli dotychczasowy tekst zawiera już nowy fragment
            if (normCombined.endsWith(normPiece) || normCombined.includes(normPiece)) {
                continue;
            }

            // 3. Sprawdź nakładanie się słów na styku fragmentów (np. "meeting with" + "with my boss")
            const wordsCombined = combined.split(/\s+/);
            const wordsPiece = piece.split(/\s+/);

            const normWordsCombined = wordsCombined.map(cleanWordForCompare);
            const normWordsPiece = wordsPiece.map(cleanWordForCompare);

            let maxOverlap = 0;
            const maxCheck = Math.min(normWordsCombined.length, normWordsPiece.length);

            for (let k = 1; k <= maxCheck; k++) {
                const suffix = normWordsCombined.slice(normWordsCombined.length - k).join(' ');
                const prefix = normWordsPiece.slice(0, k).join(' ');
                if (suffix === prefix && suffix.length > 0) {
                    maxOverlap = k;
                }
            }

            if (maxOverlap > 0) {
                const nonOverlappingWords = wordsPiece.slice(maxOverlap);
                if (nonOverlappingWords.length > 0) {
                    combined += ' ' + nonOverlappingWords.join(' ');
                }
            } else {
                combined += ' ' + piece;
            }
        }
        return combined.replace(/\s+/g, ' ').trim();
    }

    let finalPieces = [];
    let interimPieces = [];

    for (let i = 0; i < results.length; i++) {
        const transcript = results[i][0] ? results[i][0].transcript.trim() : '';
        if (!transcript) continue;
        if (results[i].isFinal) {
            finalPieces.push(transcript);
        } else {
            interimPieces.push(transcript);
        }
    }

    const finalCombined = mergePieces(finalPieces);
    const interimCombined = mergePieces(interimPieces);

    let sessionText = '';
    if (finalCombined && interimCombined) {
        sessionText = mergePieces([finalCombined, interimCombined]);
    } else {
        sessionText = finalCombined || interimCombined;
    }

    const fullText = (initialText ? initialText + ' ' : '') + sessionText;
    return fullText.replace(/\s+/g, ' ').trim();
}

let recognition = null;
let isRecording = false;
let micBtn = null;
let inputField = null;
let autoSendCheckbox = null;
let sttStatus = null;
let initialTranscript = '';
let shouldSendOnStop = false;

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    micBtn = document.getElementById('mic-btn');
    inputField = document.getElementById('input');
    autoSendCheckbox = document.getElementById('stt-auto-send');
    sttStatus = document.getElementById('stt-status');
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!SpeechRecognition) {
        if (micBtn) {
            micBtn.style.opacity = '0.6';
            micBtn.title = 'Twoja przeglądarka nie obsługuje rozpoznawania mowy (skorzystaj z Chrome/Edge).';
        }
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Język angielski
    recognition.interimResults = true; // Podgląd w czasie rzeczywistym
    recognition.continuous = !isMobile;

    recognition.onstart = function () {
        isRecording = true;
        initialTranscript = inputField ? inputField.value.trim() : '';

        if (micBtn) {
            micBtn.innerHTML = '⏹️ STOP i Wyślij wypowiedź';
            micBtn.style.background = 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)';
            micBtn.classList.add('recording-pulse');
        }
        if (sttStatus) {
            sttStatus.innerText = '🔴 Nagrywam... Mów swobodnie. Kliknij STOP, aby zakończyć i wysłać.';
            sttStatus.style.color = '#38bdf8';
        }
    };

    recognition.onresult = function (event) {
        if (inputField) {
            inputField.value = assembleSpeechTranscript(event.results, initialTranscript);
        }
    };

    recognition.onerror = function (event) {
        console.warn('Speech recognition error:', event.error);
        if (event.error !== 'no-speech') {
            if (sttStatus) {
                sttStatus.innerText = `Status mikrofonu: ${event.error}`;
                sttStatus.style.color = '#f87171';
            }
        }
    };

    recognition.onend = function () {
        const wasRecording = isRecording;
        stopRecordingUI();

        // Jeśli zatrzymanie nastąpiło przez kliknięcie STOP lub zaznaczono auto-send
        if (shouldSendOnStop || (autoSendCheckbox && autoSendCheckbox.checked && wasRecording)) {
            shouldSendOnStop = false;
            if (inputField) {
                const text = inputField.value.trim();
                if (text.length > 0 && typeof sendUserMessage === 'function') {
                    setTimeout(() => {
                        sendUserMessage();
                    }, 250);
                }
            }
        }
    };
}

function toggleSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        alert('Rozpoznawanie mowy nie jest wspierane w tej przeglądarce. Użyj Google Chrome lub Microsoft Edge.');
        return;
    }

    if (!recognition) {
        initSpeechRecognition();
    }

    if (isRecording) {
        // Użytkownik kliknął STOP
        shouldSendOnStop = true;
        try {
            recognition.stop();
        } catch (e) { }
        stopRecordingUI();
    } else {
        // Użytkownik kliknął START
        shouldSendOnStop = false;
        try {
            recognition.start();
        } catch (e) {
            console.warn('Recognition start error:', e);
            try {
                recognition.stop();
                setTimeout(() => recognition.start(), 150);
            } catch (err) { }
        }
    }
}

function stopRecordingUI() {
    isRecording = false;
    if (micBtn) {
        micBtn.innerHTML = '🎤 Odpowiedz głosem (Start)';
        micBtn.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
        micBtn.classList.remove('recording-pulse');
    }
    if (sttStatus) {
        sttStatus.innerText = '';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpeechRecognition);
} else {
    initSpeechRecognition();
}
