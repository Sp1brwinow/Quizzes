// =======================================================
// MODUŁ ROZPOZNAWANIA MOWY (SPEECH-TO-TEXT) Z OBSŁUGĄ PRZERW I STOP/WYŚLIJ
// Plik: rozpoznawanie_mowy.js (Web Speech API)
// =======================================================

let recognition = null;
let isRecording = false;
let micBtn = null;
let inputField = null;
let autoSendCheckbox = null;
let sttStatus = null;
let accumulatedTranscript = '';
let shouldSendOnStop = false;

function initSpeechRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    micBtn = document.getElementById('mic-btn');
    inputField = document.getElementById('input');
    autoSendCheckbox = document.getElementById('stt-auto-send');
    sttStatus = document.getElementById('stt-status');

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
    recognition.continuous = true; // CIĄGŁE NAGRYWANIE - nie wyłącza się przy przerwach w mowie!

    recognition.onstart = function () {
        isRecording = true;
        accumulatedTranscript = inputField ? inputField.value.trim() : '';
        if (accumulatedTranscript.length > 0) {
            accumulatedTranscript += ' ';
        }

        if (micBtn) {
            micBtn.innerHTML = '⏹️ STOP i Wyślij wypowiedź';
            micBtn.style.background = 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)';
            micBtn.classList.add('recording-pulse');
        }
        if (sttStatus) {
            sttStatus.innerText = '🔴 Nagrywam... Mów swobodnie (możesz robić przerwy). Kliknij STOP, aby zakończyć i wysłać.';
            sttStatus.style.color = '#38bdf8';
        }
    };

    recognition.onresult = function (event) {
        let currentFinal = '';
        let currentInterim = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                currentFinal += event.results[i][0].transcript + ' ';
            } else {
                currentInterim += event.results[i][0].transcript;
            }
        }

        if (currentFinal) {
            accumulatedTranscript += currentFinal;
        }

        if (inputField) {
            inputField.value = (accumulatedTranscript + currentInterim).trim();
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
