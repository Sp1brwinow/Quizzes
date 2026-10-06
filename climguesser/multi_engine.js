/**
 * =========================================================================
 * MultiEngine – Uniwersalny Silnik Wieloosobowy (Firebase Realtime Database)
 * =========================================================================
 * Obsługuje tworzenie pokojów (2-6 graczy), dołączanie po kodzie lub linku,
 * poczekalnię (lobby), synchronizację rund w czasie rzeczywistym,
 * obsługę rozłączeń (onDisconnect), timery serwerowe oraz podsumowania/podium.
 * 
 * Może być wykorzystany w dowolnej grze sieciowej (geografia, quizy, gry turowe).
 * =========================================================================
 */

(function (global) {
    'use strict';

    // Domyślna konfiguracja Firebase Realtime Database
    const DEFAULT_FIREBASE_CONFIG = {
        apiKey: "AIzaSyB4CUEtULp5b8Aba8y9LKHJMxFMeI26luw",
        authDomain: "famous-places-1ad11.firebaseapp.com",
        databaseURL: "https://famous-places-1ad11-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "famous-places-1ad11",
        storageBucket: "famous-places-1ad11.firebasestorage.app",
        messagingSenderId: "814519380150",
        appId: "1:814519380150:web:6b79cd9f4c1de0f2161e17",
        measurementId: "G-N35K3K7BD4"
    };

    // Paleta 6 unikalnych kolorów dla graczy
    const PLAYER_COLORS = [
        { id: 0, hex: '#ef4444', border: '#b91c1c', name: 'Czerwony', icon: '🔴', pinEmoji: '📍' },
        { id: 1, hex: '#38bdf8', border: '#0284c7', name: 'Błękitny', icon: '🔵', pinEmoji: '📍' },
        { id: 2, hex: '#10b981', border: '#047857', name: 'Zielony', icon: '🟢', pinEmoji: '📍' },
        { id: 3, hex: '#f59e0b', border: '#b45309', name: 'Złoty', icon: '🟡', pinEmoji: '📍' },
        { id: 4, hex: '#a855f7', border: '#7e22ce', name: 'Fioletowy', icon: '🟣', pinEmoji: '📍' },
        { id: 5, hex: '#f97316', border: '#c2410c', name: 'Pomarańczowy', icon: '🟠', pinEmoji: '📍' }
    ];

    class MultiEngine {
        /**
         * @param {Object} options Opcje konfiguracyjne silnika
         */
        constructor(options = {}) {
            this.config = Object.assign({}, DEFAULT_FIREBASE_CONFIG, options.firebaseConfig || {});
            this.storagePrefix = options.storagePrefix || 'multi_engine';
            this.maxPlayers = options.maxPlayers || 6;
            this.defaultRoundTime = options.defaultRoundTime || 20;
            this.callbacks = options.callbacks || {};

            this.fbApp = null;
            this.fbDb = null;

            // Identyfikatory lokalnego gracza
            this.myPlayerId = sessionStorage.getItem(`${this.storagePrefix}_player_id`) || ('p_' + Math.random().toString(36).substring(2, 9));
            sessionStorage.setItem(`${this.storagePrefix}_player_id`, this.myPlayerId);

            this.myPlayerName = localStorage.getItem(`${this.storagePrefix}_nickname`) || '';
            this.mySlot = 0;
            this.isHost = false;

            // Stan pokoju
            this.isMultiplayer = false;
            this.roomId = null;
            this.roomRef = null;
            this.roomData = null;
            this.lastLoadedRound = 0;

            // Timery
            this.timerInterval = null;
            this.timeLeft = this.defaultRoundTime;
            this.revealTimerInterval = null;
            this.currentRevealRound = null;

            this.initFirebase();
        }

        // =========================================================================
        // INICJALIZACJA FIREBASE
        // =========================================================================
        initFirebase() {
            try {
                if (typeof firebase !== 'undefined') {
                    // Sprawdzenie czy aplikacja Firebase nie została już zainicjalizowana
                    if (!firebase.apps || firebase.apps.length === 0) {
                        this.fbApp = firebase.initializeApp(this.config);
                    } else {
                        this.fbApp = firebase.app();
                    }
                    this.fbDb = firebase.database();
                } else {
                    console.warn("MultiEngine: SDK Firebase nie jest załadowane w oknie przeglądarki.");
                }
            } catch (err) {
                console.warn("MultiEngine: Błąd inicjalizacji Firebase:", err);
            }
        }

        // =========================================================================
        // OBSŁUGA GRACZA I NICKU
        // =========================================================================
        setNickname(name) {
            const clean = (name || '').trim();
            if (clean) {
                this.myPlayerName = clean;
                localStorage.setItem(`${this.storagePrefix}_nickname`, clean);
            }
            return clean;
        }

        getNickname() {
            return this.myPlayerName || localStorage.getItem(`${this.storagePrefix}_nickname`) || '';
        }

        getPlayerColor(slot = 0) {
            return PLAYER_COLORS[slot % PLAYER_COLORS.length] || PLAYER_COLORS[0];
        }

        // Generowanie 4-znakowego losowego kodu pokoju
        static generateRoomCode(len = 4) {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
            let code = '';
            for (let i = 0; i < len; i++) {
                code += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return code;
        }

        // =========================================================================
        // TWORZENIE POKOJU (HOST)
        // =========================================================================
        async createRoom({
            roundsCount = 5,
            roundTimeSec = 20,
            difficulty = 'easy',
            roundItems = [],
            customData = {}
        } = {}) {
            if (!this.fbDb) {
                this.emitToast("⚠️ Baza danych Firebase nie jest połączona.", "error");
                throw new Error("Firebase DB not initialized");
            }

            this.stopTimer();
            this.stopRevealTimer();

            const nick = this.getNickname();
            if (!nick) {
                this.emitToast("⚠️ Wpisz swój nick przed utworzeniem pokoju!", "warning");
                throw new Error("Nickname required");
            }

            const code = MultiEngine.generateRoomCode(4);

            const roomPayload = {
                hostId: this.myPlayerId,
                difficulty: difficulty,
                status: 'lobby',
                currentRound: 1,
                totalRounds: roundsCount,
                roundTime: roundTimeSec,
                roundPlaces: roundItems,
                customData: customData,
                createdAt: firebase.database.ServerValue.TIMESTAMP,
                players: {
                    [this.myPlayerId]: {
                        id: this.myPlayerId,
                        name: nick,
                        slot: 0,
                        isHost: true,
                        totalScore: 0
                    }
                }
            };

            await this.fbDb.ref('rooms/' + code).set(roomPayload);
            this.mySlot = 0;
            this.isHost = true;
            this.attachRoomListener(code);
            this.emitToast(`👑 Utworzono pokój ${code}! Zaproś znajomych.`, "success");
            return code;
        }

        // =========================================================================
        // DOŁĄCZANIE DO POKOJU
        // =========================================================================
        async joinRoom(roomCode, nickname = null) {
            if (!this.fbDb) {
                this.emitToast("⚠️ Baza danych Firebase nie jest połączona.", "error");
                throw new Error("Firebase DB not initialized");
            }

            this.stopTimer();
            this.stopRevealTimer();

            if (nickname) {
                this.setNickname(nickname);
            }
            const nick = this.getNickname();
            if (!nick) {
                this.emitToast("⚠️ Wpisz swój nick przed wejściem do gry!", "warning");
                throw new Error("Nickname required");
            }

            const code = (roomCode || '').trim().toUpperCase();
            if (!code || code.length < 3) {
                this.emitToast("⚠️ Wpisz poprawny kod pokoju!", "warning");
                throw new Error("Invalid room code");
            }

            const snapshot = await this.fbDb.ref('rooms/' + code).once('value');
            if (!snapshot.exists()) {
                this.emitToast("❌ Nie znaleziono pokoju o podanym kodzie!", "error");
                throw new Error("Room not found");
            }

            const r = snapshot.val();
            if (r.status === 'finished') {
                this.emitToast("⚠️ Gra w tym pokoju została już zakończona!", "warning");
                throw new Error("Room game already finished");
            }

            const existingPlayers = Object.values(r.players || {});
            const isAlreadyIn = r.players && r.players[this.myPlayerId];
            if (existingPlayers.length >= this.maxPlayers && !isAlreadyIn) {
                this.emitToast(`⚠️ Pokój jest już pełny (max ${this.maxPlayers} graczy)!`, "warning");
                throw new Error("Room is full");
            }

            // Przydział wolnego slotu 0..maxPlayers-1
            const usedSlots = existingPlayers.map(p => p.slot);
            let assignedSlot = 0;
            for (let s = 0; s < this.maxPlayers; s++) {
                if (!usedSlots.includes(s)) {
                    assignedSlot = s;
                    break;
                }
            }

            this.mySlot = (isAlreadyIn && isAlreadyIn.slot !== undefined) ? isAlreadyIn.slot : assignedSlot;
            this.isHost = (r.hostId === this.myPlayerId);

            const myData = {
                id: this.myPlayerId,
                name: nick,
                slot: this.mySlot,
                isHost: this.isHost,
                totalScore: (isAlreadyIn && isAlreadyIn.totalScore) || 0
            };

            await this.fbDb.ref(`rooms/${code}/players/${this.myPlayerId}`).set(myData);
            this.attachRoomListener(code);
            this.emitToast(`✅ Dołączono do pokoju ${code}!`, "success");
            return r;
        }

        // =========================================================================
        // NASŁUCHIWANIE I SYNCHRONIZACJA POKOJU
        // =========================================================================
        attachRoomListener(code) {
            this.stopTimer();
            this.stopRevealTimer();
            this.roomId = code;
            this.isMultiplayer = true;

            this.roomRef = this.fbDb.ref('rooms/' + code);
            this.roomRef.on('value', (snap) => this.handleRoomUpdate(snap));

            // onDisconnect: jeśli Host opuści pokój, status zmienia się na 'host_left'
            if (this.isHost) {
                this.roomRef.child('status').onDisconnect().set('host_left');
            }
            this.roomRef.child('players/' + this.myPlayerId).onDisconnect().remove();

            if (this.callbacks.onConnected) {
                this.callbacks.onConnected(code);
            }
        }

        handleRoomUpdate(snapshot) {
            if (!snapshot.exists()) {
                this.emitToast("🚪 Pokój został zamknięty przez gospodarza.", "info");
                this.leaveRoom(false);
                return;
            }

            this.roomData = snapshot.val();

            // Host opuścił grę
            if (this.roomData.status === 'host_left') {
                this.emitToast("⚠️ Gospodarz opuścił grę. Rozgrywka została zakończona.", "warning");
                this.stopTimer();
                this.stopRevealTimer();
                if (this.callbacks.onHostLeft) {
                    this.callbacks.onHostLeft();
                }
                this.leaveRoom(false);
                return;
            }

            const playersMap = this.roomData.players || {};

            // Usunięty z pokoju
            if (!playersMap[this.myPlayerId]) {
                this.emitToast("🚪 Zostałeś usunięty z pokoju.", "info");
                if (this.callbacks.onPlayerRemoved) {
                    this.callbacks.onPlayerRemoved();
                }
                this.leaveRoom(false);
                return;
            }

            this.mySlot = playersMap[this.myPlayerId].slot || 0;
            this.isHost = (this.roomData.hostId === this.myPlayerId);

            if (this.isHost && this.roomRef) {
                this.roomRef.child('status').onDisconnect().set('host_left');
            }

            const playersList = Object.values(playersMap).sort((a, b) => (a.slot || 0) - (b.slot || 0));

            // Główny callback aktualizacji pokoju
            if (this.callbacks.onRoomUpdate) {
                this.callbacks.onRoomUpdate(this.roomData, playersList, this.isHost, this.mySlot);
            }

            // 1. Stan: LOBBY
            if (this.roomData.status === 'lobby') {
                this.stopTimer();
                this.stopRevealTimer();
                if (this.callbacks.onStatusLobby) {
                    this.callbacks.onStatusLobby(this.roomData, playersList, this.isHost);
                }
                return;
            }

            // 2. Stan: PLAYING (W GRZE)
            if (this.roomData.status === 'playing') {
                const isNewRound = (this.lastLoadedRound !== this.roomData.currentRound);
                if (isNewRound) {
                    this.lastLoadedRound = this.roomData.currentRound;
                    this.stopRevealTimer();
                }

                if (this.callbacks.onStatusPlaying) {
                    this.callbacks.onStatusPlaying(this.roomData, playersList, this.roomData.currentRound, isNewRound);
                }

                // Sprawdzanie przez Hosta, czy wszyscy oddali strzał
                if (this.isHost) {
                    const currentR = this.roomData.currentRound;
                    const allSubmitted = playersList.length > 0 && playersList.every(p => {
                        const rInfo = p.rounds && p.rounds[currentR];
                        return rInfo && rInfo.submitted;
                    });

                    if (allSubmitted) {
                        this.roomRef.update({ status: 'round_reveal' });
                    }
                }
                return;
            }

            // 3. Stan: ROUND_REVEAL (ODKRYCIE WYNIKÓW RUNDY)
            if (this.roomData.status === 'round_reveal') {
                this.stopTimer();
                if (this.callbacks.onStatusReveal) {
                    this.callbacks.onStatusReveal(this.roomData, playersList, this.roomData.currentRound);
                }
                return;
            }

            // 4. Stan: FINISHED (KONIEC GRY)
            if (this.roomData.status === 'finished') {
                this.stopTimer();
                this.stopRevealTimer();
                if (this.callbacks.onStatusFinished) {
                    this.callbacks.onStatusFinished(this.roomData, playersList);
                }
                return;
            }
        }

        // =========================================================================
        // AKCJE GRY (START, STRZAŁ, KOLEJNA RUNDA, RESTART)
        // =========================================================================
        startGame(initialRound = 1) {
            if (!this.isHost || !this.roomRef) return;
            this.roomRef.update({
                status: 'playing',
                currentRound: initialRound,
                roundStartTime: firebase.database.ServerValue.TIMESTAMP
            });
        }

        async submitRoundScore(roundNum, roundData = {}) {
            if (!this.roomRef) return;
            const dataToSave = Object.assign({
                submitted: true,
                timestamp: Date.now()
            }, roundData);

            await this.roomRef.child(`players/${this.myPlayerId}/rounds/${roundNum}`).set(dataToSave);

            // Aktualizacja sumarycznego wyniku jeśli podano scoreDelta / penalty
            if (roundData.penalty !== undefined || roundData.score !== undefined) {
                const delta = roundData.penalty !== undefined ? roundData.penalty : roundData.score;
                const snap = await this.roomRef.child(`players/${this.myPlayerId}/totalScore`).once('value');
                const curr = snap.val() || 0;
                await this.roomRef.child(`players/${this.myPlayerId}/totalScore`).set(curr + delta);
            }
        }

        nextRound() {
            if (!this.isHost || !this.roomRef || !this.roomData) return;
            const totalR = this.roomData.totalRounds || 5;
            if (this.roomData.currentRound < totalR) {
                this.roomRef.update({
                    status: 'playing',
                    currentRound: this.roomData.currentRound + 1,
                    roundStartTime: firebase.database.ServerValue.TIMESTAMP
                });
            } else {
                this.roomRef.update({ status: 'finished' });
            }
        }

        restartGame({ newRoundPlaces = [], totalRounds = null, roundTime = null } = {}) {
            if (!this.isHost || !this.roomRef || !this.roomData) return;
            const updates = {
                status: 'playing',
                currentRound: 1,
                roundStartTime: firebase.database.ServerValue.TIMESTAMP
            };

            if (newRoundPlaces && newRoundPlaces.length > 0) {
                updates.roundPlaces = newRoundPlaces;
            }
            if (totalRounds) updates.totalRounds = totalRounds;
            if (roundTime) updates.roundTime = roundTime;

            // Reset wyników wszystkich graczy
            const players = this.roomData.players || {};
            for (let pid in players) {
                updates[`players/${pid}/rounds`] = null;
                updates[`players/${pid}/totalScore`] = 0;
            }

            this.roomRef.update(updates);
        }

        // =========================================================================
        // OPUSZCZANIE POKOJU
        // =========================================================================
        leaveRoom(removeFromDb = true) {
            if (this.roomRef) {
                if (removeFromDb) {
                    if (this.isHost) {
                        this.roomRef.remove();
                    } else {
                        this.roomRef.child('players/' + this.myPlayerId).remove();
                    }
                }
                this.roomRef.off();
                this.roomRef = null;
            }

            this.isMultiplayer = false;
            this.roomId = null;
            this.isHost = false;
            this.roomData = null;
            this.lastLoadedRound = 0;

            this.stopTimer();
            this.stopRevealTimer();

            // Czyszczenie parametru ?room z adresu URL
            try {
                const url = new URL(window.location.href);
                if (url.searchParams.has('room')) {
                    url.searchParams.delete('room');
                    window.history.replaceState({}, '', url);
                }
            } catch (e) {}

            if (this.callbacks.onLeave) {
                this.callbacks.onLeave();
            }
        }

        // =========================================================================
        // TIMERY RUNDY I ODKRYCIA WYNIKÓW
        // =========================================================================
        startTimer(initialSeconds = this.defaultRoundTime) {
            this.stopTimer();
            this.timeLeft = initialSeconds;
            this.emitTimerTick();

            this.timerInterval = setInterval(() => {
                this.timeLeft--;
                this.emitTimerTick();

                if (this.timeLeft <= 0) {
                    this.stopTimer();
                    if (this.callbacks.onTimerExpired) {
                        this.callbacks.onTimerExpired();
                    }
                }
            }, 1000);
        }

        stopTimer() {
            if (this.timerInterval) {
                clearInterval(this.timerInterval);
                this.timerInterval = null;
            }
        }

        emitTimerTick() {
            const isCritical = this.timeLeft <= 5;
            const isWarning = this.timeLeft <= 10 && !isCritical;
            if (this.callbacks.onTimerTick) {
                this.callbacks.onTimerTick(this.timeLeft, isCritical, isWarning);
            }
        }

        startRevealTimer(durationSec = 10, roundNum = null, onTick = null, onComplete = null) {
            this.stopRevealTimer();
            this.currentRevealRound = roundNum;
            let secLeft = durationSec;

            if (onTick) onTick(secLeft);

            this.revealTimerInterval = setInterval(() => {
                secLeft--;
                if (onTick) onTick(secLeft);
                if (this.callbacks.onRevealTimerTick) {
                    this.callbacks.onRevealTimerTick(secLeft);
                }

                if (secLeft <= 0) {
                    this.stopRevealTimer();
                    if (onComplete) onComplete();
                    if (this.callbacks.onRevealTimerExpired) {
                        this.callbacks.onRevealTimerExpired();
                    }
                }
            }, 1000);
        }

        stopRevealTimer() {
            if (this.revealTimerInterval) {
                clearInterval(this.revealTimerInterval);
                this.revealTimerInterval = null;
            }
            this.currentRevealRound = null;
        }

        // =========================================================================
        // POMOCNICZE NARZĘDZIA (SCHOWEK, TOAST, MATEMATYKA)
        // =========================================================================
        copyRoomCode() {
            if (!this.roomId) return;
            navigator.clipboard.writeText(this.roomId).then(() => {
                this.emitToast(`📋 Skopiowano kod pokoju: ${this.roomId}`, "info");
            }).catch(() => {
                this.emitToast(`KOD: ${this.roomId} (Skopiuj ręcznie)`, "info");
            });
        }

        copyRoomLink(paramName = 'room') {
            if (!this.roomId) return;
            const url = `${window.location.origin}${window.location.pathname}?${paramName}=${this.roomId}`;
            navigator.clipboard.writeText(url).then(() => {
                this.emitToast("🔗 Link do pokoju skopiowany do schowka!", "info");
            }).catch(() => {
                this.emitToast(`KOD: ${this.roomId} (Skopiuj ręcznie)`, "info");
            });
        }

        emitToast(msg, type = "info") {
            if (this.callbacks.onToast) {
                this.callbacks.onToast(msg, type);
            } else {
                const toastEl = document.getElementById('toast-box');
                if (toastEl) {
                    toastEl.innerText = msg;
                    toastEl.classList.add('show');
                    setTimeout(() => { toastEl.classList.remove('show'); }, 3000);
                } else {
                    console.log(`[MultiEngine Toast ${type}]: ${msg}`);
                }
            }
        }

        // Formatowanie czasu mm:ss
        static formatTime(seconds) {
            const m = Math.floor(seconds / 60);
            const s = seconds % 60;
            return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        // Obliczanie odległości haversine (w km)
        static calculateHaversineDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                      Math.sin(dLon / 2) * Math.sin(dLon / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return R * c;
        }

        // Formatowanie współrzędnych geograficznych
        static formatCoord(val, type) {
            const dir = (type === 'lat') ? (val >= 0 ? 'N' : 'S') : (val >= 0 ? 'E' : 'W');
            return `${Math.abs(val).toFixed(2)}° ${dir}`;
        }
    }

    // Eksport globalny i stałe statyczne
    MultiEngine.DEFAULT_FIREBASE_CONFIG = DEFAULT_FIREBASE_CONFIG;
    MultiEngine.PLAYER_COLORS = PLAYER_COLORS;

    global.MultiEngine = MultiEngine;

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = MultiEngine;
    }
})(typeof window !== 'undefined' ? window : this);
