// =======================================================
// MODUŁ SYNTEZY MOWY (JĘZYK ANGIELSKI) - czytanie_angielski.js
// Obsługuje zapamiętywanie wybranego lektora i prędkości w localStorage
// =======================================================

// =======================================================
// ZMIENNA PRZERWY DO EKSPERYMENTÓW FONETYCZNYCH
// Wstawiana na początku tekstu oraz po kropkach, znakach zapytania i wykrzyknikach
// (z wyjątkiem ostatniego znaku interpunkcyjnego na końcu tekstu)
// Domyślna wartość: "a " (możesz wpisać np. "a ", "hmm ", "er ", ", ", itp.)
// =======================================================
var przerwa = "a ";

let englishVoices = [];
let voiceSelect = null;
let autoReadCheckbox = null;
let rateSlider = null;
let rateValSpan = null;
let przerwaInput = null;
let ttsBtn = null;
let lastAIResponse = '';

function initEnglishTTS() {
    voiceSelect = document.getElementById('tts-voice');
    autoReadCheckbox = document.getElementById('tts-auto-read');
    rateSlider = document.getElementById('tts-rate');
    rateValSpan = document.getElementById('tts-rate-val');
    przerwaInput = document.getElementById('tts-przerwa');
    ttsBtn = document.getElementById('tts-btn');

    // Inicjalizacja zmiennej przerwa z localStorage lub domyślnej
    const savedPrzerwa = localStorage.getItem('english_tts_przerwa');
    if (savedPrzerwa !== null) {
        przerwa = savedPrzerwa;
    }
    if (przerwaInput) {
        przerwaInput.value = przerwa;
        przerwaInput.addEventListener('input', function () {
            przerwa = this.value;
            localStorage.setItem('english_tts_przerwa', przerwa);
        });
    }

    if ('speechSynthesis' in window) {
        populateEnglishVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = populateEnglishVoices;
        }
    }

    // Inicjalizacja suwaka prędkości, jeśli obecny na stronie
    if (rateSlider) {
        const savedRate = localStorage.getItem('english_tts_rate') || '1.0';
        rateSlider.value = savedRate;
        if (rateValSpan) rateValSpan.innerText = savedRate + 'x';

        rateSlider.addEventListener('input', function () {
            localStorage.setItem('english_tts_rate', this.value);
            if (rateValSpan) rateValSpan.innerText = this.value + 'x';
        });
    }

    // Inicjalizacja wyboru głosu, jeśli obecny na stronie
    if (voiceSelect) {
        voiceSelect.addEventListener('change', function () {
            const selectedVoice = englishVoices[this.value];
            if (selectedVoice) {
                localStorage.setItem('english_tts_voice_name', selectedVoice.name);
            }
        });
    }
}

function populateEnglishVoices() {
    if (!('speechSynthesis' in window)) return;

    const allVoices = window.speechSynthesis.getVoices();
    englishVoices = allVoices.filter(v => v.lang.startsWith('en'));

    if (englishVoices.length === 0) {
        englishVoices = allVoices;
    }

    if (voiceSelect) {
        voiceSelect.innerHTML = '';
        const savedVoiceName = localStorage.getItem('english_tts_voice_name');
        let selectedIndex = 0;

        englishVoices.forEach((voice, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — Domyślny' : ''}`;

            if (savedVoiceName && voice.name === savedVoiceName) {
                selectedIndex = index;
            } else if (!savedVoiceName && (voice.lang === 'en-US' || voice.lang === 'en-GB') && selectedIndex === 0) {
                selectedIndex = index;
            }

            voiceSelect.appendChild(option);
        });

        voiceSelect.value = selectedIndex;
        if (englishVoices[selectedIndex]) {
            localStorage.setItem('english_tts_voice_name', englishVoices[selectedIndex].name);
        }
    }
}

function getPreferredVoice() {
    if (!('speechSynthesis' in window) || englishVoices.length === 0) {
        const all = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
        englishVoices = all.filter(v => v.lang.startsWith('en'));
        if (englishVoices.length === 0) englishVoices = all;
    }

    const savedVoiceName = localStorage.getItem('english_tts_voice_name');
    if (savedVoiceName) {
        const matched = englishVoices.find(v => v.name === savedVoiceName);
        if (matched) return matched;
    }

    // Domyślny angielski
    return englishVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB') || englishVoices[0] || null;
}

function getPreferredRate() {
    if (rateSlider) {
        return parseFloat(rateSlider.value) || 1.0;
    }
    const saved = localStorage.getItem('english_tts_rate');
    return saved ? (parseFloat(saved) || 1.0) : 1.0;
}

