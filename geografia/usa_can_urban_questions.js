// 75 Pytań Konkursowych: Urbanizacja i Osadnictwo w USA i Kanadzie
// Przygotowane zgodnie z wymaganiami Mazowieckiego Konkursu Geograficznego dla szkół podstawowych
// Obejmuje 5 bloków tematycznych:
// 1. Wskaźniki, fazy i formy urbanizacji (1-15)
// 2. Megalopolis Ameryki Północnej (16-30)
// 3. Struktura przestrzenna miast i procesy socjogeograficzne (31-45)
// 4. Przestrzenne rozmieszczenie ludności i bariery osadnicze (46-60)
// 5. Struktura etniczna, migracje i historia osadnictwa (61-75)

const USA_CAN_URBAN_QUESTIONS = [
    // =========================================================================
    // BLOK 1: WSKAŹNIKI, FAZY I FORMY URBANIZACJI (1-15)
    // =========================================================================
    {
        id: 1,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Wskaźnik urbanizacji w Stanach Zjednoczonych i Kanadzie należy do najwyższych na świecie. Ile wynosi odsetek ludności zamieszkującej tereny miejskie w tych państwach?',
        options: ['Około 82–83%', 'Około 55–60%', 'Około 95–98%', 'Około 68–70%'],
        correct: 0,
        explanation: 'Zarówno Stany Zjednoczone (ok. 83%), jak i Kanada (ok. 82%) to kraje wysoce zurbanizowane, znajdujące się w zaawansowanej fazie urbanizacji (dezurbanizacja/reurbanizacja).'
    },
    {
        id: 2,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Faza urbanizacji charakteryzująca się odpływem ludności (zwłaszcza zamożniejszej) ze śródmieść na tereny podmiejskie i gwałtownym rozrostem przedmieść to:',
        options: ['Suburbanizacja', 'Urbanizacja wstępna', 'Dezurbanizacja', 'Reurbanizacja'],
        correct: 0,
        explanation: 'Suburbanizacja w USA i Kanadzie rozwinęła się masowo po II wojnie światowej, napędzana upowszechnieniem samochodów, budową sieci autostrad międzystanowych i poszukiwaniem lepszych warunków życia w domach jednorodzinnych.'
    },
    {
        id: 3,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Faza dezurbanizacji, która dotknęła wiele tradycyjnych miast przemysłowych USA (np. Detroit, Cleveland), wiąże się ze zjawiskiem tzw. kryzysu śródmieść. Co jest jej głównym objawem?',
        options: [
            'Spadek liczby ludności zarówno w centrum, jak i w całej aglomeracji, połączony z degradacją infrastruktury miejskiej',
            'Gwałtowny napływ ludności wiejskiej do fabryk w centrach miast',
            'Budowa pierwszych drapaczy chmur w centrum biznesowym',
            'Powrót mieszkańców do zabytkowych centrów miast'
        ],
        correct: 0,
        explanation: 'Dezurbanizacja (zwana też kryzysem miasta centralnego) polega na odpływie ludności i przedsiębiorstw poza obszar aglomeracji, co prowadzi do wyludnienia, spadku dochodów podatkowych miasta i degradacji budynków.'
    },
    {
        id: 4,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Proces reurbanizacji w miastach Ameryki Północnej polega na:',
        options: [
            'Ponownym ożywieniu centrów miast (renowacja, gentryfikacja) i powrocie mieszkańców do zrewitalizowanych dzielnic śródmiejskich',
            'Masowej ucieczce mieszkańców na odległe tereny wiejskie',
            'Likwidacji transportu publicznego na rzecz dróg ekspresowych',
            'Przekształcaniu terenów rolniczych w wielkie kopalnie odkrywkowe'
        ],
        correct: 0,
        explanation: 'Reurbanizacja to faza „renesansu miast” – zrewitalizowane poprzemysłowe dzielnice (lofty, apartamentowce, centra kultury) przyciągają z powrotem młodych specjalistów i zamożnych mieszkańców.'
    },
    {
        id: 5,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Zespół miejski składający się z jednego wyraźnie dominującego miasta centralnego (metropolii) oraz otaczającej go strefy podmiejskiej to:',
        options: ['Aglomeracja monocentryczna', 'Konurbacja', 'Megalopolis', 'Region wewnątrzmiejski'],
        correct: 0,
        explanation: 'Aglomeracja monocentryczna ma jeden wyraźny ośrodek centralny dominujący demograficznie i funkcjonalnie – klasycznymi przykładami w Ameryce Północnej są aglomeracja Chicago, Toronto czy Montrealu.'
    },
    {
        id: 6,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Przykładem zespołu miejskiego o charakterze konurbacji (aglomeracji policentrycznej) w USA, gdzie dwa sąsiadujące ze sobą duże miasta uzupełniają się funkcjonalnie, jest:',
        options: [
            'Minneapolis – Saint Paul (tzw. Twin Cities) oraz Dallas – Fort Worth',
            'Nowy Jork – Filadelfia',
            'Chicago – Milwaukee',
            'Los Angeles – Las Vegas'
        ],
        correct: 0,
        explanation: 'Konurbacja składa się z równorzędnych ośrodków miejskich zrośniętych terytorialnie; najbardziej znanymi przykładami w USA są Twin Cities (Minneapolis-St. Paul w Minnesocie) oraz Metroplex Dallas-Fort Worth w Teksasie.'
    },
    {
        id: 7,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Pojęcie „megalopolis” zostało wprowadzone do geografii w 1961 roku przez francuskiego geografa Jeana Gottmanna. Oznacza ono:',
        options: [
            'Wieloprzestrzenną, silnie zurbanizowaną strefę powstałą ze zlania się i powiązania funkcjonalnego wielu aglomeracji miejskich',
            'Pojedyncze miasto o liczbie ludności przekraczającej 10 milionów mieszkańców',
            'Dzielnicę finansową z drapaczami chmur w centrum Nowego Jorku',
            'Miasto satelickie położone przy lotnisku międzykontynentalnym'
        ],
        correct: 0,
        explanation: 'Megalopolis to najwyższy stopień koncentracji osadnictwa miejskiego – pas zurbanizowany ciągnący się na setki kilometrów, utworzony przez nakładające się na siebie aglomeracje miejskie.'
    },
    {
        id: 8,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Zjawisko suburban sprawl (rozlewanie się miast) w USA i Kanadzie wiąże się z następującym problemem przestrzennym:',
        options: [
            'Niepohamowanym zajmowaniem cennych gruntów rolnych i leśnych przez ekstensywną, niską zabudowę domów jednorodzinnych',
            'Nadmiernym zagęszczeniem drapaczy chmur w centrum administracyjnym',
            'Wzrostem roli tramwajów i pociągów kosztem ruchu samochodowego',
            'Gwałtownym kurczeniem się sieci dróg szybkiego ruchu'
        ],
        correct: 0,
        explanation: 'Suburban sprawl powoduje ogromne koszty budowy infrastruktury (drogi, woda, kanalizacja), wydłużenie czasu dojazdów do pracy, korki i olbrzymie zużycie paliw płynnych.'
    },
    {
        id: 9,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'W kanadyjskich prowincjach preriowych (Alberta, Saskatchewan, Manitoba) sieć osadnicza poza wielkimi miastami charakteryzuje się:',
        options: [
            'Regularnym układem geometrycznym farm i osad (układ sekcyjny / township) powstałym w wyniku kolonizacji rolniczej',
            'Średniowiecznym układem owalnicowym wokół kościołów',
            'Zabudową tarasową na zboczach górskich',
            'Pustynią osadniczą bez jakichkolwiek gospodarstw rolnych'
        ],
        correct: 0,
        explanation: 'Kanadyjski Dominion Lands Act z 1872 r. podzielił prerie na kwadratowe sekcje (mile kwadratowe), co nadało sieci osadniczej charakterystyczny prostokątny układ geometryczny widoczny do dziś.'
    },
    {
        id: 10,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Wskaż miasto w Kanadzie, które przeżyło bezprecedensowy boom osadniczy i urbanistyczny w ostatnich dekadach dzięki eksploatacji piasków bitumicznych w prowincji Alberta:',
        options: ['Fort McMurray', 'Whitehorse', 'Thunder Bay', 'Yellowknife'],
        correct: 0,
        explanation: 'Fort McMurray w północnej Albercie rozwinęło się z niewielkiej osady w wielotysięczne miasto przemysłowe dzięki gigantycznemu wydobyciu ropy naftowej z piasków bitumicznych (Athabasca oil sands).'
    },
    {
        id: 11,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Który z wymienionych czynników miał decydujący wpływ na dynamiczny rozwój osadnictwa w miastach takich jak Phoenix, Las Vegas czy Miami w II połowie XX wieku?',
        options: [
            'Upowszechnienie klimatyzacji (AC) oraz migracje emerytów i rozwój usług turystycznych',
            'Odkrycie bogatych złóż węgla kamiennego i rud żelaza',
            'Budowa transkontynentalnych kanałów żeglownych',
            'Tradycyjny rozwój rolnictwa pszenicznego'
        ],
        correct: 0,
        explanation: 'Rozwój klimatyzacji uczynił upalny klimat południa znośnym do całorocznego życia, co zapoczątkowało wielki napływ ludności i kapitału do tzw. Sun Belt (Pasa Słonecznego).'
    },
    {
        id: 12,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Miasta USA i Kanady cechują się tzw. układem szachownicowym (grid plan). Co jest jego istotą?',
        options: [
            'Ulice przecinające się pod kątem prostym, wyznaczające prostokątne kwartały zabudowy (bloki)',
            'Układ promienisto-koncentryczny z rynkiem w centrum i pierścieniami ulic',
            'Brak jakiegokolwiek planu i chaotyczna sieć krętych dróg',
            'Układ gwiaździsty zbiegający się przy dworcu kolejowym'
        ],
        correct: 0,
        explanation: 'Układ szachownicowy (grid system) został spopularyzowany w Ameryce Północnej (m.in. plan Manhattanu z 1811 r.), ponieważ ułatwiał szybki obrót działkami i geometryczną parcelację terenu.'
    },
    {
        id: 13,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'W jakim stopniu wskaźnik urbanizacji zależy od struktury gospodarczej państwa w USA i Kanadzie?',
        options: [
            'Ponad 80% ludności pracuje w sektorze usług (sektor III) i nowoczesnego przemysłu (sektor IV), co jest bezpośrednio skorelowane z wysoką urbanizacją',
            'Większość mieszkańców miast pracuje w rolnictwie ekologicznym',
            'Wysoka urbanizacja wynika wyłącznie z przymusowych przesiedleń ludności',
            'Brak związku – poziom urbanizacji w Ameryce wynika jedynie z warunków klimatycznych'
        ],
        correct: 0,
        explanation: 'Gospodarka postindustrialna (dominacja usług zaawansowanych, finansów, edukacji, IT i R&D) wymaga dużej koncentracji wykwalifikowanych kadr w ośrodkach miejskich.'
    },
    {
        id: 14,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'W aglomeracjach amerykańskich często wyróżnia się zjawisko tzw. Edge Cities (miast na krawędzi). Czym one są?',
        options: [
            'Nowoczesnymi węzłami biznesowo-handlowymi powstałymi na obrzeżach metropolii przy skrzyżowaniach autostrad, konkurującymi z tradycyjnym śródmieściem',
            'Opuszczonymi miastami widmami na pustyniach Nevady',
            'Historycznymi dzielnicami portowymi z zabytkową zabudową',
            'Osiedlami namiotowymi dla migrantów zarobkowych'
        ],
        correct: 0,
        explanation: 'Edge Cities (np. Tysons Corner pod Waszyngtonem) to ośrodki podmiejskie, które posiadają więcej powierzchni biurowej i miejsc pracy niż tradycyjne średnie miasta, zmieniając kierunki codziennych dojazdów.'
    },
    {
        id: 15,
        type: 'choice',
        category: 'Fazy i Formy Urbanizacji',
        question: 'Miasto Detroit w stanie Michigan jest podręcznikowym przykładem tzw. shrinking city (miasta kurczącego się). Co było bezpośrednią przyczyną spadku jego ludności z 1,8 mln (w 1950 r.) do ok. 630 tys. obecnie?',
        options: [
            'Załamanie tradycyjnego przemysłu motoryzacyjnego (automotive), przenoszenie fabryk za granicę i ucieczka mieszkańców na przedmieścia',
            'Zniszczenie miasta przez katastrofalne trzęsienie ziemi i wybuch wulkanu',
            'Wyczerpanie się wód w Wielkich Jeziorach',
            'Przekształcenie całego miasta w park narodowy'
        ],
        correct: 0,
        explanation: 'Kryzys „Motor City” (Detroit) był skutkiem globalnej konkurencji w branży samochodowej, automatyzacji produkcji oraz zjawiska „white flight” (odpływu zamożnych podatników na przedmieścia).'
    },

    // =========================================================================
    // BLOK 2: MEGALOPOLIS AMERYKI PÓŁNOCNEJ (16-30)
    // =========================================================================
    {
        id: 16,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Najstarszym, najgęściej zaludnionym i najważniejszym polityczno-finansowo megalopolis Ameryki Północnej jest:',
        options: ['BosWash (Megalopolis Wschodniego Wybrzeża)', 'ChiPitts', 'SanSan', 'Megalopolis Teksańskie'],
        correct: 0,
        explanation: 'BosWash rozciąga się od Bostonu w Massachusetts po Waszyngton w Dystrykcie Kolumbii na długości ok. 800 km i skupia ponad 50 milionów mieszkańców (ok. 17% ludności USA na zaledwie 2% powierzchni).'
    },
    {
        id: 17,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Który ciąg wielkich metropolii tworzy oś megalopolis BosWash idąc z północy na południe?',
        options: [
            'Boston → Nowy Jork → Filadelfia → Baltimore → Waszyngton',
            'Chicago → Detroit → Cleveland → Pittsburgh',
            'San Francisco → San Jose → Los Angeles → San Diego',
            'Toronto → Ottawa → Montreal → Quebec'
        ],
        correct: 0,
        explanation: 'Oś BosWash łączy najważniejsze historyczne i współczesne centra wschodniego wybrzeża USA połączone korytarzem kolejowym Northeast Corridor (pociągi Acela).'
    },
    {
        id: 18,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Megalopolis ChiPitts (Great Lakes Megalopolis) rozwinęło się w oparciu o:',
        options: [
            'Szlak wodny Wielkich Jezior, złoża węgla w Appalachach i rud żelaza znad Jeziora Górnego oraz przemysł ciężki i maszynowy',
            'Plantacje bawełny i tytoniu na Nizinie Zatokowej',
            'Nowoczesne laboratoria kosmiczne NASA na Florydzie',
            'Górnictwo złota w Kordylierach'
        ],
        correct: 0,
        explanation: 'ChiPitts (Chicago-Pittsburgh) to historyczne serce amerykańskiego przemysłu (Rust Belt / Pas Przemysłowy), obejmujące aglomeracje Chicago, Milwaukee, Detroit, Cleveland i Pittsburgha.'
    },
    {
        id: 19,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Megalopolis SanSan na zachodnim wybrzeżu Stanów Zjednoczonych rozciąga się pomiędzy aglomeracjami:',
        options: [
            'San Francisco a San Diego',
            'San Antonio a Santa Fe',
            'Seattle a Sacramento',
            'Salt Lake City a San Jose'
        ],
        correct: 0,
        explanation: 'SanSan obejmuje pas kalifornijskiego wybrzeża od San Francisco (wraz z Doliną Krzemową) przez aglomerację Los Angeles aż po San Diego przy granicy z Meksykiem.'
    },
    {
        id: 20,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Głównym motorem rozwoju gospodarczego północnej części megalopolis SanSan (rejon Zatoki San Francisco / San Jose) jest:',
        options: [
            'Dolina Krzemowa (Silicon Valley) – światowe centrum innowacji, mikroelektroniki i technologii informatycznych (Big Tech)',
            'Hutnictwo żelaza i przemysł stoczniowy',
            'Tradycyjne włókiennictwo i przetwórstwo wełny',
            'Wydobycie węgla brunatnego'
        ],
        correct: 0,
        explanation: 'Silicon Valley w hrabstwie Santa Clara skupia gigantów technologicznych (Apple, Google, Meta, Intel) w ścisłej współpracy z uniwersytetami Stanforda i Berkeley.'
    },
    {
        id: 21,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Jak nazywa się główne megalopolis Kanady, w którym mieszka ponad 60% ludności tego kraju?',
        options: [
            'Korytarz Quebec – Windsor (tzw. Main Street Kanady)',
            'Korytarz Calgary – Edmonton',
            'Megalopolis Pacyficzne Vancouver',
            'Korytarz Nowej Szkocji'
        ],
        correct: 0,
        explanation: 'Korytarz Quebec City – Windsor rozciąga się na długości 1150 km wzdłuż rzeki Św. Wawrzyńca i jezior Ontario i Erie, łącząc m.in. Montreal, Ottawę, Toronto i Hamilton.'
    },
    {
        id: 22,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Region Golden Horseshoe (Złota Podkowa) to najgęściej zaludniony i najbardziej uprzemysłowiony obszar Kanady. Wokół którego akwenu jest położony?',
        options: ['Jeziora Ontario', 'Jeziora Górnego', 'Zatoki Hudsona', 'Jeziora Huron'],
        correct: 0,
        explanation: 'Golden Horseshoe zawdzięcza nazwę kształtowi podkowy oplatającej zachodni kraniec jeziora Ontario – od Oshawa przez Toronto i Mississaugę po Hamilton i wodospad Niagara.'
    },
    {
        id: 23,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Transgraniczne megalopolis Cascadia (Pacific Northwest Megalopolis) łączy ośrodki miejskie w USA i Kanadzie. Które metropolie wchodzą w jego skład?',
        options: [
            'Vancouver (Kanada), Seattle i Portland (USA)',
            'Calgary (Kanada) i Denver (USA)',
            'Montreal (Kanada) i Boston (USA)',
            'Toronto (Kanada) i Chicago (USA)'
        ],
        correct: 0,
        explanation: 'Cascadia obejmuje pas wybrzeża Północno-Zachodniego Pacyfiku, łączący Kolumbię Brytyjską (Vancouver, Victoria) ze stanami Waszyngton (Seattle) i Oregon (Portland).'
    },
    {
        id: 24,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Megalopolis Trójkąta Teksańskiego (Texas Triangle) to jeden z najszybciej rozwijających się obszarów zurbanizowanych w USA. Jakie metropolie wyznaczają jego wierzchołki?',
        options: [
            'Dallas–Fort Worth, Houston oraz San Antonio / Austin',
            'El Paso, Lubbock i Amarillo',
            'Miami, Tampa i Orlando',
            'Phoenix, Tucson i Albuquerque'
        ],
        correct: 0,
        explanation: 'Texas Triangle to potężny obszar wzrostu gospodarczego i demograficznego napędzany przemysłem naftowym, lotniczo-kosmicznym, medycznym oraz technologicznym (Austin jako „Silicon Hills”).'
    },
    {
        id: 25,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Które miasto pełni funkcję głównego globalnego węzła finansowego i zarządczego (tzw. global city alfa++) w megalopolis BosWash?',
        options: ['Nowy Jork (Nowojorski Obszar Metropolitalny)', 'Filadelfia', 'Baltimore', 'Waszyngton'],
        correct: 0,
        explanation: 'Nowy Jork to światowa stolica finansów (giełdy NYSE i NASDAQ na Wall Street), siedziba setek korporacji międzynarodowych oraz siedziba Organizacji Narodów Zjednoczonych (ONZ).'
    },
    {
        id: 26,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Dlaczego Waszyngton (D.C.) w megalopolis BosWash różni się architektonicznie od Nowego Jorku czy Filadelfii?',
        options: [
            'Obowiązuje w nim zakaz budowy drapaczy chmur (ustawa Height of Buildings Act z 1910 r.), aby nie zasłaniać Kapitolu',
            'Miasto zostało zbudowane wyłącznie z drewna',
            'Brak w nim jakichkolwiek budynków administracji publicznej',
            'Jest miastem wyłącznie portowo-przemysłowym'
        ],
        correct: 0,
        explanation: 'Prawo federalne ogranicza wysokość budynków w Waszyngtonie do szerokości przylegającej ulicy plus 20 stóp, co nadaje stolicy horyzontalny, neoklasycystyczny charakter bez drapaczy chmur.'
    },
    {
        id: 27,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Wskaż cechę transportową charakterystyczną dla megalopolis ChiPitts:',
        options: [
            'Wielka rola żeglugi śródlądowej na Wielkich Jeziorach i kanale Świętego Wawrzyńca do przewozu ładunków masowych (rudy, węgiel, zboże)',
            'Brak jakichkolwiek połączeń kolejowych i drogowych',
            'Wyłączne korzystanie z transportu lotniczego',
            'Żegluga oceaniczna dostępna przez cały rok bez zamarzania'
        ],
        correct: 0,
        explanation: 'Wielkie Jeziora połączone śluzami (Soo Locks, Welland Canal) stanowią unikalny śródlądowy korytarz transportowy dla masowców (tzw. lakers).'
    },
    {
        id: 28,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Która z metropolii megalopolis SanSan jest najbardziej narażona na katastrofalne trzęsienia ziemi z powodu bezpośredniego przebiegu uskoku San Andreas?',
        options: ['San Francisco', 'Sacramento', 'Fresno', 'Bakersfield'],
        correct: 0,
        explanation: 'San Francisco zostało zniszczone przez potężne trzęsienie ziemi i pożary w 1906 r. oraz nawiedzone przez trzęsienie Loma Prieta w 1989 r.; uskok San Andreas przebiega tuż obok miasta.'
    },
    {
        id: 29,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'W megalopolis kanadyjskim metropolia Montrealu wyróżnia się pod względem językowym i kulturowym, ponieważ jest:',
        options: [
            'Drugim co do wielkości francuskojęzycznym miastem świata (po Paryżu)',
            'Jedynym całkowicie anglojęzycznym miastem prowincji Quebec',
            'Stolicą polityczną Kanady',
            'Miastem o przewadze języka hiszpańskiego'
        ],
        correct: 0,
        explanation: 'Montreal leży w prowincji Quebec i jest metropolią dwujęzyczną z dominacją języka francuskiego, stanowiąc serce francuskojęzycznej kultury w Ameryce Północnej.'
    },
    {
        id: 30,
        type: 'choice',
        category: 'Megalopolis Ameryki Północnej',
        question: 'Jakie wyzwanie ekologiczne jest typowe dla gęsto zaludnionych megalopolis USA (zwłaszcza SanSan i BosWash)?',
        options: [
            'Smog (fotochemiczny w Los Angeles, kwaśny na wschodzie) oraz miejska wyspa ciepła (UHI)',
            'Postępujące zlodowacenie i obecność lodowców w centrach miast',
            'Całkowity brak opadów atmosferycznych',
            'Zalewanie przez lawę wulkaniczną'
        ],
        correct: 0,
        explanation: 'Olbrzymia emisja spalin z milionów samochodów, obecność betonu i asfaltu oraz zjawisko miejskiej wyspy ciepła stanowią kluczowe wyzwania klimatyczno-środowiskowe wielkich megalopolis.'
    },

    // =========================================================================
    // BLOK 3: STRUKTURA PRZESTRZENNA MIAST I PROCESY SOCJOGEOGRAFICZNE (31-45)
    // =========================================================================
    {
        id: 31,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Skrót CBD w geografii turyzmu i urbanistyce amerykańskiej oznacza:',
        options: [
            'Central Business District (Centralna Dzielnica Biznesowa)',
            'Central Border Division',
            'City Building Department',
            'Commercial Bank Distribution'
        ],
        correct: 0,
        explanation: 'CBD (Central Business District, potocznie Downtown) to serce amerykańskiego miasta, charakteryzujące się najwyższymi cenami ziemi, najwyższymi drapaczami chmur i koncentracją banków oraz korporacji.'
    },
    {
        id: 32,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Co charakteryzuje liczbę ludności przebywającej w dzielnicy CBD w cyklu dobowym?',
        options: [
            'Olbrzymi napływ pracowników w dzień (nawet kilkaset tysięcy) i gwałtowny spadek liczby osób w nocy (wyludnienie śródmieścia)',
            'Stała liczba mieszkańców przez całą dobę',
            'Większa liczba osób przebywających w nocy niż w dzień',
            'Brak jakichkolwiek ludzi w ciągu dnia'
        ],
        correct: 0,
        explanation: 'CBD cechuje się znikomą liczbą stałych mieszkańców – po godzinach pracy biur dzielnica pustoszeje, co wywołuje zjawisko potężnych wahadłowych migracji dobowych do i z przedmieść.'
    },
    {
        id: 33,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Proces gentryfikacji (gentrification) w miastach takich jak Nowy Jork (np. dzielnice Brooklyn, Harlem) polega na:',
        options: [
            'Rewitalizacji i odnawianiu zaniedbanych historycznych dzielnic robotniczych przez zamożniejszych mieszkańców, co prowadzi do wzrostu cen nieruchomości i wypierania uboższej ludności',
            'Przekształcaniu parków miejskich w tereny przemysłowe',
            'Budowie wielkich blokowisk z wielkiej płyty na obrzeżach miast',
            'Burzeniu wieżowców w centrum biznesowym'
        ],
        correct: 0,
        explanation: 'Gentryfikacja zmienia charakter dawnych uboższych dzielnic: powstają kawiarnie, galerie i luksusowe apartamenty, co jednak podnosi czynsze i zmusza dotychczasowych mieszkańców do wyprowadzki.'
    },
    {
        id: 34,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Klasyczny strefowy model struktury miasta (Burgessa z 1925 r.) powstał w oparciu o badania nad rozwojem przestrzennym:',
        options: ['Chicago', 'Nowego Jorku', 'Los Angeles', 'Toronto'],
        correct: 0,
        explanation: 'Ernest Burgess stworzył teorię stref koncentrycznych badając gwałtowny rozwój Chicago: od CBD w centrum, przez strefę przejściową (slumsy/fabryki), strefę domów robotniczych, strefę rezydencjonalną aż po strefę dojazdów.'
    },
    {
        id: 35,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Zjawisko „white flight” w historii urbanizacji Stanów Zjednoczonych (lata 1950–1980) oznaczało:',
        options: [
            'Masową migrację białej ludności z klasy średniej ze śródmieść do nowo budowanych przedmieść (suburbiów)',
            'Emigrację Amerykanów do Kanady',
            'Ucieczkę mieszkańców miast przed zimowymi mrozami na Florydę',
            'Ruch lotniczy między Europą a Ameryką'
        ],
        correct: 0,
        explanation: 'White flight doprowadził do segregacji przestrzenno-ekonomicznej: centra miast (inner cities) stały się domeną uboższych mniejszości etnicznych, a przedmieścia – zamożniejszej ludności.'
    },
    {
        id: 36,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Jak nazywają się charakterystyczne enklawy etniczne w miastach Ameryki Północnej (np. w San Francisco, Nowym Jorku, Toronto)?',
        options: [
            'Chinatown, Little Italy, Greektown, Koreatown',
            'Bustees',
            'Favele',
            'Białego Miasteczka'
        ],
        correct: 0,
        explanation: 'Dzielnice etniczne powstawały w wyniku osiedlania się kolejnych fal imigrantów w sąsiedztwie rodaków; Chinatown w San Francisco to najstarsza i jedna z największych chińskich enklaw poza Azją.'
    },
    {
        id: 37,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Zjawisko gated communities (osiedli grodzonych) w miastach USA jest przejawem:',
        options: [
            'Segregacji społeczno-przestrzennej i dążenia zamożnych mieszkańców do odizolowania się ze względów bezpieczeństwa i prestiżu',
            'Średniowiecznego systemu obronnego przed najeźdźcami',
            'Przymusowego zamykania mieszkańców przez władze stanowe',
            'Zakazu wjazdu samochodów na teren osiedla'
        ],
        correct: 0,
        explanation: 'Osiedla grodzone (z prywatną ochroną, bramami wjazdowymi i wspólną infrastrukturą rekreacyjną) są powszechne m.in. na przedmieściach w Kalifornii, Teksasie i na Florydzie.'
    },
    {
        id: 38,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Która cecha odróżnia kanadyjskie miasta (np. Toronto, Vancouver, Montreal) od wielu dużych miast amerykańskich?',
        options: [
            'Większe bezpieczeństwo publiczne, niższy wskaźnik przestępczości i znacznie lepiej rozwinięty transport zbiorowy (metro, tramwaje)',
            'Całkowity brak drapaczy chmur',
            'Brak jakiejkolwiek ludności napływowej',
            'Położenie wyłącznie w strefie polarnej'
        ],
        correct: 0,
        explanation: 'Miasta kanadyjskie regularnie zajmują czołowe miejsca w rankingach jakości życia (np. Economist Intelligence Unit) dzięki sprawnemu transportowi, czystości i bezpieczeństwu socjalnemu.'
    },
    {
        id: 39,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Wskaż miasto w USA, które jako jedno z nielicznych NIE POSIADA oficjalnych przepisów o planowaniu przestrzennym (tzw. brak konwencjonalnego zoning laws):',
        options: ['Houston w Teksasie', 'Nowy Jork', 'Waszyngton', 'San Francisco'],
        correct: 0,
        explanation: 'Houston jest jedynym dużym miastem w USA bez formalnych przepisów strefowania (zoning), co skutkuje bezpośrednim sąsiedztwem wieżowców, domów jednorodzinnych i zakładów przemysłowych.'
    },
    {
        id: 40,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Przemiana starych, poprzemysłowych doków i magazynów w luksusowe dzielnice mieszkalno-rozrywkowe w Ameryce Północnej to przykład tzw. waterfront redevelopment. Wskaż miasto słynące z takiego projektu (np. Inner Harbor):',
        options: ['Baltimore', 'Omaha', 'El Paso', 'Wichita'],
        correct: 0,
        explanation: 'Rewitalizacja Inner Harbor w Baltimore stała się w latach 70. i 80. XX w. wzorcem dla całego świata, jak przekształcić upadający port przemysłowy w tętniące życiem centrum turystyki i kultury.'
    },
    {
        id: 41,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'W podziemnych centrach kanadyjskich miast Montrealu (RÉSO / Underground City) i Toronto (PATH) powstały wielokilometrowe podziemne labirynty handlowo-piesze. Z czego to wynika?',
        options: [
            'Z konieczności ochrony pieszych przed mroźnymi, śnieżnymi i wietrznymi zimami kanadyjskimi',
            'Z braku miejsca na powierzchni ziemi',
            'Z przepisów obrony przeciwlotniczej',
            'Z wymogów ochrony zabytków'
        ],
        correct: 0,
        explanation: 'Podziemne miasta (Montreal Underground City liczy ponad 33 km tuneli) łączą stacje metra, biurowce, hotele i centra handlowe, umożliwiając wygodne funkcjonowanie bez wychodzenia na 20-stopniowy mróz.'
    },
    {
        id: 42,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Dlaczego w miastach takich jak Los Angeles transport publiczny jest tradycyjnie słabiej rozwinięty niż w Nowym Jorku?',
        options: [
            'Los Angeles rozwijało się równolegle z motoryzacją na olbrzymiej powierzchni (aglomeracja horyzontalna o niskiej gęstości zaludnienia)',
            'W Los Angeles prawnie zakazano budowy kolei podziemnej',
            'Wszyscy mieszkańcy poruszają się wyłącznie pieszo',
            'Górzyste ukształtowanie uniemożliwia budowę dróg'
        ],
        correct: 0,
        explanation: 'Model Los Angeles („miasto 100 przedmieść połączonych autostradami”) powstał pod dyktando samochodu, co dziś rodzi legendarne korki i wymusza kosztowną rozbudowę metra.'
    },
    {
        id: 43,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Koncepcja tzw. Transit-Oriented Development (TOD) wdrażana współcześnie w miastach amerykańskich zakłada:',
        options: [
            'Projektowanie gęstej, wielofunkcyjnej zabudowy w promieniu pieszego dojścia do stacji szybkiej kolei miejskiej lub metra',
            'Likwidację przystanków autobusowych na rzecz parkingów wielopoziomowych',
            'Budowę 10-pasmowych autostrad w centrach miast',
            'Wyprowadzkę mieszkańców poza zasięg komunikacji miejskiej'
        ],
        correct: 0,
        explanation: 'TOD ma na celu ograniczenie dominacji samochodu, zmniejszenie emisji spalin i ułatwienie mieszkańcom dojazdu do pracy transportem zbiorowym (np. w Portland, Seattle czy Waszyngtonie).'
    },
    {
        id: 44,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Co oznacza pojęcie food desert (pustynia żywnościowa) w uboższych dzielnicach miast w USA?',
        options: [
            'Obszar miejski, gdzie mieszkańcy mają utrudniony dostęp do sklepów ze świeżą, zdrową żywnością, będąc skazanymi na fast foody i przetworzone produkty',
            'Pustynię geograficzną, na której nie da się założyć restauracji',
            'Dzielnicę zamieszkaną wyłącznie przez wegetarian',
            'Strefę objętą klęską suszy rolniczej'
        ],
        correct: 0,
        explanation: 'Food deserts występują w ubogich rejonach miast, skąd wycofały się duże supermarkety; brak samochodu uniemożliwia mieszkańcom dojazd do odległych dyskontów, co pogłębia problemy zdrowotne (otyłość, cukrzyca).'
    },
    {
        id: 45,
        type: 'choice',
        category: 'Struktura Miast i Procesy Społeczne',
        question: 'Miasto Las Vegas w stanie Nevada jest unikalnym przykładem osadniczym miasta, którego rozwój bazuje na:',
        options: [
            'Gospodarce opartej niemal wyłącznie na turystyce, rozrywce, hazardzie i organizacji megakonferencji',
            'Wielkim porcie morskim i handlu zagranicznym',
            'Tradycyjnym przemyśle włókienniczym',
            'Największych w USA uprawach kukurydzy'
        ],
        correct: 0,
        explanation: 'Las Vegas rozrosło się na pustyni Mojave z małego przystanku kolejowego do ponad 2-milionowej aglomeracji dzięki legalizacji hazardu (1931 r.) i budowie zapory Hoovera.'
    },

    // =========================================================================
    // BLOK 4: PRZESTRZENNE ROZMIESZCZENIE LUDNOŚCI I BARIERY OSADNICZE (46-60)
    // =========================================================================
    {
        id: 46,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Gęstość zaludnienia w Stanach Zjednoczonych (ok. 37 os./km²) i Kanadzie (zaledwie ok. 4 os./km²) jest silnie zróżnicowana. Jaki odsetek ludności Kanady zamieszkuje wąski pas w odległości do 160–200 km od granicy z USA?',
        options: ['Ponad 90%', 'Około 25%', 'Dokładnie 50%', 'Mniej niż 10%'],
        correct: 0,
        explanation: 'Ponad 90% mieszkańców Kanady skupia się wzdłuż południowej granicy z USA – w tzw. ekumenie kanadyjskiej, gdzie warunki klimatyczne i glebowe umożliwiają rolnictwo i komfortowe życie.'
    },
    {
        id: 47,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Który południk w Stanach Zjednoczonych jest tradycyjnie uznawany za granicę oddzielającą gęsto zaludniony, wilgotny wschód od suchszego i rzadziej zaludnionego zachodu?',
        options: ['100°W (południk 100° długości geograficznej zachodniej)', '80°W', '120°W', '90°W'],
        correct: 0,
        explanation: 'Południk 100°W wyznacza izohietę 500 mm rocznego opadu – na wschód od niego możliwe było rolnictwo bez sztucznego nawadniania, co umożliwiło gęste osadnictwo.'
    },
    {
        id: 48,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Główną barierą osadniczą w północnej Kanadzie (Terytoria Północno-Zachodnie, Nunavut, Jukon) oraz na północy Alaski jest:',
        options: [
            'Bariera termiczna (surowy klimat subpolarny i polarny, wieczna zmarzlina, krótki okres wegetacyjny)',
            'Bariera wodna (brak wody pitnej z powodu suszy zwrotnikowej)',
            'Bariera grawitacyjna',
            'Zagrożenie wybuchami wulkanów'
        ],
        correct: 0,
        explanation: 'Ujemne średnie temperatury roczne, obecność wieloletniej zmarzliny (utrudniającej budowę dróg i fundamentów) oraz noc polarna sprawiają, że obszary te stanowią subekumenę lub anekumenę.'
    },
    {
        id: 49,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Najludniejszym stanem USA jest Kalifornia (ok. 39 mln mieszkańców). Który stan zajmuje drugie miejsce pod względem liczby ludności?',
        options: ['Teksas (ok. 30 mln)', 'Nowy Jork', 'Floryda', 'Illinois'],
        correct: 0,
        explanation: 'Teksas jest drugim najludniejszym stanem (po Kalifornii) i drugim pod względem powierzchni (po Alasce), notującym najszybszy przyrost liczby ludności w ostatnich latach.'
    },
    {
        id: 50,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Największy pod względem powierzchni stan USA – Alaska – cechuje się najniższą gęstością zaludnienia w kraju. Ile ona wynosi?',
        options: ['Około 0,5 os./km²', 'Około 15 os./km²', 'Około 50 os./km²', 'Około 100 os./km²'],
        correct: 0,
        explanation: 'Na obszarze Alaski (ponad 1,7 mln km² – ponad 5 razy więcej niż Polska) mieszka zaledwie ok. 730 tysięcy ludzi, z czego ponad połowa w aglomeracji Anchorage.'
    },
    {
        id: 51,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Która prowincja Kanady skupia największą liczbę ludności (blisko 40% mieszkańców całego kraju)?',
        options: ['Ontario (ok. 15 mln mieszkańców)', 'Quebec', 'Kolumbia Brytyjska', 'Alberta'],
        correct: 0,
        explanation: 'Ontario jest demograficznym i gospodarczym sercem Kanady – mieści się tu zarówno największa aglomeracja kraju (Toronto), jak i stolica federalna (Ottawa).'
    },
    {
        id: 52,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Główną barierą osadniczą na obszarze Wielkiej Kotliny (Great Basin) w stanach Nevada i Utah jest:',
        options: [
            'Bariera wodna – skrajny deficyt opadów atmosferycznych (cień opadowy Sierra Nevada)',
            'Bariera termiczna związana z obecnością lądolodu',
            'Zalewanie przez fale tsunami',
            'Gęste zalesienie wilgotnymi lasami równikowymi'
        ],
        correct: 0,
        explanation: 'Góry Sierra Nevada zatrzymują wilgoć znad Pacyfiku, tworząc na wschód od swoich grzbietów suchą, pustynną i bezodpływową Wielką Kotlinę o bardzo rzadkim zaludnieniu.'
    },
    {
        id: 53,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Dlaczego Tarcza Kanadyjska (rejon wokół Zatoki Hudsona) pomimo obecności bogatych złóż surowców mineralnych jest obszarem o bardzo rzadkim osadnictwie?',
        options: [
            'Zdzierająca działalność lądolodu pozostawiła nagie, wygładzone skały krystaliczne pozbawione żyznych gleb, a obszar pokrywają tysiące bagien i jezior',
            'Teren ten jest terenem aktywnych trzęsień ziemi',
            'Występują tam całoroczne tropikalne upały',
            'Teren ten jest zamkniętym poligonem wojskowym'
        ],
        correct: 0,
        explanation: 'Egzaracja lodowcowa zdarła zwietrzelinę, a surowy klimat uniemożliwił rozwój rolnictwa; osadnictwo ma tu charakter punktowy (miasta górnicze, ośrodki leśne).'
    },
    {
        id: 54,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Wskaż dwa stany USA, które leżą całkowicie poza kontynentem północnoamerykańskim lub nie graniczą lądowo z pozostałymi 48 stanami (tzw. stany nieprzyległe / non-contiguous):',
        options: ['Alaska i Hawaje', 'Portoryko i Guam', 'Waszyngton i Oregon', 'Maine i Floryda'],
        correct: 0,
        explanation: 'Alaska (ekskława oddzielona terytorium Kanady) oraz Hawaje (archipelag na Oceanie Spokojnym w Polinezji) to dwa stany leżące poza głównym blokiem kontynentalnym (Lower 48).'
    },
    {
        id: 55,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Obszar Nunavut w północnej Kanadzie zajmuje ponad 2 mln km² (ponad 20% powierzchni Kanady). Ilu mieszkańców liczy to terytorium?',
        options: ['Około 40 tysięcy mieszkańców', 'Około 2 miliony mieszkańców', 'Około 500 tysięcy mieszkańców', 'Około 10 milionów mieszkańców'],
        correct: 0,
        explanation: 'Nunavut ma gęstość zaludnienia wynoszącą zaledwie 0,02 os./km²; ok. 85% mieszkańców stanowią rdzenni Inuici zamieszkujący odizolowane osady dostępne tylko drogą lotniczą lub morską.'
    },
    {
        id: 56,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'W strukturze osadniczej USA pas tzw. Pasa Słonecznego (Sun Belt) obejmuje stany położone na południu kraju. Jakie zjawisko demograficzne go charakteryzuje?',
        options: [
            'Najwyższy dodatni bilans migracji wewnętrznych – napływ ludności z chłodniejszych stanów północy',
            'Gwałtowny spadek liczby ludności i wyludnienie miast',
            'Odpływ ludności na Alaskę',
            'Całkowity brak rozwoju przemysłu i usług'
        ],
        correct: 0,
        explanation: 'Sun Belt (od Karoliny Północnej, przez Florydę i Teksas, po Arizonę i południową Kalifornię) przyciąga miliony Amerykanów cieplejszym klimatem, niższymi podatkami i nowymi miejscami pracy.'
    },
    {
        id: 57,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Korytarz Calgary – Edmonton w kanadyjskiej prowincji Alberta jest dynamicznym biegunem wzrostu osadnictwa na zachodzie Kanady dzięki:',
        options: [
            'Przemysłowi naftowo-gazowemu, nowoczesnemu rolnictwu i zaawansowanym technologiom',
            'Rozwojowi rybołówstwa oceanicznego',
            'Wielkim plantacjom owoców cytrusowych',
            'Złożom diamentów na Tarczy Kanadyjskiej'
        ],
        correct: 0,
        explanation: 'Calgary (stolica finansowa kanadyjskiego sektora naftowego) i Edmonton (stolica polityczna i rafineryjna Alberty) tworzą najszybciej rozwijający się obszar miejski w kanadyjskich preriach.'
    },
    {
        id: 58,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Jaką rolę w osadnictwie Doliny Środkowokalifornijskiej (Central Valley) odgrywa system irygacyjny Central Valley Project?',
        options: [
            'Umożliwia intensywne osadnictwo rolnicze poprzez przesyłanie wody z wilgotnej północy stanu na suche południe',
            'Chroni dolinę przed zalaniem przez wody Pacyfiku',
            'Wytwarza lód do chłodzenia wielkich miast',
            'Nawadnia wyłącznie pola golfowe w Las Vegas'
        ],
        correct: 0,
        explanation: 'Bez potężnych kanałów nawadniających (California Aqueduct) urodzajne gleby Central Valley byłyby półpustynią; dziś to jeden z najbardziej wydajnych regionów rolniczych świata.'
    },
    {
        id: 59,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Jedną z barier osadniczych w Kordylierach (np. w Kolorado czy Utah) jest bariera wysokościowa. Z czym się wiąże?',
        options: [
            'Ze spadkiem ciśnienia atmosferycznego, mniejszą zawartością tlenu, stromizną stoków i zagrożeniem lawinowym',
            'Ze zbyt wysoką temperaturą powietrza na szczytach',
            'Z brakiem jakichkolwiek skał pod budowę fundamentów',
            'Z występowaniem gęstych lasów mangrowych'
        ],
        correct: 0,
        explanation: 'Trudne warunki rzeźby terenu, bariera tlenowa powyżej 2500 m n.p.m. oraz surowy klimat alpejski ograniczają osadnictwo w Kordylierach głównie do dna dolin i kotlin śródgórskich.'
    },
    {
        id: 60,
        type: 'choice',
        category: 'Rozmieszczenie Ludności i Bariery',
        question: 'Które z wymienionych terytoriów zależnych USA na Karaibach posiada ludność liczącą ponad 3 miliony obywateli amerykańskich, lecz nie ma statusu stanu?',
        options: ['Portoryko (Puerto Rico)', 'Guam', 'Wyspy Dziewicze Stanów Zjednoczonych', 'Samoa Amerykańskie'],
        correct: 0,
        explanation: 'Portoryko to stowarzyszone terytorium USA (Commonwealth). Mieszkańcy są obywatelami USA, lecz nie głosują w wyborach prezydenckich USA, chyba że zamieszkają w jednym z 50 stanów.'
    },

    // =========================================================================
    // BLOK 5: STRUKTURA ETNICZNA, MIGRACJE I HISTORIA OSADNICTWA (61-75)
    // =========================================================================
    {
        id: 61,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Pojęcie „tygla narodów” (Melting Pot) w odniesieniu do społeczeństwa Stanów Zjednoczonych oznacza tradycyjny model:',
        options: [
            'Asymilacji imigrantów różnych narodowości i kultur w jedną wspólną tożsamość amerykańską',
            'Całkowitego zakazu wjazdu imigrantów do USA',
            'Segregacji rasowej w osobnych miastach',
            'Zachowania odrębnych języków urzędowych dla każdej mniejszości'
        ],
        correct: 0,
        explanation: 'Melting Pot to historyczna metafora, według której imigranci z całego świata „przetapiają się” w nowym kraju, przyjmując amerykański styl życia, język angielski i wartości konstytucyjne.'
    },
    {
        id: 62,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W Kanadzie zamiast modelu „tygla narodów” oficjalną doktryną państwową jest tzw. mozaika kulturowa (Cultural Mosaic). Na czym ona polega?',
        options: [
            'Na wspieraniu wielokulturowości (multiculturalism) – zachowywaniu odrębności kulturowej, języka i tradycji poszczególnych grup imigrantów',
            'Na przymusowej asymilacji wszystkich obywateli do kultury brytyjskiej',
            'Na zakazie kultywowania obcych tradycji religijnych',
            'Na podziale kraju na niezależne państwa etniczne'
        ],
        correct: 0,
        explanation: 'Kanadyjski Multiculturalism Act (1988) uznaje różnorodność etniczną i kulturową za fundamentalną wartość państwa, zachęcając grupy mniejszościowe do pielęgnowania własnego dziedzictwa.'
    },
    {
        id: 63,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Najliczniejszą i najszybciej rosnącą mniejszością etniczną w Stanach Zjednoczonych (stanowiącą blisko 19% ludności) są:',
        options: ['Latynosi / ludność hiszpańskojęzyczna (Hispanics / Latinos)', 'Afroamerykanie', 'Azjaci', 'Rdzenni Amerykanie'],
        correct: 0,
        explanation: 'Ludność hiszpańskojęzyczna (głównie pochodzenia meksykańskiego, portorykańskiego i kubańskiego) dominuje m.in. w Nowym Meksyku, Kalifornii, Teksasie i na południu Florydy.'
    },
    {
        id: 64,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W prowincji Nowy Meksyk (New Mexico) oraz w Kalifornii i Teksasie biali nielatynoscy obywatele stanowią mniej niż 50% mieszkańców. Zjawisko to w socjologii USA nazywa się:',
        options: [
            'Stanem „majority-minority” (większość mniejszościowa)',
            'Depopulacją',
            'Asymilacją jednostronną',
            'Kryzysem tożsamościowym'
        ],
        correct: 0,
        explanation: 'Majority-minority state oznacza, że żadna pojedyncza grupa etniczna nie stanowi bezwzględnej większości (powyżej 50%), a mniejszości łącznie tworzą większość populacji stanu.'
    },
    {
        id: 65,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Rdzenni mieszkańcy Kanady określani są oficjalnie w konstytucji tego kraju jako:',
        options: [
            'Ludność rdzenna (Aboriginal peoples), dzieląca się na: Pierwsze Narody (First Nations), Inuitów oraz Metysów (Métis)',
            'Wyłącznie Indianie kanadyjscy',
            'Plemienia północne',
            'Kolonizatorzy arktyczni'
        ],
        correct: 0,
        explanation: 'Konstytucja Kanady z 1982 r. uznaje trzy odrębne grupy ludności rdzennej: First Nations (Indianie), Inuits (mieszkańcy Arktyki) oraz Métis (potomkowie rdzennych mieszkańców i Europejczyków).'
    },
    {
        id: 66,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W 1999 roku na mapie administracyjnej Kanady utworzono nowe terytorium o nazwie Nunavut. Jaki był główny cel tego aktu?',
        options: [
            'Przyznanie szerokiej autonomii i samorządności rdzennej ludności inuickiej na ich tradycyjnych ziemiach arktycznych',
            'Utworzenie bazy dla rakiet kosmicznych',
            'Przekształcenie Arktyki w prywatną strefę wydobycia ropy naftowej',
            'Przesiedlenie imigrantów z Europy'
        ],
        correct: 0,
        explanation: 'Wydzielenie Nunavut z Terytoriów Północno-Zachodnich było historycznym porozumieniem regulującym roszczenia terytorialne Inuitów, którzy stanowią ok. 85% populacji terytorium.'
    },
    {
        id: 67,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W którym stanie USA znajduje się największy pod względem powierzchni rezerwat rdzennych Amerykanów – Navajo Nation (Naród Nawaho)?',
        options: [
            'Na styku stanów Arizona, Nowy Meksyk i Utah (tzw. Four Corners)',
            'Na Florydzie',
            'W stanie Nowy Jork',
            'W stanie Waszyngton'
        ],
        correct: 0,
        explanation: 'Navajo Nation zajmuje ponad 71 tys. km² (obszar większy niż Irlandia lub stan Wirginia Zachodnia), a jego terytorium rozciąga się na Wyżynie Kolorado.'
    },
    {
        id: 68,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Który język jest jedynym językiem urzędowym w prowincji Quebec na mocy słynnej Karty języka francuskiego (Bill 101)?',
        options: ['Język francuski', 'Język angielski', 'Zarówno angielski, jak i francuski', 'Język inuktitut'],
        correct: 0,
        explanation: 'Podczas gdy na szczeblu federalnym Kanada jest dwujęzyczna (angielski i francuski), w samej prowincji Quebec jedynym językiem urzędowym w administracji i handlu jest francuski.'
    },
    {
        id: 69,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W historii osadnictwa USA tzw. Szlak Łez (Trail of Tears) w latach 30. XIX wieku wiązał się z:',
        options: [
            'Przymusowym wysiedleniem plemion indiańskich (m.in. Czirokezów) z południowo-wschodnich stanów na Terytorium Indiańskie (dzisiejsza Oklahoma)',
            'Ucieczką niewolników do Kanady',
            'Klęską suszy na preriach',
            'Wyprawą poszukiwaczy złota do Kalifornii'
        ],
        correct: 0,
        explanation: 'Ustawa Indian Removal Act podpisana przez prezydenta Andrew Jacksona doprowadziła do tragicznego marszu tysięcy Indian; tysiące z nich zmarło z głodu, mrozu i chorób.'
    },
    {
        id: 70,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Współczesna struktura imigracji do Kanady wyróżnia się tzw. punktowym systemem imigracyjnym (Express Entry). Co jest jego celem?',
        options: [
            'Premiowanie imigrantów o wysokich kwalifikacjach zawodowych, znajomości języka angielskiego lub francuskiego oraz z wyższym wykształceniem',
            'Przyjmowanie wyłącznie osób posiadających wielomilionowy kapitał',
            'Losowanie zielonych kart na loterii',
            'Przyjmowanie wyłącznie osób w wieku emerytalnym'
        ],
        correct: 0,
        explanation: 'Kanada prowadzi selektywną politykę imigracyjną nakierowaną na zaspokajanie potrzeb rynku pracy, dzięki czemu napływają tam inżynierowie, informatycy i lekarze (m.in. z Indii, Chin i Filipin).'
    },
    {
        id: 71,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Która metropolia w Kanadzie cechuje się najwyższym odsetkiem ludności urodzonej poza granicami kraju (ponad 47% mieszkańców) i jest uznawana za jedno z najbardziej zróżnicowanych miast globu?',
        options: ['Toronto', 'Quebec', 'Halifax', 'St. John\'s'],
        correct: 0,
        explanation: 'Prawie połowa mieszkańców Toronto urodziła się poza granicami Kanady; w mieście używa się ponad 160 języków, a dzielnice etniczne tworzą unikalną mozaikę kulturową.'
    },
    {
        id: 72,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Zjawisko tzw. Great Migration (Wielkiej Migracji) w Stanach Zjednoczonych w latach 1916–1970 polegało na:',
        options: [
            'Masowej migracji milionów Afroamerykanów z rolniczych stanów południa do uprzemysłowionych miast północy i zachodu (Chicago, Detroit, Nowy Jork)',
            'Emigracji rdzennych mieszkańców na Alaskę',
            'Powrocie potomków Europejczyków do Wielkiej Brytanii',
            'Przesiedleniu farmerów z Kalifornii do Teksasu'
        ],
        correct: 0,
        explanation: 'Wielka Migracja przekształciła strukturę demograficzną i kulturową amerykańskich miast północy, stymulując m.in. narodziny jazzu, bluesa oraz renesans Harlemu.'
    },
    {
        id: 73,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Który stan USA posiada najwyższy odsetek ludności pochodzenia azjatyckiego (Asian Americans) – blisko 40%?',
        options: ['Hawaje', 'Kalifornia', 'Nowy Jork', 'Waszyngton'],
        correct: 0,
        explanation: 'Hawaje są jedynym stanem USA z przewagą ludności pochodzenia azjatyckiego (Filipińczycy, Japończycy, Chińczycy), którzy przybyli tam pierwotnie do pracy na plantacjach trzciny cukrowej i ananasów.'
    },
    {
        id: 74,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'Polonia amerykańska i kanadyjska odgrywała ważną rolę w historii osadnictwa. Które miasto w Ameryce Północnej jest historycznie uznawane za największe skupisko Polonii poza granicami Polski?',
        options: ['Chicago', 'Detroit', 'Toronto', 'Filadelfia'],
        correct: 0,
        explanation: 'W aglomeracji Chicago mieszka ponad milion osób polskiego pochodzenia (tzw. Polish Americans); w Kanadzie największym ośrodkiem polonijnym jest z kolei aglomeracja Toronto.'
    },
    {
        id: 75,
        type: 'choice',
        category: 'Struktura Etniczna i Migracje',
        question: 'W strukturze demograficznej Stanów Zjednoczonych i Kanady zachodzi proces starzenia się społeczeństwa (związany ze starzeniem się pokolenia powojennego wyżu demograficznego – baby boomers). Jaki jest główny czynnik hamujący spadek liczby ludności w tych krajach?',
        options: [
            'Wysokie dodatnie saldo migracji zagranicznych (napływ imigrantów w wieku produkcyjnym)',
            'Drastyczny wzrost wskaźnika dzietności do poziomu 4 dzieci na kobietę',
            'Całkowity brak zgonów dzięki nowoczesnej medycynie',
            'Wprowadzenie przymusowych narodzin w szpitalach federalnych'
        ],
        correct: 0,
        explanation: 'Zarówno USA, jak i Kanada utrzymują wzrost demograficzny głównie dzięki napływowi imigrantów, którzy zasilają rynek pracy, płacą podatki i odmładzają strukturę wiekową społeczeństwa.'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = USA_CAN_URBAN_QUESTIONS;
}
