// Baza danych obiektów i pytań fizycznogeograficznych USA i Kanady
// Zawiera geometrie (punkty, linie, polylinie) oraz pytania konkursowe

const PHYSICAL_MAP_FEATURES = [
    {
        "id": "river_mississippi",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Missisipi",
        "type": "polyline",
        "coords": [
            [
                47.2,
                -95.2
            ],
            [
                45,
                -93.1
            ],
            [
                43,
                -91.1
            ],
            [
                41.5,
                -90.5
            ],
            [
                38.8,
                -90.2
            ],
            [
                37,
                -89.1
            ],
            [
                35.1,
                -90
            ],
            [
                32.3,
                -90.9
            ],
            [
                30,
                -90.1
            ],
            [
                29.1,
                -89.2
            ]
        ],
        "center": [
            36.5,
            -89.8
        ],
        "zoom": 5,
        "question": "Wskaż nazwę zaznaczonej na mapie najdłuższej rzeki Ameryki Północnej (wraz z dopływem Missouri), uchodzącej rozległą deltą palczastą do Zatoki Meksykańskiej:",
        "options": [
            "Rzeka Kolorado",
            "Rzeka Mackenzie",
            "Rzeka Missisipi",
            "Rzeka Świętego Wawrzyńca"
        ],
        "correct": 2,
        "explanation": "Missisipi wraz z Missouri tworzy system rzeczny o długości ok. 6275 km. Jej zlewisko obejmuje ponad 3,2 mln km² (ponad 40% powierzchni kontynentalnych USA), a rzeka uchodzi charakterystyczną deltą palczastą.",
        "geophysicalQuestion": "Wskaż proces geomorfologiczny kształtujący ujście tej rzeki do Zatoki Meksykańskiej:",
        "geophysicalOptions": [
            "Powstanie estuarium w wyniku silnych prądów przybrzeżnych i abrazyjnego niszczenia wybrzeża",
            "Erozja wsteczna spowodowana gigantycznymi pływami oceanicznymi",
            "Erozja lodowcowa pogłębiająca fiordy u ujścia",
            "Akumulacja osadów rzecznych tworząca deltę palczastą z powodu małych pływów morskich"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Zatoka Meksykańska charakteryzuje się bardzo małymi pływami i spokojnymi wodami, co sprzyja intensywnej akumulacji niesionego materiału i budowie rozległej delty palczastej (bird-foot delta)."
    },
    {
        "id": "river_colorado",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Kolorado",
        "type": "polyline",
        "coords": [
            [
                40.3,
                -105.8
            ],
            [
                39.1,
                -108.5
            ],
            [
                38.2,
                -109.8
            ],
            [
                36.8,
                -111.6
            ],
            [
                36.1,
                -113.2
            ],
            [
                35.2,
                -114.6
            ],
            [
                32.7,
                -114.7
            ],
            [
                31.8,
                -114.8
            ]
        ],
        "center": [
            36.2,
            -112.5
        ],
        "zoom": 6,
        "question": "Zaznaczona rzeka płynie przez suche wyżyny południowo-zachodnich USA i wyżłobiła najsłynniejszy kanion świata. Jest to:",
        "options": [
            "Rzeka Columbia",
            "Rzeka Kolorado",
            "Rzeka Snake",
            "Rzeka Rio Grande"
        ],
        "correct": 1,
        "explanation": "Rzeka Kolorado (ok. 2330 km) płynie przez Wyżynę Kolorado i uchodzi do Zatoki Kalifornijskiej. Słynie z Wielkiego Kanonu (Grand Canyon) oraz potężnej zapory Hoovera.",
        "geophysicalQuestion": "Jakie procesy doprowadziły do powstania Wielkiego Kanonu wyżłobionego przez tę rzekę?",
        "geophysicalOptions": [
            "Żłobienie przez lądolód plejstoceński w okresie zlodowacenia",
            "Głęboka erozja denna (wgłębna) rzeki przy jednoczesnym powolnym wypiętrzaniu tektonicznym Wyżyny Kolorado",
            "Abrazja morska w zatoce oceanicznej",
            "Zapadlisko tektoniczne (rów tektoniczny) bez udziału erozji wodnej"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Wielki Kanon Kolorado powstał w wyniku synergii powolnego wypiętrzania tektonicznego Wyżyny Kolorado w kenozoiku i intensywnej, głębokiej erozji dennej niosącej twardy rumosz rzeki Kolorado."
    },
    {
        "id": "river_mackenzie",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Mackenzie",
        "type": "polyline",
        "coords": [
            [
                61.3,
                -117.6
            ],
            [
                62.4,
                -123.1
            ],
            [
                65.3,
                -126.8
            ],
            [
                67.4,
                -133.7
            ],
            [
                69.3,
                -135.3
            ]
        ],
        "center": [
            65,
            -126
        ],
        "zoom": 5,
        "question": "Wskaż najdłuższą rzekę Kanady (ok. 4241 km w systemie z rzekami Peace i Finlay), uchodzącą rozległą deltą do Morza Beauforta:",
        "options": [
            "Rzeka Nelson",
            "Rzeka Mackenzie",
            "Rzeka Jukon",
            "Rzeka Fraser"
        ],
        "correct": 1,
        "explanation": "Mackenzie odprowadza wody z Wielkiego Jeziora Niewolniczego do Morza Beauforta w Arktyce. Przez ponad pół roku jest skuta lodem, a wiosenne odmarzanie od południa powoduje ogromne zatory lodowe i powodzie.",
        "geophysicalQuestion": "Dlaczego w dolnym biegu rzeki Mackenzie dochodzi wiosną do katastrofalnych wezbrań i powodzi zatorowych?",
        "geophysicalOptions": [
            "Ponieważ rzeka płynie na północ – jej źródła i górny bieg odmarzają wcześniej niż skute lodem ujście arktyczne",
            "Wskutek nagłego topnienia lądolodu grenlandzkiego",
            "Z powodu gwałtownych monsunów letnich w Arktyce",
            "Przez wdzieranie się pływów oceanicznych w głąb lądu"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Rzeki Syberii i północnej Kanady płynące na północ (jak Mackenzie czy Ob) odmarzają od południa ku chłodnej północy; spływająca woda napotyka nienaruszony lód w ujściu, co tworzy potężne zatory lodowe."
    },
    {
        "id": "river_st_lawrence",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Świętego Wawrzyńca",
        "type": "polyline",
        "coords": [
            [
                44.2,
                -76.4
            ],
            [
                45,
                -74.7
            ],
            [
                45.5,
                -73.5
            ],
            [
                46.8,
                -71.2
            ],
            [
                48.5,
                -68.5
            ],
            [
                49.5,
                -66.5
            ]
        ],
        "center": [
            46.5,
            -72.5
        ],
        "zoom": 6,
        "question": "Wskaż zaznaczoną strategiczną rzekę łączącą Wielkie Jeziora z Oceanem Atlantyckim, tworzącą część granicy USA-Kanada:",
        "options": [
            "Rzeka Świętego Wawrzyńca",
            "Rzeka Potomak",
            "Rzeka Ottawa",
            "Rzeka Hudson"
        ],
        "correct": 0,
        "explanation": "Rzeka św. Wawrzyńca odprowadza wody z Wielkich Jezior do Zatoki Św. Wawrzyńca. Jej potężne estuarium jest jednym z największych na Ziemi i stanowi morską drogę wodną Saint Lawrence Seaway.",
        "geophysicalQuestion": "Jaką formę ujścia tworzy rzeka Świętego Wawrzyńca i w jaki sposób powstała?",
        "geophysicalOptions": [
            "Wielostopniowy wodospad wpadający bezpośrednio do rowu oceanicznego",
            "Deltę palczastą powstałą wskutek braku pływów",
            "Piaszczystą mierzeję odcinającą zalew przymorski",
            "Ogromne estuarium (lejkowate ujście) ukształtowane w zapadlisku tektonicznym i pogłębione przez lodowiec"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Ujście rzeki św. Wawrzyńca to najdłuższe estuarium świata (ponad 300 km długości i do kilkudziesięciu km szerokości), w którym mieszają się wody słodkie ze słonymi wodami Atlantyku."
    },
    {
        "id": "river_yukon",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Jukon",
        "type": "polyline",
        "coords": [
            [
                60.7,
                -135
            ],
            [
                64,
                -139.4
            ],
            [
                65,
                -141
            ],
            [
                65.8,
                -144.5
            ],
            [
                66.5,
                -145.2
            ],
            [
                64.8,
                -157
            ],
            [
                62.5,
                -164
            ],
            [
                62.7,
                -165
            ]
        ],
        "center": [
            64.8,
            -147
        ],
        "zoom": 5,
        "question": "Wskaż wielką rzekę północy (3185 km), która przepływa przez kanadyjskie terytorium o tej samej nazwie i całą Alaskę, uchodząc do Morza Beringa:",
        "options": [
            "Rzeka Mackenzie",
            "Rzeka Kuskokwim",
            "Rzeka Kolumbia",
            "Rzeka Jukon"
        ],
        "correct": 3,
        "explanation": "Jukon był osią XIX-wiecznej gorączki złota (nad dopływem Klondike). Przepływa przez płaskowyże Alaski i uchodzi ogromną deltą do Morza Beringa.",
        "geophysicalQuestion": "Wokół basenu rzeki Jukon występuje zjawisko wiecznej zmarzliny. Co charakteryzuje tę warstwę?",
        "geophysicalOptions": [
            "Wieloletnie przemarznięcie gruntu do kilkuset metrów w głąb, z rozmarzaniem jedynie cienkiej warstwy czynnej latem",
            "Ciągłe pokrycie terenu lądolodem o miąższości 2 km",
            "Brak jakiejkolwiek roślinności i wieczne ciemności polarne",
            "Zimowe zamarzanie wód morskich przy braku zmarzliny gruntowej"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Wieloletnia (ciągła i nieciągła) zmarzlina pokrywa większość dorzecza Jukonu, powodując m.in. zjawiska termokrasu, powstawanie pingo i utrudnienia budowlane przy rozmarzaniu warstwy czynnej."
    },
    {
        "id": "river_columbia",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Kolumbia",
        "type": "polyline",
        "coords": [
            [
                50.2,
                -115.8
            ],
            [
                51.5,
                -118
            ],
            [
                49,
                -117.6
            ],
            [
                48,
                -119
            ],
            [
                46.2,
                -119.2
            ],
            [
                45.6,
                -121.2
            ],
            [
                46.2,
                -124
            ]
        ],
        "center": [
            46.5,
            -120
        ],
        "zoom": 6,
        "question": "Wskaż największą rzekę pacyficznego zlewiska Ameryki Północnej pod względem przepływu wody, słynącą z potężnych elektrowni wodnych (m.in. Grand Coulee):",
        "options": [
            "Rzeka Kolumbia",
            "Rzeka Sacramento",
            "Rzeka Fraser",
            "Rzeka Kolorado"
        ],
        "correct": 0,
        "explanation": "Rzeka Kolumbia (ok. 2000 km) wypływa z Kolumbii Brytyjskiej w Kanadzie, przecina Góry Kaskadowe i uchodzi do Pacyfiku. Wraz z dopływem Snake River produkuje ponad 40% energii hydroelektrycznej w USA.",
        "geophysicalQuestion": "Przez jaką krainę wulkaniczną zbudowaną z potężnych pokryw lawowych (trapów) bazaltowych płynie rzeka Kolumbia?",
        "geophysicalOptions": [
            "Płaskowyż Kolumbii (Columbia Plateau)",
            "Tarczę Kanadyjską",
            "Nizinę Atlantycką",
            "Wielkie Równiny"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Płaskowyż Kolumbii jest jednym z największych płaskowyżów bazaltowych na świecie, uformowanym w miocenie przez wylewy law szczelinowych (Columbia River Basalt Group)."
    },
    {
        "id": "river_rio_grande",
        "category": "hydro",
        "categoryName": "Hydrografia – Rzeki",
        "name": "Rzeka Rio Grande (Rio Bravo)",
        "type": "polyline",
        "coords": [
            [
                37.8,
                -107.2
            ],
            [
                36,
                -106
            ],
            [
                32,
                -106.6
            ],
            [
                30,
                -104.5
            ],
            [
                29.3,
                -103.5
            ],
            [
                28.7,
                -100.5
            ],
            [
                26,
                -97.5
            ]
        ],
        "center": [
            30.5,
            -103
        ],
        "zoom": 6,
        "question": "Zaznaczona rzeka na długim odcinku stanowi naturalną granicę państwową między Stanami Zjednoczonymi a Meksykiem. Jest to:",
        "options": [
            "Rzeka Brazos",
            "Rzeka Gila",
            "Rio Grande",
            "Rzeka Kolorado"
        ],
        "correct": 2,
        "explanation": "Rio Grande (3051 km) wypływa z Gór Skalistych w Kolorado, płynie przez Nowy Meksyk i wzdłuż granicy Teksasu z Meksykiem uchodzi do Zatoki Meksykańskiej.",
        "geophysicalQuestion": "Przez jaki rów tektoniczny (strefę rozciągania litosfery kontynentalnej) płynie w górnym i środkowym biegu ta rzeka?",
        "geophysicalOptions": [
            "Rów Atakamski",
            "Rów Środkowoamerykański",
            "Uskok San Andreas",
            "Rów Rio Grande (Rio Grande Rift)"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Rio Grande Rift to strefa ryftowa w skorupie kontynentalnej, wzdłuż której litosfera Ameryki Północnej ulega rozciąganiu i pocienieniu, z towarzyszącym wulkanizmem i uskokami normalnymi."
    },
    {
        "id": "fault_san_andreas",
        "category": "tectonics",
        "categoryName": "Tektonika & Geofizyka",
        "name": "Uskok San Andreas",
        "type": "polyline",
        "coords": [
            [
                39.8,
                -124
            ],
            [
                38,
                -123
            ],
            [
                36.8,
                -121.5
            ],
            [
                35.5,
                -120
            ],
            [
                34.5,
                -118
            ],
            [
                33.5,
                -116
            ],
            [
                32.5,
                -115.3
            ]
        ],
        "center": [
            36,
            -120.5
        ],
        "zoom": 6,
        "question": "Wskaż zaznaczoną na mapie Kalifornii słynną strefę uskokową o długości ok. 1200 km, będącą przyczyną niszczycielskich trzęsień ziemi:",
        "options": [
            "Rów Cascadia",
            "Uskok San Andreas",
            "Uskok Denali",
            "Uskok Nowego Madrytu"
        ],
        "correct": 1,
        "explanation": "Uskok San Andreas to strefa uskoku przesuwczego prawoskrętnego, oddzielająca poruszającą się na północny zachód płytę Pacyficzną od płyty Północnoamerykańskiej.",
        "geophysicalQuestion": "Jaki typ granicy płyt litosfery reprezentuje uskok San Andreas?",
        "geophysicalOptions": [
            "Granicę rozbieżną (ryftową) z powstawaniem nowej skorupy oceanicznej",
            "Strefę obdukcji skorupy oceanicznej na kontynent",
            "Granicę zbieżną (kolizyjną) z subdukcją",
            "Granicę konserwatywną (transformacyjną) z ruchem poziomo-przesuwczym"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Uskok San Andreas to klasyczny uskok transformacyjny (konserwatywny): płyty ślizgają się poziomo obok siebie bez tworzenia ani niszczenia skorupy ziemskiej, co generuje płytkie, gwałtowne trzęsienia ziemi."
    },
    {
        "id": "subduction_cascadia",
        "category": "tectonics",
        "categoryName": "Tektonika & Geofizyka",
        "name": "Strefa Subdukcji Cascadia",
        "type": "polyline",
        "coords": [
            [
                50.5,
                -128.5
            ],
            [
                48,
                -126
            ],
            [
                45,
                -125
            ],
            [
                42,
                -125
            ],
            [
                40.3,
                -124.5
            ]
        ],
        "center": [
            45.5,
            -125.5
        ],
        "zoom": 5,
        "question": "Zaznaczona podmorska strefa u wybrzeży Oregonu, Waszyngtonu i Kolumbii Brytyjskiej to strefa subdukcji generująca megatrzęsienia i wulkany. Jest to:",
        "options": [
            "Strefa subdukcji Cascadia",
            "Grzbiet Gorda",
            "Rów Mariański",
            "Uskok Haywarda"
        ],
        "correct": 0,
        "explanation": "Cascadia Subduction Zone to strefa o długości 1000 km, gdzie oceaniczna płyta Juan de Fuca zagłębia się pod płytę Północnoamerykańską. Ostatnie potężne megatrzęsienie o magnitudzie ok. 9,0 miało tu miejsce w 1700 r.",
        "geophysicalQuestion": "Jakie pasmo górskie powstało bezpośrednio jako łuk wulkaniczny w wyniku subdukcji w strefie Cascadia?",
        "geophysicalOptions": [
            "Appalachy (Appalachian Mountains)",
            "Góry Kaskadowe (Cascade Range)",
            "Sierra Nevada",
            "Góry Skaliste (Rocky Mountains)"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Topnienie pogrążającej się płyty Juan de Fuca zasila magmą łuk wulkaniczny Gór Kaskadowych, w tym aktywne stratowulkany: Mount St. Helens, Mount Rainier, Mount Shasta i Mount Hood."
    },
    {
        "id": "peak_denali",
        "category": "orography",
        "categoryName": "Orografia – Szczyty",
        "name": "Denali (Mount McKinley)",
        "type": "point",
        "coords": [
            63.07,
            -151
        ],
        "center": [
            63.07,
            -151
        ],
        "zoom": 7,
        "question": "Wskazany punkt na Alasce to najwyższy szczyt Ameryki Północnej (6190 m n.p.m.). Jest to:",
        "options": [
            "Mount Whitney",
            "Mount Saint Elias",
            "Mount Logan",
            "Denali"
        ],
        "correct": 3,
        "explanation": "Denali (dawniej Mt. McKinley) wznosi się w paśmie Alaska Range. Ma największą na świecie wysokość względną mierzoną od podstawy szczytu wznoszącej się z płaskowyżu (ponad 5500 m przewyższenia).",
        "geophysicalQuestion": "W jakiej orogenezie i strefie tektonicznej wypiętrzyło się pasmo Denali?",
        "geophysicalOptions": [
            "W orogenezie alpejskiej w strefie aktywnej kolizji i subdukcji pacyficznej",
            "W wyniku zapadania się kaldery wulkanicznej",
            "W orogenezie kaledońskiej na twardej tarczy kratonicznej",
            "W orogenezie hercyńskiej na skutek ryftu kontynentalnego"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Kordyliery Alaski i Denali to młode góry fałdowe powstałe w alpejskim cyklu orogenicznym wskutek naporu płyty Pacyficznej na płytę Północnoamerykańską."
    },
    {
        "id": "peak_logan",
        "category": "orography",
        "categoryName": "Orografia – Szczyty",
        "name": "Mount Logan",
        "type": "point",
        "coords": [
            60.57,
            -140.4
        ],
        "center": [
            60.57,
            -140.4
        ],
        "zoom": 7,
        "question": "Zaznaczony punkt w południowo-zachodnim Jukonie (Kanada) to najwyższy szczyt Kanady (5959 m n.p.m.). Nazywa się:",
        "options": [
            "Mount Robson",
            "Mount Columbia",
            "Denali",
            "Mount Logan"
        ],
        "correct": 3,
        "explanation": "Mount Logan leży w Górach Świętego Eliasza w Parku Narodowym Kluane. Jest potężnym masywem lodowcowym o obwodzie podstawy przekraczającym 100 km.",
        "geophysicalQuestion": "Masyw Mount Logan leży w jednym z największych pozapolarnych pól lodowych na Ziemi. Jak nazywają się spływające z niego lodowce?",
        "geophysicalOptions": [
            "Brak lodowców z powodu zbyt suchych mas powietrza",
            "Lądolód kontynentalny",
            "Lodowce alpejskie i piedmontowe (podgórskie, np. Malaspina)",
            "Lodowce norweskie typu fjell"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Góry Świętego Eliasza zatrzymują wilgotne masy powietrza znad Pacyfiku, co wywołuje gigantyczne opady śniegu i tworzy potężne lodowce dolinne oraz podgórskie (piedmontowe, jak lodowiec Malaspina)."
    },
    {
        "id": "peak_st_helens",
        "category": "tectonics",
        "categoryName": "Tektonika & Wulkany",
        "name": "Mount St. Helens",
        "type": "point",
        "coords": [
            46.2,
            -122.19
        ],
        "center": [
            46.2,
            -122.19
        ],
        "zoom": 8,
        "question": "Wskazany stratowulkan w Górach Kaskadowych zasłynął katastrofalną erupcją z wyrzutem bocznym w maju 1980 roku. Jest to:",
        "options": [
            "Mount Shasta",
            "Mount Rainier",
            "Mount St. Helens",
            "Kilauea"
        ],
        "correct": 2,
        "explanation": "Erupcja Mount St. Helens w 1980 r. zniszczyła północny stok wulkanu (największe osuwisko w historii nowożytnej), ścięła las na setkach kilometrów kwadratowych i obniżyła szczyt o 400 metrów.",
        "geophysicalQuestion": "Jaki typ erupcji wulkanicznej i materiału charakteryzuje Mount St. Helens?",
        "geophysicalOptions": [
            "Wulkanizm błotny związany ze złożami gazu ziemnego",
            "Spokojna erupcja hawajska z rzadką lawą bazaltową",
            "Eksplozywna erupcja pliniańska z lepką magmą dacytowo-andezytową i spływami piroklastycznymi",
            "Erupcja szczelinowa tworząca płaskowyż lawowy"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Wulkany łuku Kaskadów zasilane są magmą bogatą w krzemionkę i gazy (andezyty i dacyty), co powoduje zatykanie przewodów wulkanicznych i potężne, katastrofalne erupcje eksplozywne."
    },
    {
        "id": "peak_yellowstone",
        "category": "tectonics",
        "categoryName": "Tektonika & Geofizyka",
        "name": "Kaldera Yellowstone (Superwulkan)",
        "type": "point",
        "coords": [
            44.42,
            -110.58
        ],
        "center": [
            44.42,
            -110.58
        ],
        "zoom": 8,
        "question": "Zaznaczony punkt w Wyoming to największe pole gejzerów na świecie oraz gigantyczna kaldera superwulkanu. Jest to:",
        "options": [
            "Dolina Śmierci",
            "Kilauea",
            "Yellowstone",
            "Lassen Peak"
        ],
        "correct": 2,
        "explanation": "Yellowstone to najstarszy park narodowy świata (od 1872 r.). Kaldera wulkaniczna o wymiarach 55 × 72 km kryje pod sobą potężną komorę magmową.",
        "geophysicalQuestion": "Jakie jest geologiczne pochodzenie wulkanizmu i zjawisk geotermalnych w Yellowstone?",
        "geophysicalOptions": [
            "Kolizja dwóch płyt kontynentalnych",
            "Subdukcja płyty oceanicznej w rowie oceanicznym",
            "Śródpłytowa plama gorąca (hotspot) w płaszczu Ziemi, nad którą przesuwa się płyta Północnoamerykańska",
            "Uderzenie meteorytu w kenozoiku"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Yellowstone powstało nad głęboką plamą gorąca (mantle plume). W miarę przesuwania się płyty litosfery plama ta wypalała kolejne kaldery, tworząc m.in. nizinę Snake River Plain."
    },
    {
        "id": "point_death_valley",
        "category": "orography",
        "categoryName": "Orografia – Skrajności",
        "name": "Dolina Śmierci (Badwater Basin)",
        "type": "point",
        "coords": [
            36.25,
            -116.82
        ],
        "center": [
            36.25,
            -116.82
        ],
        "zoom": 8,
        "question": "Wskazany punkt w Kalifornii to najniżej położone miejsce w Ameryce Północnej (depresja -86 m p.p.m.) oraz rekordzista ciepła na Ziemi. Jest to:",
        "options": [
            "Dolina Śmierci (Death Valley)",
            "Salton Sea",
            "Wielkie Jezioro Słone",
            "Pustynia Mojave"
        ],
        "correct": 0,
        "explanation": "Badwater Basin w Dolinie Śmierci to depresja leżąca 86 metrów poniżej poziomu morza. W 1913 r. odnotowano tu światowy rekord temperatury powietrza (+56,7°C).",
        "geophysicalQuestion": "W jaki sposób powstała ta głęboka depresja pod względem tektonicznym?",
        "geophysicalOptions": [
            "Jako rów tektoniczny (graben) w strefie rozciągania prowincji Basenów i Pasm (Basin and Range)",
            "Przez zapadlisko krasowe w skałach wapiennych",
            "Przez wywianie piasku w procesie deflacji eolicznej",
            "Wskutek erozji rzecznej wyschniętej rzeki Kolorado"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Dolina Śmierci to rów tektoniczny (graben) ograniczony zrębami górskimi (Panamint Range i Black Mountains) w prowincji Basin and Range, gdzie skorupa kontynentalna pęka i rozszerza się."
    },
    {
        "id": "peak_whitney",
        "category": "orography",
        "categoryName": "Orografia – Szczyty",
        "name": "Mount Whitney",
        "type": "point",
        "coords": [
            36.57,
            -118.29
        ],
        "center": [
            36.57,
            -118.29
        ],
        "zoom": 8,
        "question": "Wskazany szczyt w paśmie Sierra Nevada (4421 m n.p.m.) to najwyższy punkt 48 kontynentalnych stanów USA. Jest to:",
        "options": [
            "Mount Rainier",
            "Mount Elbert",
            "Mount Whitney",
            "Pikes Peak"
        ],
        "correct": 2,
        "explanation": "Mount Whitney wznosi się zaledwie 136 km na zachód od najniższego punktu Ameryki Północnej (Doliny Śmierci), co stanowi jeden z największych kontrastów hipsometrycznych kontynentu.",
        "geophysicalQuestion": "Z jakich skał jest zbudowane pasmo Sierra Nevada i szczyt Mount Whitney?",
        "geophysicalOptions": [
            "Z młodych popiołów wulkanicznych i bazaltów",
            "Ze skał osadowych – fliszu karpackiego",
            "Z soli kamiennej i gipsów",
            "Z głębinowych skał magmowych – potężnego granodiorytowego batolitu"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Sierra Nevada to gigantyczny batolit granitowy (Sierra Nevada Batholith) powstały w mezozoiku w głębi skorupy ziemskiej, a następnie wyniesiony tektonicznie i odsłonięty przez erozję."
    },
    {
        "id": "range_rockies",
        "category": "orography",
        "categoryName": "Orografia – Pasma Górskie",
        "name": "Góry Skaliste (Rocky Mountains)",
        "type": "polyline",
        "coords": [
            [
                59,
                -125
            ],
            [
                55,
                -121
            ],
            [
                51,
                -116
            ],
            [
                47,
                -113
            ],
            [
                43,
                -109.5
            ],
            [
                39,
                -106.5
            ],
            [
                35.5,
                -105.5
            ]
        ],
        "center": [
            45,
            -110
        ],
        "zoom": 5,
        "question": "Wskaż zaznaczony potężny wschodni łańcuch Kordylierów o długości ok. 4800 km, ciągnący się od Kolumbii Brytyjskiej po Nowy Meksyk:",
        "options": [
            "Góry Kaskadowe",
            "Appalachy",
            "Góry Skaliste (Rocky Mountains)",
            "Sierra Nevada"
        ],
        "correct": 2,
        "explanation": "Góry Skaliste stanowią główny kontynentalny dział wodny Ameryki Północnej (Continental Divide) między zlewiskami Oceanu Atlantyckiego/Arktycznego a Spokojnego.",
        "geophysicalQuestion": "W jakiej orogenezie i fazie fałdowań ukształtowały się Góry Skaliste?",
        "geophysicalOptions": [
            "W orogenezie prekambryjskiej",
            "W orogenezie hercyńskiej podczas powstawania Pangei",
            "W orogenezie laramijskiej (faza alpejskiego cyklu górotwórczego) na przełomie kredy i paleogenu",
            "W orogenezie kaledońskiej w paleozoiku"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Góry Skaliste zostały sfałdowane i wypiętrzone podczas orogenezy laramijskiej (ok. 80-55 mln lat temu), spowodowanej płaskim wsuwaniem się płyty Farallon pod płytę Północnoamerykańską."
    },
    {
        "id": "range_appalachians",
        "category": "orography",
        "categoryName": "Orografia – Pasma Górskie",
        "name": "Appalachy (Appalachian Mountains)",
        "type": "polyline",
        "coords": [
            [
                34,
                -86.5
            ],
            [
                35.5,
                -83.5
            ],
            [
                38,
                -80
            ],
            [
                41,
                -76
            ],
            [
                44,
                -72
            ],
            [
                47,
                -69
            ],
            [
                49,
                -65
            ]
        ],
        "center": [
            39,
            -78
        ],
        "zoom": 5,
        "question": "Zaznaczone stare góry na wschodzie USA i Kanady, bogate w złoża węgla kamiennego (z najwyższym szczytem Mount Mitchell 2037 m), to:",
        "options": [
            "Góry Skaliste",
            "Appalachy",
            "Ozark",
            "Góry Laurentyńskie"
        ],
        "correct": 1,
        "explanation": "Appalachy to stare góry fałdowo-zrębowe. Ich wypiętrzenie w paleozoiku wiązało się z kolizją płyt tworzących superkontynent Pangea.",
        "geophysicalQuestion": "W jakich orogenezach paleozoicznych powstały pierwotne pasma Appalachów?",
        "geophysicalOptions": [
            "W orogenezach kaledońskiej i hercyńskiej (orogeneza takońska, akadyjska i allegańska)",
            "W orogenezie kimeryjskiej w mezozoiku",
            "W orogenezie alpejskiej równocześnie z Kordylierami",
            "W orogenezie alpejskiej w kenozoiku"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Appalachy powstawały w serii orogenez paleozoicznych przy zamykaniu oceanu Japetus i kolizji z Gondwaną; są rówieśnikami europejskich Kaledonidów i Waryscydów (Hercynidów)."
    },
    {
        "id": "shield_canadian",
        "category": "orography",
        "categoryName": "Tarcza Kontynentalna",
        "name": "Tarcza Kanadyjska (Laurentyjska)",
        "type": "polyline",
        "coords": [
            [
                50,
                -95
            ],
            [
                55,
                -100
            ],
            [
                60,
                -105
            ],
            [
                65,
                -105
            ],
            [
                68,
                -90
            ],
            [
                65,
                -70
            ],
            [
                58,
                -65
            ],
            [
                50,
                -65
            ],
            [
                47,
                -80
            ],
            [
                50,
                -95
            ]
        ],
        "center": [
            56,
            -85
        ],
        "zoom": 4,
        "question": "Zaznaczony rozległy obszar w kształcie podkowy wokół Zatoki Hudsona, zbudowany ze starych skał krystalicznych i zmatowiony przez lodowce, to:",
        "options": [
            "Tarcza Kanadyjska",
            "Nizina Zatokowa",
            "Wielkie Równiny",
            "Płaskowyż Kolorado"
        ],
        "correct": 0,
        "explanation": "Tarcza Kanadyjska zajmuje prawie połowę powierzchni Kanady. Jest najstarszym trzonem kontynentu (skały prekambryjskie liczące do 4 mld lat), obfitującym w rudy żelaza, niklu, miedzi i złota.",
        "geophysicalQuestion": "Jaki proces czwartorzędowy nadał Tarczy Kanadyjskiej współczesny krajobraz pełen tysięcy jezior, mutonów i obnażonych skał?",
        "geophysicalOptions": [
            "Zapadanie się rowów tektonicznych w neogenie",
            "Działalność lądolodu laurentyjskiego (egzaracja, detrakcja i akumulacja polodowcowa)",
            "Wylewy magmy bazaltowej",
            "Pustynnienie i intensywna erozja wietrzna w klimacie suchym"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Lądolód laurentyjski zdarł pokrywy zwietrzelinowe (egzaracja), wygładził lite skały krystaliczne (mutony/barańce) i wytworzył misy jeziorne, które po stopnieniu lodu wypełniła woda."
    },
    {
        "id": "bay_fundy",
        "category": "hydro",
        "categoryName": "Hydrografia – Zatoki",
        "name": "Zatoka Fundy (Bay of Fundy)",
        "type": "point",
        "coords": [
            45.2,
            -65.5
        ],
        "center": [
            45.2,
            -65.5
        ],
        "zoom": 7,
        "question": "Wskazana wąska zatoka między Nowym Brunszwikiem a Nową Szkocją słynie z największych na Ziemi pływów morskich (do 16 m). Jest to:",
        "options": [
            "Zatoka Fundy",
            "Zatoka Świętego Wawrzyńca",
            "Zatoka Hudsona",
            "Zatoka Chesapeake"
        ],
        "correct": 0,
        "explanation": "Zatoka Fundy bije światowe rekordy pływów morskich (skok pływu dochodzi do 16,3 metra). Woda wlewa się dwa razy na dobę w postaci fali pływowej (tidal bore).",
        "geophysicalQuestion": "Dlaczego pływy w Zatoce Fundy osiągają tak gigantyczną wysokość?",
        "geophysicalOptions": [
            "Wskutek silnego Prądu Zatokowego wpychającego wodę",
            "Z powodu podmorskiego wulkanizmu podgrzewającego dno morskie",
            "Przez przyciąganie grawitacyjne okolicznych pasm górskich",
            "Przez zjawisko rezonansu fal pływowych połączone z lejkowatym zwężaniem się i spłycaniem zatoki"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Okres drgań własnych wody w zatoce (ok. 12,5 godziny) pokrywa się idealnie z okresem pływu oceanicznego Atlantyku, wywołując zjawisko rezonansu i kumulacji fali w wąskim leju zatoki."
    },
    {
        "id": "bay_hudson",
        "category": "hydro",
        "categoryName": "Hydrografia – Morza i Zatoki",
        "name": "Zatoka Hudsona (Hudson Bay)",
        "type": "point",
        "coords": [
            60,
            -85.5
        ],
        "center": [
            60,
            -85.5
        ],
        "zoom": 5,
        "question": "Wskaż wielkie śródlądowe morze/zatokę szelfową na północy Kanady, połączoną z Atlantykiem cieśniną o tej samej nazwie:",
        "options": [
            "Morze Beauforta",
            "Zatoka Hudsona",
            "Zatoka Baffina",
            "Zatoka Świętego Wawrzyńca"
        ],
        "correct": 1,
        "explanation": "Zatoka Hudsona ma powierzchnię ok. 1,23 mln km². Zimą zamarza niemal w całości, a latem jej chłodne wody silnie obniżają temperaturę powietrza w środkowej Kanadzie.",
        "geophysicalQuestion": "Wokół Zatoki Hudsona występuje jedno z najszybszych na świecie zjawisk izostazji. Na czym ono polega?",
        "geophysicalOptions": [
            "Na powolnym dryfie Kanady w stronę bieguna północnego",
            "Na wypiętrzaniu nowo powstających wulkanów",
            "Na powolnym podnoszeniu się skorupy ziemskiej (glaciizostazja) po odciążeniu od stopniałego lądolodu laurentyjskiego",
            "Na zapadaniu się dna zatoki z powodu gromadzenia się ciężkich osadów"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Skorupa ziemska ugięta pod ciężarem 3-kilometrowego lądolodu wciąż powraca do równowagi izostatycznej – wybrzeża Zatoki Hudsona podnoszą się w tempie ponad 1 cm na rok."
    },
    {
        "id": "gulf_mexico",
        "category": "hydro",
        "categoryName": "Hydrografia – Morza i Zatoki",
        "name": "Zatoka Meksykańska",
        "type": "point",
        "coords": [
            25,
            -90
        ],
        "center": [
            25,
            -90
        ],
        "zoom": 5,
        "question": "Zaznaczony akwen to olbrzymi basen oceaniczny, z którego wypływa ciepły prąd morski ogrzewający Europę. Jest to:",
        "options": [
            "Morze Karaibskie",
            "Zatoka Kalifornijska",
            "Zatoka Hudsona",
            "Zatoka Meksykańska"
        ],
        "correct": 3,
        "explanation": "Zatoka Meksykańska gromadzi ciepłe wody tropikalne, które uchodzą przez Cieśninę Florydzką jako Prąd Zatokowy (Golfsztrom). Jest także miejscem narodzin niszczycielskich huraganów.",
        "geophysicalQuestion": "Jaką rolę odgrywa ten akwen w cyrkulacji mas powietrza i powstawaniu tornad w USA?",
        "geophysicalOptions": [
            "Zatrzymuje pasaty, blokując opady w Ameryce Północnej",
            "Generuje wyłącznie monsuny letnie",
            "Ochładza całe południe USA masami polarnymi",
            "Dostarcza wilgotne i gorące powietrze zwrotnikowe morskie (mT), które napływa na Wielkie Równiny i zderza się z suchym arktycznym powietrzem z północy"
        ],
        "geophysicalCorrect": 3,
        "geophysicalExplanation": "Brak poprzecznych pasm górskich na południu USA pozwala gorącym i skrajnie wilgotnym masom powietrza mT z Zatoki Meksykańskiej bez przeszkód wdzierać się w głąb kontynentu i zasilać burze superkomórkowe w Alei Tornad."
    },
    {
        "id": "strait_bering",
        "category": "hydro",
        "categoryName": "Hydrografia – Cieśniny",
        "name": "Cieśnina Beringa",
        "type": "point",
        "coords": [
            65.8,
            -169
        ],
        "center": [
            65.8,
            -169
        ],
        "zoom": 6,
        "question": "Wskazana cieśnina oddziela Alaskę (Przylądek Księcia Walii) od Azji (Przylądek Dieżniowa w Rosji). Jest to:",
        "options": [
            "Cieśnina Beringa",
            "Cieśnina Hudsona",
            "Cieśnina Florydzka",
            "Cieśnina Davisa"
        ],
        "correct": 0,
        "explanation": "Cieśnina Beringa (szerokość ok. 85 km, głębokość zaledwie 30-50 m) łączy Morze Beringa z Oceanem Arktycznym (Morzem Czukockim). Przebiega przez nią międzynarodowa linia zmiany daty.",
        "geophysicalQuestion": "W okresach zlodowaceń plejstoceńskich w miejscu tej cieśniny istniał tzw. pomost lądowy Beringia. Z jakiego powodu powstał?",
        "geophysicalOptions": [
            "Przez wylewy law podmorskich",
            "Wskutek obniżenia poziomu wód wszechoceanu o ponad 100 metrów z powodu uwięzienia wody w lądolodach",
            "Przez nagłe wypiętrzenie tektoniczne dna morskiego",
            "Z powodu wyschnięcia oceanu wskutek suszy polarnej"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "W epoce lodowcowej ogromne masy wody zostały uwięzione w lądolodach na lądach, co obniżyło poziom morza o ok. 120 m i odsłoniło płytki szelf Beringii, umożliwiając migrację ludzi i zwierząt z Azji do Ameryki."
    },
    {
        "id": "lake_superior",
        "category": "hydro",
        "categoryName": "Hydrografia – Jeziora",
        "name": "Jezioro Górne (Lake Superior)",
        "type": "point",
        "coords": [
            47.7,
            -87.5
        ],
        "center": [
            47.7,
            -87.5
        ],
        "zoom": 7,
        "question": "Wskazane jezioro to największe pod względem powierzchni słodkowodne jezioro świata (ok. 82,1 tys. km²). Jest to:",
        "options": [
            "Jezioro Huron",
            "Jezioro Ontario",
            "Jezioro Michigan",
            "Jezioro Górne"
        ],
        "correct": 3,
        "explanation": "Jezioro Górne jest najgłębszym (406 m) i najbardziej wysuniętym na północny zachód akwenem w kompleksie Wielkich Jezior Ameryki Północnej.",
        "geophysicalQuestion": "Jaka jest geneza misy Jeziora Górnego i pozostałych Wielkich Jezior?",
        "geophysicalOptions": [
            "Meteorytowa – ślad po uderzeniu asteroidy",
            "Wulkaniczna – zalanie wielkich kalder wulkanicznych",
            "Polodowcowo-tektoniczna: pogłębienie dawnych dolin i rowów tektonicznych przez czaszę lądolodu plejstoceńskiego",
            "Krasowa – rozpuszczenie skał gipsowych"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Wielkie Jeziora powstały w preglacjalnych obniżeniach tektonicznych, które zostały potężnie wyżłobione i pogłębione przez kolejne nasunięcia lądolodu laurentyjskiego, a następnie wypełnione wodami roztopowymi."
    },
    {
        "id": "falls_niagara",
        "category": "hydro",
        "categoryName": "Hydrografia – Osobliwości",
        "name": "Wodospad Niagara",
        "type": "point",
        "coords": [
            43.08,
            -79.07
        ],
        "center": [
            43.08,
            -79.07
        ],
        "zoom": 9,
        "question": "Wskazany słynny zespół wodospadów leży na rzece łączącej jezioro Erie z jeziorem Ontario. Jest to:",
        "options": [
            "Wodospad Yosemite",
            "Wodospad Shoshone",
            "Wodospad Montmorency",
            "Wodospad Niagara"
        ],
        "correct": 3,
        "explanation": "Niagara (ok. 51 m wysokości) zrzuca wody jeziora Erie w stronę położonego o 100 m niżej jeziora Ontario. Składa się z wodospadu Horseshoe (Podkowa – po stronie Kanady) i American Falls.",
        "geophysicalQuestion": "Jaki proces erozyjny powoduje stopniowe cofanie się progu wodospadu Niagara w górę rzeki?",
        "geophysicalOptions": [
            "Erozja wietrzna niszcząca krawędź skalną",
            "Erozja wsteczna: podcinanie miękkich łupków u podstawy progu pod twardą warstwą dolomitów",
            "Erozja boczna rozszerzająca koryto w dół rzeki",
            "Abrazja lodowcowa"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Woda spadająca z progu wyżłabia kocioł eworsyjny w miękkich łupkach pod dolomitową płytą (Niagara Escarpment); pozbawiony oparcia twardy dolomit odłamuje się, powodując erozję wsteczną progu."
    },
    {
        "id": "city_new_york",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Nowy Jork (New York City)",
        "type": "point",
        "coords": [
            40.71,
            -74
        ],
        "center": [
            40.71,
            -74
        ],
        "zoom": 8,
        "question": "Wskazana największa aglomeracja Stanów Zjednoczonych u ujścia rzeki Hudson do Atlantyku to:",
        "options": [
            "Filadelfia",
            "Waszyngton",
            "Nowy Jork",
            "Boston"
        ],
        "correct": 2,
        "explanation": "Nowy Jork liczy w zespole metropolitalnym ponad 20 mln mieszkańców. Jest globalnym centrum finansowym (Wall Street) i kulturalnym oraz siedzibą ONZ.",
        "geophysicalQuestion": "Do jakiej megastruktury urbanistycznej (megalopolis) należy Nowy Jork?",
        "geophysicalOptions": [
            "SanSan (Kalifornia)",
            "ChiPitts (Wielkie Jeziora)",
            "BosWash (Megalopolis Wschodniego Wybrzeża od Bostonu po Waszyngton)",
            "Głównego Trójkąta Kanady"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Megalopolis BosWash rozciąga się na długości ok. 800 km wzdłuż wybrzeża Atlantyku, skupiając ponad 50 milionów mieszkańców w pasie Boston-Nowy Jork-Filadelfia-Baltimore-Waszyngton."
    },
    {
        "id": "city_washington",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Waszyngton (Dystrykt Kolumbii)",
        "type": "point",
        "coords": [
            38.9,
            -77.03
        ],
        "center": [
            38.9,
            -77.03
        ],
        "zoom": 8,
        "question": "Wskazane miasto nad rzeką Potomak jest stolicą federalną Stanów Zjednoczonych (Dystrykt Kolumbii). Jest to:",
        "options": [
            "Filadelfia",
            "Nowy Jork",
            "Waszyngton (Washington, D.C.)",
            "Chicago"
        ],
        "correct": 2,
        "explanation": "Waszyngton jest autonomicznym okręgiem federalnym niebędącym częścią żadnego stanu. Mieści się tu Biały Dom, Kapitol i Sąd Najwyższy USA.",
        "geophysicalQuestion": "W jakiej strefie klimatycznej i krajobrazowej leży stolica USA?",
        "geophysicalOptions": [
            "W strefie podrównikowej",
            "W strefie klimatu podzwrotnikowego wilgotnego (Cfa) na Nizinie Atlantyckiej",
            "W strefie klimatu śródziemnomorskiego",
            "W strefie klimatu umiarkowanego chłodnego kontynentalnego"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Waszyngton leży w wilgotnym klimacie podzwrotnikowym, charakteryzującym się gorącymi, dusznymi latami pod wpływem mas powietrza zwrotnikowego morskiego z południa."
    },
    {
        "id": "city_los_angeles",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Los Angeles",
        "type": "point",
        "coords": [
            34.05,
            -118.24
        ],
        "center": [
            34.05,
            -118.24
        ],
        "zoom": 8,
        "question": "Wskazana metropolia na wybrzeżu Pacyfiku to drugie pod względem liczby ludności miasto USA. Jest to:",
        "options": [
            "San Diego",
            "Los Angeles",
            "San Francisco",
            "Seattle"
        ],
        "correct": 1,
        "explanation": "Los Angeles liczy w aglomeracji blisko 13 mln mieszkańców. Słynie z przemysłu filmowego (Hollywood), lotniczego oraz gęstej sieci autostrad.",
        "geophysicalQuestion": "Z jakim typem smogu i specyfiką klimatu zmaga się basen Los Angeles?",
        "geophysicalOptions": [
            "Z brakiem zanieczyszczeń dzięki stałym wiatrom monsunowym",
            "Ze smogiem fotochemicznym (utleniającym typu Los Angeles) w warunkach inwersji termicznej i silnego nasłonecznienia",
            "Ze smogiem kwaśnym (typu londyńskiego) wywołanym spalaniem węgla w mroźne zimy",
            "Ze zjawiskiem wiecznej mgły adwekcyjnej z Grenlandii"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Góry otaczające kotlinę Los Angeles sprzyjają inwersji temperatury, która więzi spaliny samochodowe; pod wpływem silnego promieniowania UV powstają toksyczne związki smogu fotochemicznego."
    },
    {
        "id": "city_chicago",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Chicago",
        "type": "point",
        "coords": [
            41.87,
            -87.62
        ],
        "center": [
            41.87,
            -87.62
        ],
        "zoom": 8,
        "question": "Wskazane miasto nad jeziorem Michigan to największy węzeł transportowy, kolejowy i lotniczy Środkowego Zachodu USA:",
        "options": [
            "Cleveland",
            "Chicago",
            "Minneapolis",
            "Detroit"
        ],
        "correct": 1,
        "explanation": "Chicago (\"Wietrzne Miasto\") jest trzecim pod względem ludności miastem USA, wielkim ośrodkiem giełdowym (giełda towarowa CME) i historyczną stolicą przemysłu stalowego i mięsnego.",
        "geophysicalQuestion": "Z jakiego zjawiska meteorologicznego zimą słyną miasta leżące na zawietrznych brzegach Wielkich Jezior (w tym w rejonie Chicago i Buffalo)?",
        "geophysicalOptions": [
            "Z efektu jeziora (lake-effect snow) niosącego gwałtowne, paraliżujące opady śniegu",
            "Z letnich cyklonów tropikalnych",
            "Z gorących wiatrów pasatowych",
            "Z całorocznej suszy fizjologicznej"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Gdy mroźne arktyczne powietrze przemieszcza się nad cieplejszymi wodami Wielkich Jezior, nasyca się wilgocią i po dotarciu nad chłodny ląd zrzuca ogromne masy obfitego śniegu."
    },
    {
        "id": "city_ottawa",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Ottawa",
        "type": "point",
        "coords": [
            45.42,
            -75.69
        ],
        "center": [
            45.42,
            -75.69
        ],
        "zoom": 8,
        "question": "Wskazane miasto we wschodnim Ontario nad rzeką Ottawa jest stolicą Kanady. Jest to:",
        "options": [
            "Montreal",
            "Ottawa",
            "Toronto",
            "Quebec"
        ],
        "correct": 1,
        "explanation": "Ottawa została wybrana na stolicę przez królową Wiktorię w 1857 r. jako kompromis między frankofońskim Quebecem a anglofońskim Ontario.",
        "geophysicalQuestion": "W jakiej strefie klimatycznej leży Ottawa, będąca jedną z najzimniejszych stolic świata?",
        "geophysicalOptions": [
            "W strefie arktycznej polarnej",
            "W strefie podzwrotnikowej suchej",
            "W strefie klimatu umiarkowanego chłodnego kontynentalnego z mroźnymi, śnieżnymi zimami",
            "W strefie morskiej z łagodnymi zimami bez mrozu"
        ],
        "geophysicalCorrect": 2,
        "geophysicalExplanation": "Ottawa cechuje się wyraźnym kontynentalizmem: średnia temperatura stycznia spada do -10°C, a słynny Kanał Rideau zamarza, stając się najdłuższym naturalnym lodowiskiem świata."
    },
    {
        "id": "city_toronto",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Toronto",
        "type": "point",
        "coords": [
            43.65,
            -79.38
        ],
        "center": [
            43.65,
            -79.38
        ],
        "zoom": 8,
        "question": "Wskazana metropolia nad jeziorem Ontario to największe miasto Kanady i stolica prowincji Ontario (ze słynną wieżą CN Tower):",
        "options": [
            "Toronto",
            "Montreal",
            "Calgary",
            "Vancouver"
        ],
        "correct": 0,
        "explanation": "Toronto liczy w aglomeracji (Greater Toronto Area) ponad 6 mln mieszkańców. Jest sercem finansowym i gospodarczym Kanady.",
        "geophysicalQuestion": "Nad brzegiem którego z Wielkich Jezior położone jest Toronto?",
        "geophysicalOptions": [
            "Jeziora Ontario",
            "Jeziora Górnego",
            "Jeziora Huron",
            "Jeziora Erie"
        ],
        "geophysicalCorrect": 0,
        "geophysicalExplanation": "Toronto leży na północno-zachodnim brzegu jeziora Ontario. Jezioro łagodzi klimat aglomeracji, wydłużając okres wegetacyjny w tzw. rejonie Golden Horseshoe."
    },
    {
        "id": "city_vancouver",
        "category": "cities",
        "categoryName": "Miasta & Osadnictwo",
        "name": "Vancouver",
        "type": "point",
        "coords": [
            49.28,
            -123.12
        ],
        "center": [
            49.28,
            -123.12
        ],
        "zoom": 8,
        "question": "Wskazany główny port pacyficzny Kanady w Kolumbii Brytyjskiej, otoczony fiordami i górami, to:",
        "options": [
            "Prince Rupert",
            "Victoria",
            "Seattle",
            "Vancouver"
        ],
        "correct": 3,
        "explanation": "Vancouver to największa metropolia zachodniej Kanady. Cieszy się najłagodniejszym klimatem w kraju dzięki wpływowi Pacyfiku.",
        "geophysicalQuestion": "Jaki prąd morski i masy powietrza odpowiadają za łagodne zimy i wysokie opady w Vancouver?",
        "geophysicalOptions": [
            "Masy powietrza zwrotnikowo-kontynentalnego",
            "Ciepły Prąd Północnopacyficzny i wilgotne masy powietrza polarno-morskiego (mP)",
            "Zimny Prąd Labradorski",
            "Zimny Prąd Kalifornijski"
        ],
        "geophysicalCorrect": 1,
        "geophysicalExplanation": "Ciepły Prąd Północnopacyficzny ociepla powietrze u wybrzeży Kolumbii Brytyjskiej, a napływające znad oceanu masy mP uderzają w Góry Nadbrzeżne, dając obfite opady orograficzne (nawet ponad 2000 mm rocznie)."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = PHYSICAL_MAP_FEATURES;
}
