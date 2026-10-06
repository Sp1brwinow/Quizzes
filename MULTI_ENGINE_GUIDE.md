# MultiEngine – Silnik Trybu Wieloosobowego dla Gier Sieciowych

Uniwersalny, modułowy silnik czasu rzeczywistego oparty na **Firebase Realtime Database**, stworzony z myślą o grach i quizach platformy **HackClub Quiz** (np. *Famous Places*, *ClimGuesser*, *Quizy Geograficzne*, *Pojynki Matematyczne* itp.).

---

## 🚀 Główne Możliwości Silnika

1. **Pokoje dla 2–6 graczy** – automatyczne generowanie 4-znakowych kodów (np. `K7X9`) oraz obsługa bezpośrednich linków z parametrem `?room=K7X9`.
2. **Pełna synchronizacja stanu gry w czasie rzeczywistym**:
   - `lobby` – poczekalnia z listą graczy i ustawieniami.
   - `playing` – runda w toku z synchronizowanym czasem serwerowym.
   - `round_reveal` – podsumowanie rundy po oddaniu odpowiedzi przez wszystkich graczy lub upływie czasu.
   - `finished` – zakończenie gry, generowanie podium (🥇 🥈 🥉) i tabeli wyników.
3. **Automatyczna obsługa rozłączeń (`onDisconnect`)** – usuwanie graczy wychodzących z pokoju oraz zamykanie pokoju, gdy opuści go gospodarz (*Host*).
4. **Paleta 6 unikalnych kolorów** – każdy gracz otrzymuje swój unikalny kolor, ikonę i wskaźnik.
5. **Wbudowane timery**:
   - `startTimer(seconds)` – odliczanie czasu na rundę.
   - `startRevealTimer(seconds)` – 10-sekundowe odliczanie przed kolejną rundą.

---

## 📦 Jak dodać tryb Multiplayer do nowej gry

### Krok 1: Dołączenie skryptów w nagłówku `<head>` lub na dole strony

```html
<!-- 1. Firebase Compat SDK -->
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.8.0/firebase-database-compat.js"></script>

<!-- 2. Silnik MultiEngine -->
<script src="../multi_engine.js"></script> <!-- lub src="multi_engine.js" -->
```

---

### Krok 2: Inicjalizacja instancji `MultiEngine`

```javascript
const multi = new MultiEngine({
    storagePrefix: 'moja_gra', // przedrostek kluczy w sessionStorage/localStorage
    maxPlayers: 6,
    defaultRoundTime: 20,
    callbacks: {
        onRoomUpdate: (roomData, playersList, isHost, mySlot) => {
            console.log("Aktualizacja pokoju:", roomData);
        },
        onStatusLobby: (roomData, playersList, isHost) => {
            // Pokaż poczekalnię (lobby)
        },
        onStatusPlaying: (roomData, playersList, currentRound, isNewRound) => {
            // Rozpocznij rundę `currentRound`
            if (isNewRound) {
                zaladujPytanieRundy(currentRound);
            }
        },
        onStatusReveal: (roomData, playersList, currentRound) => {
            // Pokaż odpowiedzi wszystkich graczy w tej rundzie
        },
        onStatusFinished: (roomData, playersList) => {
            // Pokaż finałowe podium i podsumowanie
        },
        onHostLeft: () => {
            alert("Gospodarz opuścił grę.");
        },
        onTimerTick: (secondsLeft, isCritical, isWarning) => {
            document.getElementById('timer-display').innerText = `${secondsLeft}s`;
        },
        onTimerExpired: () => {
            // Automatyczne zaliczenie braku odpowiedzi lub strzału po czasie
        }
    }
});
```

---

### Krok 3: Tworzenie i dołączanie do pokoju

```javascript
// Gospodarz (Host) tworzy pokój:
async function stworzPokoj() {
    multi.setNickname("Jan");
    const roomCode = await multi.createRoom({
        totalRounds: 5,
        roundTimeSec: 20,
        difficulty: 'standard',
        roundItems: [12, 45, 3, 19, 8], // wylosowane indeksy pytań
        customData: { kategoria: 'stolice' }
    });
    console.log("Kod pokoju:", roomCode);
}

// Gracz dołącza do pokoju:
async function dolaczDoPokoju(kod, nick) {
    await multi.joinRoom(kod, nick);
}
```

---

### Krok 4: Wysłanie odpowiedzi w rundzie

```javascript
function wyslijOdpowiedzGracza(odpowiedz, punkty) {
    multi.submitRoundScore(multi.roomData.currentRound, {
        answer: odpowiedz,
        score: punkty,
        submitted: true
    });
}
```

---

### Krok 5: Przejście do kolejnej rundy (Host) lub restart

```javascript
// Kolejna runda (Host wywołuje po zakończeniu fazy reveal):
multi.nextRound();

// Nowa gra w tym samym pokoju:
multi.restartGame({
    newRoundPlaces: [5, 11, 22, 33, 44]
});

// Wyjście z pokoju:
multi.leaveRoom();
```

---

## 🎨 Paleta kolorów graczy (`MultiEngine.PLAYER_COLORS`)

| Slot | Kolor | Hex | Ikona |
| :---: | :---: | :---: | :---: |
| 0 | Czerwony | `#ef4444` | 🔴 |
| 1 | Błękitny | `#38bdf8` | 🔵 |
| 2 | Zielony | `#10b981` | 🟢 |
| 3 | Złoty | `#f59e0b` | 🟡 |
| 4 | Fioletowy | `#a855f7` | 🟣 |
| 5 | Pomarańczowy | `#f97316` | 🟠 |

---

## 🛠️ Funkcje Pomocnicze

- `MultiEngine.generateRoomCode(length)` – generuje losowy, 4-znakowy kod (np. `B8YP`).
- `MultiEngine.formatTime(seconds)` – formatuje sekundy na format `mm:ss`.
- `MultiEngine.calculateHaversineDistance(lat1, lon1, lat2, lon2)` – oblicza odległość w km między współrzędnymi GPS.
- `multi.copyRoomCode()` – kopiuje kod pokoju do schowka.
- `multi.copyRoomLink()` – kopiuje pełny link do gry ze znacznikiem `?room=KOD`.