function stripHtml(html) {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

// =======================================================
// SYSTEM ZAPOBIEGANIA UCINANIU GŁOSEK I PRZEJŚĆ W CHROME
// =======================================================
let ttsWarmupCtx = null;
let activeToneOsc = null;
let activeToneGain = null;
let ttsKeepAliveTimer = null;

function startDacKeepAlive() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!ttsWarmupCtx && AudioContext) {
            ttsWarmupCtx = new AudioContext();
        }
        if (ttsWarmupCtx && ttsWarmupCtx.state === 'suspended') {
            ttsWarmupCtx.resume();
        }
        if (ttsWarmupCtx && !activeToneOsc) {
            activeToneOsc = ttsWarmupCtx.createOscillator();
            activeToneGain = ttsWarmupCtx.createGain();
            activeToneGain.gain.value = 0.00001; // Całkowicie niesłyszalny sygnał ciągły
            activeToneOsc.connect(activeToneGain);
            activeToneGain.connect(ttsWarmupCtx.destination);
            activeToneOsc.start();
        }
    } catch (e) { }
}

function stopDacKeepAlive() {
    try {
        if (activeToneOsc) {
            activeToneOsc.stop();
            activeToneOsc.disconnect();
            activeToneOsc = null;
            activeToneGain = null;
        }
        if (ttsKeepAliveTimer) {
            clearInterval(ttsKeepAliveTimer);
            ttsKeepAliveTimer = null;
        }
    } catch (e) { }
}

function prepareAcousticText(text) {
    let clean = stripHtml(text).trim();
    if (!clean) return '';

    // Pobierz wartość zmiennej przerwa (np. "a ")
    const pVal = (typeof przerwa !== 'undefined') ? przerwa : "a ";

    // 1. Zastąp kropki, znaki zapytania i wykrzykniki (z wyjątkiem ostatniego na samym końcu tekstu)
    // dodając po nich zdefiniowaną przerwę:
    clean = clean.replace(/([.?!;]+)\s+(?=\S)/g, `$1 ${pVal}`);

    // 2. Dodaj zdefiniowaną przerwę na samym początku tekstu
    return pVal + clean;
}

function speakTextEnglish(text) {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    stopDacKeepAlive();

    const safeText = prepareAcousticText(text);
    if (!safeText) return;

    startDacKeepAlive();

    const utterance = new SpeechSynthesisUtterance(safeText);
    const voice = getPreferredVoice();
    if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang || 'en-US';
    } else {
        utterance.lang = 'en-US';
    }

    utterance.rate = getPreferredRate();

    const testBtn = document.getElementById('test-tts-btn');
    const activeBtn = ttsBtn || testBtn;

    if (activeBtn) {
        const origHtml = activeBtn.innerHTML;
        const origBg = activeBtn.style.background;

        utterance.onstart = () => {
            activeBtn.innerHTML = '⏹️ Stop';
            activeBtn.style.background = '#e11d48';

            // Zabezpieczenie przed zawieszaniem się dłuższych zdań w Chrome
            if (ttsKeepAliveTimer) clearInterval(ttsKeepAliveTimer);
            ttsKeepAliveTimer = setInterval(() => {
                if (window.speechSynthesis.speaking) {
                    window.speechSynthesis.pause();
                    window.speechSynthesis.resume();
                } else {
                    clearInterval(ttsKeepAliveTimer);
                }
            }, 8000);
        };

        utterance.onend = utterance.onerror = () => {
            activeBtn.innerHTML = origHtml;
            activeBtn.style.background = origBg;
            stopDacKeepAlive();
        };
    } else {
        utterance.onend = utterance.onerror = () => {
            stopDacKeepAlive();
        };
    }

    // Odczekaj 50ms po wyczyszczeniu kolejki przed startem odtwarzania
    setTimeout(() => {
        window.speechSynthesis.speak(utterance);
    }, 50);
}

function toggleSpeechEnglish() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        if (ttsBtn) {
            ttsBtn.innerHTML = '🔊 Przeczytaj odpowiedź AI';
            ttsBtn.style.background = '#0284c7';
        }
    } else {
        if (lastAIResponse) {
            speakTextEnglish(lastAIResponse);
        } else {
            const conv = document.getElementById('conversation');
            if (conv) {
                const paragraphs = conv.getElementsByTagName('p');
                if (paragraphs.length > 0) {
                    speakTextEnglish(paragraphs[paragraphs.length - 1].innerText);
                }
            }
        }
    }
}

function onAIResponseReceived(responseFromAI) {
    lastAIResponse = responseFromAI || '';
    if (autoReadCheckbox && autoReadCheckbox.checked) {
        speakTextEnglish(responseFromAI);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnglishTTS);
} else {
    initEnglishTTS();
}
