console.log('🪄🦕 WizardOrpheus powered by Google Gemini API (Auto-Adaptive Engine)');

class WizardOrpheus {
  constructor(apiKey, prompt) {
    if (apiKey && !prompt) {
      prompt = apiKey;
      apiKey = '';
    }

    this.discoveredModel = null;
    this.prompt = prompt || '';
    this.variables = {};
    this.contents = [];
    this.tools = [];
    this.outputFunctions = {};

    // Pobieranie klucza API z pamięci lokalnej lub argumentu
    this.apiKey = apiKey || localStorage.getItem('gemini_api_key') || '';
  }

  // Pobranie lub zapytanie użytkownika o darmowy klucz Gemini API
  getApiKey() {
    if (this.apiKey && this.apiKey.length > 20 && !this.apiKey.startsWith('GY38') && !this.apiKey.startsWith('34KD')) {
      return this.apiKey;
    }

    let savedKey = localStorage.getItem('gemini_api_key');
    if (savedKey && savedKey.trim().length > 15) {
      this.apiKey = savedKey.trim();
      return this.apiKey;
    }

    return null;
  }

  // Dynamiczne pobranie listy aktywnych modeli lub użycie wybranego przez użytkownika
  async getBestModel(key) {
    if (this.discoveredModel) return this.discoveredModel;

    // 1. Sprawdzenie czy użytkownik wybrał konkretny model w pomocnicze.html
    const userSelected = localStorage.getItem('gemini_selected_model');
    if (userSelected && userSelected !== 'auto') {
      this.discoveredModel = userSelected;
      console.log(`Używam modelu wybranego w ustawieniach: ${this.discoveredModel}`);
      return this.discoveredModel;
    }

    try {
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${key}`);
      if (resp.ok) {
        const data = await resp.json();
        const available = (data.models || [])
          .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent'))
          .map(m => m.name.replace(/^models\//, ''));

        console.log('Dostępne modele Gemini dla Twojego klucza:', available);

        // Szukamy najlepszego modelu w kolejności preferencji
        const preferred = [
          'gemini-2.5-flash',
          'gemini-2.0-flash',
          'gemini-1.5-flash',
          'gemini-1.5-flash-latest',
          'gemini-1.5-flash-001',
          'gemini-1.5-flash-002',
          'gemini-2.0-flash-exp',
          'gemini-2.5-pro',
          'gemini-1.5-pro-latest',
          'gemini-1.5-pro',
          'gemini-pro'
        ];

        for (let pref of preferred) {
          if (available.includes(pref)) {
            this.discoveredModel = pref;
            console.log(`Wybrano automatycznie model: ${this.discoveredModel}`);
            return this.discoveredModel;
          }
        }

        const flashModel = available.find(m => m.includes('flash'));
        this.discoveredModel = flashModel || available[0] || 'gemini-2.5-flash';
        return this.discoveredModel;
      }
    } catch (e) {
      console.warn('Nie udało się pobrać listy modeli, używam domyślnego:', e);
    }

    this.discoveredModel = 'gemini-2.5-flash';
    return this.discoveredModel;
  }

  variable(name, description, defaultValue) {
    this.variables[name] = {
      value: defaultValue,
      description
    };
  }

  createUserAction({ name, parameters, howBotShouldHandle }) {
    this[name] = (...args) => {
      let inputObj = {};
      args.forEach((arg, i) => {
        inputObj[parameters[i] || `param_${i}`] = arg;
      });

      const userText = typeof args[0] === 'string' ? args[0] : JSON.stringify(inputObj);

      // Dodanie wiadomości do historii konwersacji
      this.contents.push({
        role: 'user',
        parts: [{ text: userText }]
      });

      this.executeGeminiRequest();
    };
  }

  botAction(type, prompt, args, callback) {
    this.outputFunctions[type] = callback;
  }

  async executeGeminiRequest(retryCount = 0) {
    const key = this.getApiKey();
    if (!key) {
      const callback = this.outputFunctions['respond'] || Object.values(this.outputFunctions)[0];
      if (callback) {
        callback({
          response: `⚠️ Brak zapisanego klucza Google Gemini API. Przejdź do strony <a href="../../pomocnicze.html" style="color: #38bdf8; text-decoration: underline; font-weight: bold;">pomocnicze.html</a>, aby zapisać swój darmowy klucz.`
        });
      }
      return;
    }

    let modelName = await this.getBestModel(key);
    let url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${key}`;

    const systemPrompt = `${this.prompt}

CURRENT STATE VARIABLES:
${JSON.stringify(this.variables, null, 2)}

INSTRUCTIONS:
1. Roleplay your character accurately.
2. Update the state of variables (like CurrentDegreeOfBelief) according to the rules.
3. If the user makes grammatical mistakes in English, briefly correct them.
4. Always respond with a valid JSON object in this exact format:
{
  "response": "Your spoken dialogue to the user here",
  "degreeOfBelief": 30,
  "variables": { "CurrentDegreeOfBelief": 30 }
}`;

    const requestBody = {
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      contents: this.contents,
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json"
      }
    };

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody)
      });

      if (!resp.ok) {
        const errData = await resp.json().catch(() => ({}));
        const errMsg = errData.error?.message || `HTTP ${resp.status}`;

        // Inteligentne wykrycie modelu sugerowanego bezpośrednio przez odpowiedź Google API
        const match = errMsg.match(/use models\/([a-zA-Z0-9.-]+)/i) || errMsg.match(/models\/([a-zA-Z0-9.-]+)/i);
        if (match && match[1] && retryCount < 2 && match[1] !== modelName) {
          const suggestedModel = match[1].replace(/^models\//, '');
          console.log(`Google API zasugerowało model: ${suggestedModel}. Ponawiam zapytanie...`);
          this.discoveredModel = suggestedModel;
          return this.executeGeminiRequest(retryCount + 1);
        }

        throw new Error(errMsg);
      }

      const data = await resp.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';

      // Zapis odpowiedzi asystenta w historii
      this.contents.push({
        role: 'model',
        parts: [{ text: rawText }]
      });

      let parsed = {};
      try {
        parsed = JSON.parse(rawText);
      } catch (e) {
        parsed = { response: rawText };
      }

      // Aktualizacja zmiennych i widoku na stronie
      if (parsed.degreeOfBelief !== undefined) {
        if (this.variables['CurrentDegreeOfBelief']) {
          this.variables['CurrentDegreeOfBelief'].value = parsed.degreeOfBelief;
        }
        const el = document.getElementById('CurrentDegreeOfBelief');
        if (el) el.innerText = `: ${parsed.degreeOfBelief}`;
      } else if (parsed.variables) {
        for (let k in parsed.variables) {
          if (this.variables[k]) this.variables[k].value = parsed.variables[k];
          const el = document.getElementById(k);
          if (el) el.innerText = `: ${parsed.variables[k]}`;
        }
      }

      // Wywołanie zarejestrowanej akcji bota ('respond')
      const callback = this.outputFunctions['respond'] || Object.values(this.outputFunctions)[0];
      if (callback) {
        callback({
          response: parsed.response || parsed.reply || rawText
        });
      }
    } catch (err) {
      console.error('Gemini API Error:', err);
      this.discoveredModel = null;
      const callback = this.outputFunctions['respond'] || Object.values(this.outputFunctions)[0];
      if (callback) {
        callback({
          response: `(Błąd połączenia z Gemini API [${modelName}]: ${err.message}. Sprawdź swój klucz API).`
        });
      }
    }
  }
}
