# -*- coding: utf-8 -*-
with open('egzmat2025skot.html', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update task objects in gradeExam() to store isOpen, finalAns, reasoning
old_t4 = """            // 4. Zadanie 4 (Otwarte 0-2 pkt, Origami) - poprawny wynik: 57
            const t4Reason = document.getElementById('task4_reasoning').value.trim();
            const t4Ans = document.getElementById('task4_answer').value.trim();
            let t4Result = await gradeTask4(t4Reason, t4Ans);
            total += t4Result.score;
            examResults.tasks.push({
                nr: 4,
                type: 'Otwarte (0–2 pkt)',
                max: 2,
                score: t4Result.score,
                userAns: `Wynik: ${t4Ans || 'brak'} | Zapis: ${t4Reason || 'brak'}`,
                correct: '57 kartek niebieskich',
                feedback: t4Result.feedback,
                solution: 'Niech c oznacza liczbę kartek czerwonych: 37 + 1,5c + (c - 10) + c = 160 => 3,5c + 27 = 160 => 3,5c = 133 => c = 38. Liczba kartek niebieskich: 1,5 · 38 = 57.'
            });"""

new_t4 = """            // 4. Zadanie 4 (Otwarte 0-2 pkt, Origami) - poprawny wynik: 57
            const t4Reason = document.getElementById('task4_reasoning').value.trim();
            const t4Ans = document.getElementById('task4_answer').value.trim();
            let t4Result = await gradeTask4(t4Reason, t4Ans);
            total += t4Result.score;
            examResults.tasks.push({
                nr: 4,
                isOpen: true,
                type: 'Otwarte (0–2 pkt)',
                max: 2,
                score: t4Result.score,
                finalAns: t4Ans || 'brak',
                reasoning: t4Reason || 'brak zapisu obliczeń',
                userAns: t4Ans ? `${t4Ans} (zapis: ${t4Reason.replace(/\\n/g, '; ')})` : 'brak',
                correct: '57 kartek niebieskich',
                feedback: t4Result.feedback,
                solution: 'Niech c oznacza liczbę kartek czerwonych: 37 + 1,5c + (c - 10) + c = 160 => 3,5c + 27 = 160 => 3,5c = 133 => c = 38. Liczba kartek niebieskich: 1,5 · 38 = 57.'
            });"""

old_t5 = """            // 5. Zadanie 5 (Otwarte 0-3 pkt, Polanka-Dębina) - uzasadnienie
            const t5Reason = document.getElementById('task5_reasoning').value.trim();
            const t5Ans = document.getElementById('task5_answer').value.trim();
            let t5Result = await gradeTask5(t5Reason, t5Ans);
            total += t5Result.score;
            examResults.tasks.push({
                nr: 5,
                type: 'Otwarte – Uzasadnienie (0–3 pkt)',
                max: 3,
                score: t5Result.score,
                userAns: `Wniosek: ${t5Ans || 'brak'} | Zapis: ${t5Reason || 'brak'}`,
                correct: 'v = 72 km/h, s = 75 km, czas = 75/72 h > 1 h',
                feedback: t5Result.feedback,
                solution: '1) Prędkość samochodu: v = 48 km / (2/3 h) = 72 km/h. 2) Droga Jodłowo–Dębina: 123 km - 48 km = 75 km. 3) Czas przejazdu t = 75/72 h > 1 h (lub: w 1 h przejedzie 72 km < 75 km).'
            });"""

new_t5 = """            // 5. Zadanie 5 (Otwarte 0-3 pkt, Polanka-Dębina) - uzasadnienie
            const t5Reason = document.getElementById('task5_reasoning').value.trim();
            const t5Ans = document.getElementById('task5_answer').value.trim();
            let t5Result = await gradeTask5(t5Reason, t5Ans);
            total += t5Result.score;
            examResults.tasks.push({
                nr: 5,
                isOpen: true,
                type: 'Otwarte – Uzasadnienie (0–3 pkt)',
                max: 3,
                score: t5Result.score,
                finalAns: t5Ans || 'brak',
                reasoning: t5Reason || 'brak zapisu obliczeń',
                userAns: t5Ans ? `${t5Ans} (zapis: ${t5Reason.replace(/\\n/g, '; ')})` : 'brak',
                correct: 'v = 72 km/h, s = 75 km, czas = 75/72 h > 1 h',
                feedback: t5Result.feedback,
                solution: '1) Prędkość samochodu: v = 48 km / (2/3 h) = 72 km/h. 2) Droga Jodłowo–Dębina: 123 km - 48 km = 75 km. 3) Czas przejazdu t = 75/72 h > 1 h (lub: w 1 h przejedzie 72 km < 75 km).'
            });"""

old_t6 = """            // 6. Zadanie 6 (Otwarte 0-3 pkt, Ogródek) - poprawny wynik: 142,80 zł
            const t6Reason = document.getElementById('task6_reasoning').value.trim();
            const t6Ans = document.getElementById('task6_answer').value.trim();
            let t6Result = await gradeTask6(t6Reason, t6Ans);
            total += t6Result.score;
            examResults.tasks.push({
                nr: 6,
                type: 'Otwarte (0–3 pkt)',
                max: 3,
                score: t6Result.score,
                userAns: `Koszt: ${t6Ans || 'brak'} | Zapis: ${t6Reason || 'brak'}`,
                correct: '142,80 zł (6 opakowań po 23,80 zł)',
                feedback: t6Result.feedback,
                solution: '1) Pole trapezu: P = (18 + 12) · 9 / 2 = 135 m². 2) Liczba opakowań: 135 : 25 = 5,4 => należy kupić 6 opakowań. 3) Koszt: 6 · 23,80 zł = 142,80 zł.'
            });"""

new_t6 = """            // 6. Zadanie 6 (Otwarte 0-3 pkt, Ogródek) - poprawny wynik: 142,80 zł
            const t6Reason = document.getElementById('task6_reasoning').value.trim();
            const t6Ans = document.getElementById('task6_answer').value.trim();
            let t6Result = await gradeTask6(t6Reason, t6Ans);
            total += t6Result.score;
            examResults.tasks.push({
                nr: 6,
                isOpen: true,
                type: 'Otwarte (0–3 pkt)',
                max: 3,
                score: t6Result.score,
                finalAns: t6Ans || 'brak',
                reasoning: t6Reason || 'brak zapisu obliczeń',
                userAns: t6Ans ? `${t6Ans} (zapis: ${t6Reason.replace(/\\n/g, '; ')})` : 'brak',
                correct: '142,80 zł (6 opakowań po 23,80 zł)',
                feedback: t6Result.feedback,
                solution: '1) Pole trapezu: P = (18 + 12) · 9 / 2 = 135 m². 2) Liczba opakowań: 135 : 25 = 5,4 => należy kupić 6 opakowań. 3) Koszt: 6 · 23,80 zł = 142,80 zł.'
            });"""

# Normalizacja i zamiana zadań
def norm_replace(haystack, needle, replacement):
    h = haystack.replace('\r\n', '\n')
    n = needle.replace('\r\n', '\n')
    r = replacement.replace('\r\n', '\n')
    if n in h:
        return h.replace(n, r, 1)
    else:
        print("Warning: needle not found!")
        return haystack

text = norm_replace(text, old_t4, new_t4)
text = norm_replace(text, old_t5, new_t5)
text = norm_replace(text, old_t6, new_t6)

# 2. Update renderResultsUI() in HTML to format student's multi-line reasoning with beautiful math rendering
old_render_details = """            // Karty szczegółowe
            const detailsDiv = document.getElementById('detailed-feedback-list');
            detailsDiv.innerHTML = '';

            examResults.tasks.forEach(t => {
                const card = document.createElement('div');
                card.style.background = 'rgba(15, 23, 42, 0.7)';
                card.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                card.style.borderRadius = '12px';
                card.style.padding = '16px';

                let scoreColor = t.score === t.max ? '#4ade80' : (t.score > 0 ? '#fbbf24' : '#f87171');

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <h4 style="color:#ffffff;">Zadanie ${t.nr} (${t.type})</h4>
                        <span style="font-weight:bold; color:${scoreColor}; font-size:1.05rem;">${t.score} / ${t.max} pkt</span>
                    </div>
                    <div style="font-size:0.92rem; color:#cbd5e1; margin-bottom:6px;">
                        <strong>Twoja odpowiedź:</strong> ${t.userAns}
                    </div>
                    <div style="font-size:0.92rem; color:#a855f7; margin-bottom:8px;">
                        <strong>Komentarz egzaminatora CKE:</strong> ${t.feedback}
                    </div>
                    ${t.score < t.max ? `
                        <div class="solution-box">
                            <strong>Wzorcowe rozwiązanie CKE i poprawna odpowiedź:</strong><br>
                            ${t.solution}<br>
                            <em>Poprawna odpowiedź: ${t.correct}</em>
                        </div>
                    ` : ''}
                `;
                detailsDiv.appendChild(card);
            });"""

new_render_details = """            // Karty szczegółowe
            const detailsDiv = document.getElementById('detailed-feedback-list');
            detailsDiv.innerHTML = '';

            examResults.tasks.forEach(t => {
                const card = document.createElement('div');
                card.style.background = 'rgba(15, 23, 42, 0.75)';
                card.style.border = '1px solid rgba(168, 85, 247, 0.25)';
                card.style.borderRadius = '14px';
                card.style.padding = '18px';

                let scoreColor = t.score === t.max ? '#4ade80' : (t.score > 0 ? '#fbbf24' : '#f87171');

                let studentAnswerHtml = '';
                if (t.isOpen) {
                    // Dla zadań otwartych: rozdzielamy odpowiedź końcową i wieloliniowy tok rozumowania
                    studentAnswerHtml = `
                        <div style="background: rgba(30, 41, 59, 0.65); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 10px; padding: 12px 14px; margin: 10px 0;">
                            <div style="margin-bottom: 8px;">
                                <span style="color:#94a3b8; font-size:0.88rem; font-weight:600;">Odpowiedź końcowa ucznia:</span>
                                <strong style="color:#38bdf8; font-size:1.05rem; margin-left: 6px;">${t.finalAns || 'brak'}</strong>
                            </div>
                            <div style="color:#94a3b8; font-size:0.88rem; font-weight:600; margin-bottom: 6px;">Zapisany tok rozumowania i obliczenia (wieloliniowy):</div>
                            <div class="math-preview-box" style="margin-top:4px; max-height:none; background:rgba(9, 15, 29, 0.8);">
                                ${t.reasoning.split('\\n').map(line => {
                                    const tr = line.trim();
                                    if (!tr) return '<div class=\"math-preview-line\">&nbsp;</div>';
                                    const isMath = /[=+\\-*/·^√<>]/.test(tr);
                                    if (!isMath) {
                                        return `<div class=\"math-preview-line\" style=\"color:#e2e8f0; font-style:normal; font-size:0.96rem;\">${tr}</div>`;
                                    }
                                    let fmt = tr
                                        .replace(/km\\/h/g, '\\\\text{ km/h}')
                                        .replace(/m²/g, '\\\\text{ m}^2')
                                        .replace(/cm²/g, '\\\\text{ cm}^2')
                                        .replace(/\\bcm\\b/g, '\\\\text{ cm}')
                                        .replace(/\\bzł\\b/g, '\\\\text{ zł}')
                                        .replace(/\\bmin\\b/g, '\\\\text{ min}')
                                        .replace(/·|\\*/g, ' \\\\cdot ')
                                        .replace(/√\\((.*?)\\)/g, '\\\\sqrt{$1}')
                                        .replace(/√(\\d+)/g, '\\\\sqrt{$1}')
                                        .replace(/²/g, '^2')
                                        .replace(/³/g, '^3')
                                        .replace(/(\\d+)\\s+(\\d+)\\/(\\d+)/g, '$1\\\\frac{$2}{$3}')
                                        .replace(/(\\d+)\\s+i\\s+(\\d+)\\/(\\d+)/g, '$1\\\\frac{$2}{$3}')
                                        .replace(/(?<![a-zA-Z0-9_\\/])(\\d+)\\/(\\d+)(?![a-zA-Z0-9_\\/])/g, '\\\\frac{$1}{$2}')
                                        .replace(/\\b(?<!\\\\)[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,}(?:\\s+[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*\\b/g, m => ['sqrt','cdot','frac','text'].includes(m) ? m : `\\\\text{${m}}`)
                                        .replace(/(\\d+),(\\d+)/g, '$1{,}$2');
                                    
                                    try {
                                        if (window.katex) {
                                            return `<div class=\"math-preview-line\">${katex.renderToString(fmt, {throwOnError:false, displayMode:false})}</div>`;
                                        }
                                    } catch(e) {}
                                    return `<div class=\"math-preview-line\">${tr.replace(/\\*/g, ' · ')}</div>`;
                                }).join('')}
                            </div>
                        </div>
                    `;
                } else {
                    studentAnswerHtml = `
                        <div style="font-size:0.92rem; color:#cbd5e1; margin-bottom:8px;">
                            <strong>Twoja odpowiedź:</strong> <span style="color:#38bdf8; font-weight:bold;">${t.userAns}</span>
                        </div>
                    `;
                }

                card.innerHTML = `
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.08); padding-bottom:8px;">
                        <h4 style="color:#ffffff; font-size:1.1rem;">Zadanie ${t.nr} <span style="font-size:0.85rem; font-weight:normal; color:#94a3b8;">(${t.type})</span></h4>
                        <span style="font-weight:bold; color:${scoreColor}; font-size:1.15rem; background:rgba(0,0,0,0.3); padding:4px 12px; border-radius:8px;">${t.score} / ${t.max} pkt</span>
                    </div>
                    ${studentAnswerHtml}
                    <div style="background: rgba(147, 51, 234, 0.12); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 8px; padding: 10px 14px; font-size:0.93rem; color:#d8b4fe; margin-bottom:10px; line-height:1.5;">
                        <strong style="color:#c084fc;">Komentarz egzaminatora CKE (AI):</strong><br>
                        ${t.feedback}
                    </div>
                    ${t.score < t.max ? `
                        <div class="solution-box" style="margin-top:8px;">
                            <strong style="color:#38bdf8;">Wzorcowe rozwiązanie CKE i poprawna odpowiedź:</strong><br>
                            ${t.solution}<br>
                            <span style="display:inline-block; margin-top:4px; color:#4ade80; font-weight:600;">Poprawny wynik: ${t.correct}</span>
                        </div>
                    ` : ''}
                `;
                detailsDiv.appendChild(card);
            });"""

text = norm_replace(text, old_render_details, new_render_details)

# 3. Update generatePdfReport to format detailedRows with student reasoning in multiple lines and clean math
old_detailed_rows = """            // 3. Tabela 2: Szczegółowa ocena toku rozumowania i wzorcowe rozwiązania
            // Używamy AutoTable, co GWARANTUJE, że żaden tekst ani linia nie wyjdzie poza stronę!
            const detailedRows = examResults.tasks.map(t => {
                let textBlock = `${sanitize('Twoja odpowiedź / tok:')}\\n${sanitize(t.userAns)}\\n\\n${sanitize('Komentarz egzaminatora CKE:')}\\n${sanitize(t.feedback)}`;
                if (t.score < t.max) {
                    textBlock += `\\n\\n${sanitize('Wzorcowe rozwiązanie CKE:')}\\n${sanitize(t.solution)}\\n${sanitize('Poprawny wynik:')} ${sanitize(t.correct)}`;
                }
                return [
                    sanitize(`Zadanie ${t.nr}\\n(${t.type})`),
                    `${t.score} / ${t.max} pkt`,
                    textBlock
                ];
            });"""

new_detailed_rows = """            // 3. Tabela 2: Szczegółowa ocena toku rozumowania i wzorcowe rozwiązania
            // Używamy AutoTable, co GWARANTUJE, że żaden tekst ani linia nie wyjdzie poza stronę!
            const detailedRows = examResults.tasks.map(t => {
                let textBlock = '';
                
                if (t.isOpen) {
                    // Sformatowany zapis wieloliniowy toku obliczeń ucznia z ładnymi symbolami matematycznymi
                    const formattedReasoning = t.reasoning
                        .split('\\n')
                        .map(line => {
                            let l = line.trim();
                            if (!l) return '';
                            return '  • ' + l
                                .replace(/\\*/g, ' · ')
                                .replace(/²/g, '²')
                                .replace(/³/g, '³')
                                .replace(/km\\/h/g, ' km/h')
                                .replace(/m²/g, ' m²')
                                .replace(/cm²/g, ' cm²');
                        })
                        .filter(l => l.length > 0)
                        .join('\\n');

                    textBlock = `${sanitize('ODPOWIEDŹ KOŃCOWA UCZNIA:')}  ${sanitize(t.finalAns)}\\n\\n` +
                                `${sanitize('TOK ROZUMOWANIA UCZNIA (OBLICZENIA KROK PO KROKU):')}\\n${sanitize(formattedReasoning)}\\n\\n` +
                                `${sanitize('KOMENTARZ EGZAMINATORA CKE (AI):')}\\n${sanitize(t.feedback)}`;
                } else {
                    textBlock = `${sanitize('ODPOWIEDŹ UCZNIA:')}  ${sanitize(t.userAns)}\\n\\n` +
                                `${sanitize('KOMENTARZ EGZAMINATORA CKE:')}\\n${sanitize(t.feedback)}`;
                }

                if (t.score < t.max) {
                    textBlock += `\\n\\n${sanitize('WZORCOWE ROZWIĄZANIE CKE:')}\\n${sanitize(t.solution)}\\n${sanitize('Poprawny wynik:')} ${sanitize(t.correct)}`;
                }

                return [
                    sanitize(`Zadanie ${t.nr}\\n(${t.type})`),
                    `${t.score} / ${t.max} pkt`,
                    textBlock
                ];
            });"""

text = norm_replace(text, old_detailed_rows, new_detailed_rows)

with open('egzmat2025skot.html', 'w', encoding='utf-8', newline='\r\n') as f:
    f.write(text)

print("SUCCESS_EXPANDED_PDF")
