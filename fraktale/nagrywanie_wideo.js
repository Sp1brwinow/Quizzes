/**
 * ============================================================================
 * UNIWERSALNY MODUŁ NAGRYWANIA WIDEO Z CANVAS (MP4 / WebM)
 * Pozwala nagrywać w czasie rzeczywistym animacje 2D/3D z dowolnego Canvasa.
 * ============================================================================
 */

(function () {
    let mediaRecorder = null;
    let recordedChunks = [];
    let recordStartTime = 0;
    let timerInterval = null;
    let targetCanvas = null;

    // Inicjalizacja po załadowaniu drzewa DOM
    window.addEventListener('DOMContentLoaded', () => {
        initVideoRecorder();
    });

    function initVideoRecorder() {
        // Znajdź główny canvas na stronie
        targetCanvas = document.querySelector('canvas:not(#snow-canvas)');
        if (!targetCanvas) {
            // Jeśli nie znaleziono od razu, ponów za chwilę
            setTimeout(() => {
                targetCanvas = document.querySelector('canvas:not(#snow-canvas)');
                if (targetCanvas) injectRecorderUI();
            }, 500);
            return;
        }
        injectRecorderUI();
    }

    function injectRecorderUI() {
        if (document.getElementById('video-recorder-panel')) return;

        // Domyślna nazwa pliku na podstawie tytułu strony
        const pageTitle = document.title
            .replace(/[^a-zA-Z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ_\- ]/g, '')
            .trim()
            .replace(/\s+/g, '_')
            .toLowerCase() || 'animacja_fraktal';

        const defaultFileName = `${pageTitle}_${new Date().toISOString().slice(0, 10)}`;

        // Kontener interfejsu nagrywarki
        const panel = document.createElement('div');
        panel.id = 'video-recorder-panel';
        panel.innerHTML = `
            <style>
                #video-recorder-panel {
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: rgba(15, 23, 42, 0.95);
                    border: 2px solid #38bdf8;
                    border-radius: 12px;
                    padding: 12px 16px;
                    color: #f8fafc;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(56, 189, 248, 0.3);
                    z-index: 999999;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    min-width: 290px;
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                }

                .vr-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: bold;
                    font-size: 0.92rem;
                    color: #38bdf8;
                    border-bottom: 1px solid #334155;
                    padding-bottom: 6px;
                }

                .vr-row {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .vr-input {
                    background: #0f172a;
                    border: 1px solid #475569;
                    color: #f8fafc;
                    padding: 6px 10px;
                    border-radius: 6px;
                    font-size: 0.88rem;
                    flex: 1;
                    outline: none;
                }

                .vr-input:focus {
                    border-color: #38bdf8;
                }

                .vr-btn {
                    padding: 8px 14px;
                    border: none;
                    border-radius: 6px;
                    font-weight: bold;
                    font-size: 0.9rem;
                    cursor: pointer;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    transition: all 0.2s;
                }

                .vr-btn-record {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    color: white;
                    flex: 1;
                    box-shadow: 0 2px 10px rgba(239, 68, 68, 0.4);
                }

                .vr-btn-record:hover {
                    background: #b91c1c;
                    transform: translateY(-1px);
                }

                .vr-btn-stop {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    flex: 1;
                    box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
                    display: none;
                }

                .vr-btn-stop:hover {
                    background: #047857;
                }

                .vr-timer {
                    font-family: monospace;
                    font-size: 1rem;
                    font-weight: bold;
                    color: #f87171;
                    display: none;
                    align-items: center;
                    gap: 6px;
                }

                .vr-pulse {
                    width: 10px;
                    height: 10px;
                    background-color: #ef4444;
                    border-radius: 50%;
                    animation: vr-pulse-anim 1s infinite;
                }

                @keyframes vr-pulse-anim {
                    0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
                    70% { transform: scale(1.15); box-shadow: 0 0 0 8px rgba(239, 68, 68, 0); }
                    100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
                }

                .vr-toggle-minimize {
                    cursor: pointer;
                    font-size: 0.8rem;
                    color: #94a3b8;
                    background: none;
                    border: none;
                }
                .vr-toggle-minimize:hover {
                    color: #f8fafc;
                }
            </style>

            <div class="vr-header">
                <span>🎬 Nagrywarka Wideo MP4</span>
                <button type="button" class="vr-toggle-minimize" onclick="toggleRecorderPanel()">_</button>
            </div>

            <div id="vr-body" style="display: flex; flex-direction: column; gap: 8px;">
                <div class="vr-row">
                    <label style="font-size: 0.8rem; color: #94a3b8; width: 50px;">Nazwa:</label>
                    <input type="text" id="vr-filename" class="vr-input" value="${defaultFileName}" placeholder="Nazwa pliku wideo">
                    <span style="font-size: 0.8rem; color: #94a3b8;">.mp4</span>
                </div>

                <div class="vr-row">
                    <div id="vr-timer-display" class="vr-timer">
                        <span class="vr-pulse"></span>
                        <span id="vr-time-text">REC 00:00</span>
                    </div>

                    <button type="button" id="vr-start-btn" class="vr-btn vr-btn-record" onclick="startCanvasRecording()">
                        ● Rozpocznij nagrywanie
                    </button>

                    <button type="button" id="vr-stop-btn" class="vr-btn vr-btn-stop" onclick="stopCanvasRecording()">
                        ⏹ Zatrzymaj i pobierz
                    </button>
                </div>
                <div id="vr-status-msg" style="font-size: 0.75rem; color: #38bdf8; text-align: center;"></div>
            </div>
        `;

        document.body.appendChild(panel);
    }

    window.toggleRecorderPanel = function () {
        const body = document.getElementById('vr-body');
        if (body.style.display === 'none') {
            body.style.display = 'flex';
        } else {
            body.style.display = 'none';
        }
    };

    window.startCanvasRecording = function () {
        if (!targetCanvas) {
            targetCanvas = document.querySelector('canvas:not(#snow-canvas)');
        }
        if (!targetCanvas) {
            alert('Błąd: Nie znaleziono aktywnego ekranu Canvas do nagrania.');
            return;
        }

        recordedChunks = [];
        const fps = 60;
        const stream = targetCanvas.captureStream(fps);

        // Wybór najlepszego kodeka (MP4 H.264 lub WebM)
        let mimeType = 'video/webm;codecs=vp9';
        let extension = 'mp4';

        const supportedTypes = [
            'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
            'video/mp4;codecs=avc1',
            'video/mp4',
            'video/webm;codecs=h264',
            'video/webm;codecs=vp9',
            'video/webm'
        ];

        for (let type of supportedTypes) {
            if (MediaRecorder.isTypeSupported(type)) {
                mimeType = type;
                if (type.includes('mp4')) extension = 'mp4';
                else extension = 'webm';
                break;
            }
        }

        try {
            mediaRecorder = new MediaRecorder(stream, {
                mimeType: mimeType,
                videoBitsPerSecond: 10000000 // 10 Mbps - jakość HD/4K
            });
        } catch (e) {
            mediaRecorder = new MediaRecorder(stream);
        }

        mediaRecorder.ondataavailable = function (e) {
            if (e.data && e.data.size > 0) {
                recordedChunks.push(e.data);
            }
        };

        mediaRecorder.onstop = function () {
            clearInterval(timerInterval);
            document.getElementById('vr-start-btn').style.display = 'inline-flex';
            document.getElementById('vr-stop-btn').style.display = 'none';
            document.getElementById('vr-timer-display').style.display = 'none';

            let rawName = document.getElementById('vr-filename').value.trim() || 'animacja_wideo';
            if (!rawName.endsWith('.mp4') && !rawName.endsWith('.webm')) {
                rawName += '.' + extension;
            }

            document.getElementById('vr-status-msg').innerText = '💾 Przetwarzanie i pobieranie pliku...';

            const blob = new Blob(recordedChunks, { type: mimeType });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = rawName;
            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                document.getElementById('vr-status-msg').innerText = '✅ Pobrano plik: ' + rawName;
            }, 800);
        };

        mediaRecorder.start(250); // zbieraj dane co 250ms

        // UI podczas nagrywania
        document.getElementById('vr-start-btn').style.display = 'none';
        document.getElementById('vr-stop-btn').style.display = 'inline-flex';
        document.getElementById('vr-timer-display').style.display = 'flex';
        document.getElementById('vr-status-msg').innerText = '🔴 Trwa nagrywanie...';

        recordStartTime = Date.now();
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
    };

    function updateTimer() {
        const elapsedSec = Math.floor((Date.now() - recordStartTime) / 1000);
        const mins = String(Math.floor(elapsedSec / 60)).padStart(2, '0');
        const secs = String(elapsedSec % 60).padStart(2, '0');
        document.getElementById('vr-time-text').innerText = `REC ${mins}:${secs}`;
    }

    window.stopCanvasRecording = function () {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
    };
})();
