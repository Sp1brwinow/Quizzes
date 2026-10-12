// 100 Pytań Konkursowych: Środowisko Przyrodnicze USA i Kanady
// Przygotowane zgodnie z wymaganiami Mazowieckiego Konkursu Geograficznego dla szkół podstawowych

const USA_CAN_PHYSICAL_QUESTIONS = [
    {
        "id": 1,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Główną cechą rzeźby terenu Ameryki Północnej jest tzw. południkowy układ głównych jednostek geomorfologicznych. Wskaż prawidłowe ułożenie tych jednostek idąc z zachodu na wschód:",
        "options": [
            "Appalachy → Wielkie Równiny → Kordyliery",
            "Kordyliery → Tarcza Kanadyjska → Nizina Atlantycka",
            "Wielkie Równiny → Kordyliery → Tarcza Kanadyjska",
            "Kordyliery → Wielkie Równiny i Niziny Wewnętrzne → Appalachy"
        ],
        "correct": 3,
        "explanation": "Południkowy pasowy układ krain (młode góry fałdowe Kordyliery na zachodzie, centralny pas nizin i równin oraz stare góry Appalachy na wschodzie) warunkuje cyrkulację mas powietrza na całym kontynencie."
    },
    {
        "id": 2,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Najwyższym szczytem Ameryki Północnej oraz całych Stanów Zjednoczonych jest szczyt leżący w Kordylierach na Alasce o wysokości 6190 m n.p.m. Jest to:",
        "options": [
            "Mount Whitney",
            "Mount Rainier",
            "Denali (dawniej Mount McKinley)",
            "Mount Logan"
        ],
        "correct": 2,
        "explanation": "Denali (6190 m n.p.m.) wznosi się w paśmie górskim Alaska Range. Mount Logan (5959 m n.p.m.) jest najwyższym szczytem Kanady, a Mount Whitney (4421 m) najwyższym w 48 kontynentalnych stanach USA."
    },
    {
        "id": 3,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Najwyższym szczytem Kanady i drugim pod względem wysokości szczytem Ameryki Północnej (5959 m n.p.m.) jest:",
        "options": [
            "Mount Robson (Góry Skaliste)",
            "Mount Fairweather",
            "Mount Columbia",
            "Mount Logan (Góry Świętego Eliasza w Jukonie)"
        ],
        "correct": 3,
        "explanation": "Mount Logan leży w Parku Narodowym Kluane na terenie terytorium Jukon i jest potężnym masywem pokrytym rozległymi lodowcami."
    },
    {
        "id": 4,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Najgłębsza depresja Ameryki Północnej, leżąca w Dolinie Śmierci (Badwater Basin) na terytorium stanu Kalifornia, osiąga głębokość:",
        "options": [
            "430 m p.p.m.",
            "154 m p.p.m.",
            "86 m p.p.m.",
            "28 m p.p.m."
        ],
        "correct": 2,
        "explanation": "Badwater Basin w Dolinie Śmierci leży 86 metrów poniżej poziomu morza i jest najniżej położonym oraz najsuchszym i najgorętszym miejscem w Ameryce Północnej."
    },
    {
        "id": 5,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Słynny uskok San Andreas w Kalifornii stanowi granicę pomiędzy dwiema płytami litosfery:",
        "options": [
            "Północnoamerykańską i Juan de Fuca (jest to strefa subdukcji)",
            "Kokosową i Karaibską (jest to rów oceaniczny)",
            "Północnoamerykańską i Pacyficzną (jest to uskok transformacyjny z ruchem przesuwczym)",
            "Północnoamerykańską i Nazca (jest to strefa ryftu)"
        ],
        "correct": 2,
        "explanation": "Uskok San Andreas to uskok transformacyjny o długości ok. 1200 km, gdzie płyta Pacyficzna przesuwa się poziomo na północny zachód względem płyty Północnoamerykańskiej, generując silne trzęsienia ziemi."
    },
    {
        "id": 6,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "W Górach Kaskadowych (północno-zachodnie USA) wulkany takie jak Mount St. Helens i Mount Rainier powstały w wyniku:",
        "options": [
            "Subdukcji małej płyty oceanicznej Juan de Fuca pod płytę Północnoamerykańską",
            "Działania plamy gorąca pod nieruchomą płytą litosfery",
            "Kolizji dwóch płyt kontynentalnych bez udziału skorupy oceanicznej",
            "Rozsuwania się dna morskiego w strefie ryftu oceanicznego"
        ],
        "correct": 0,
        "explanation": "Płyta Juan de Fuca wsuwa się pod płytę Północnoamerykańską (subdukcja), co powoduje topnienie skał i powstawanie wybuchowych stratowulkanów łuku kaskadowego (np. erupcja Mount St. Helens w 1980 r.)."
    },
    {
        "id": 7,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Rozległy geologiczny obszar prastarych skał krystalicznych (prekambr) otaczający Zatokę Hudsona, silnie zdarty i przekształcony przez lądolód plejstoceński, to:",
        "options": [
            "Kotlina Wielkich Jezior",
            "Tarcza Gujańska",
            "Tarcza Kanadyjska (Laurentyjska)",
            "Płaskowyż Kolumbii"
        ],
        "correct": 2,
        "explanation": "Tarcza Kanadyjska zajmuje prawie połowę powierzchni Kanady. Zdzierające działanie lądolodu odsłoniło twarde skały krystaliczne i pozostawiło tysiące polodowcowych jezior oraz cienkie, ubogie gleby."
    },
    {
        "id": 8,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Góry Appalachy na wschodzie Ameryki Północnej różnią się od Kordylierów tym, że:",
        "options": [
            "Są najwyższym pasmem górskim kontynentu z lodowcami dolinnymi",
            "Są górami młodszymi, powstałymi w orogenezie alpejskiej, o ostrych turniach i czynnych wulkanach",
            "Są górami starymi (fałdowania kaledońskie i hercyńskie), silnie zdenudowanymi, o łagodnych grzbietach i braku wulkanizmu",
            "Powstały wyłącznie na skutek uskoków w neogenie"
        ],
        "correct": 2,
        "explanation": "Appalachy to stare góry paleozoiczne (orogenezy kaledońska i hercyńska), które przez setki milionów lat uległy erozji i zrównaniu (najwyższy szczyt Mount Mitchell ma 2037 m n.p.m.)."
    },
    {
        "id": 9,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Wielki Basen (Great Basin) w zachodniej części USA to specyficzna kraina geograficzna, którą charakteryzuje:",
        "options": [
            "Dominacja gęstych lasów deszczowych strefy umiarkowanej",
            "Odpływ wód do Oceanu Arktycznego przez sieć potężnych rzek",
            "Położenie w całości poniżej poziomu morza",
            "Bezodpływowy charakter sieci rzecznej oraz obecność słonych jezior i wyschniętych basenów (playa)"
        ],
        "correct": 3,
        "explanation": "Wielki Basen leży w cieniu opadowym Sierra Nevada i Kaskad; żadna rzeka z tego obszaru nie uchodzi do oceanu, a wody parują w słonych jeziorach (np. Wielkie Jezioro Słone) lub na solniskach."
    },
    {
        "id": 10,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Płaskowyż Kolorado (Colorado Plateau) słynie na świecie z unikalnych form terenu wyciętych w poziomo zalegających warstwach piaskowców i wapieni. Są to przede wszystkim:",
        "options": [
            "Ruchome wydmy barchany o wysokości kilkuset metrów",
            "Głębokie kaniony o pionowych ścianach (canyons), ostańce stołowe (mesas) i iglice skalne (buttes)",
            "Fiordy polodowcowe i klify morskie",
            "Formy krasu podziemnego bez jakichkolwiek dolin rzecznych"
        ],
        "correct": 1,
        "explanation": "Płaskowyż Kolorado wznosił się tektonicznie, podczas gdy rzeki (zwłaszcza rzeka Kolorado) intensywnie wcinały się w podłoże, tworząc Wielki Kanion oraz formy stoliw (mesas) i ostańców (buttes)."
    },
    {
        "id": 11,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Zjawiska geotermalne w Parku Narodowym Yellowstone (gejzery, gorące źródła, fumarole) są wynikiem:",
        "options": [
            "Obecności pod płytą kontynentalną tzw. plamy gorąca (hotspot) i gigantycznej kaldery superwulkanu",
            "Subdukcji płyty Pacyficznej bezpośrednio pod stan Wyoming",
            "Tarcia płyt wzdłuż uskoku San Andreas",
            "Procesów rozkładu materii organicznej w pokładach węgla kamiennego"
        ],
        "correct": 0,
        "explanation": "Plama gorąca Yellowstone to stacjonarna komora magmowa w płaszczu Ziemi, nad którą przesuwa się płyta kontynentalna. Powstała kaldera o wymiarach ok. 55x72 km jest jednym z największych superwulkanów świata."
    },
    {
        "id": 12,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Archipelag Hawaje leżący na Oceanie Spokojnym różni się pod względem wulkanizmu od wulkanów Gór Kaskadowych tym, że:",
        "options": [
            "Wszystkie hawajskie wulkany są wygasłe i zniszczone przez lodowce",
            "Cechuje się wyłącznie gwałtownymi wybuchami popiołowymi bez wylewów lawy",
            "Powstał nad oceaniczną plamą gorąca, a lawy bazaltowe tworzą łagodne wulkany tarczowe (np. Mauna Loa, Kilauea)",
            "Powstał w rowie oceanicznym w wyniku zderzenia dwóch kontynentów"
        ],
        "correct": 2,
        "explanation": "Hawaje to klasyczny przykład łańcucha wulkanicznego nad oceaniczną plamą gorąca. Lawa bazaltowa o niskiej lepkości wylewa się spokojnie, budując rozległe wulkany tarczowe (shield volcanoes)."
    },
    {
        "id": 13,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Wapienne iglice skalne zwane \"hoodoos\", mieniące się jaskrawymi barwami pomarańczu i czerwieni, są wizytówką Parku Narodowego w stanie Utah:",
        "options": [
            "Bryce Canyon",
            "Acadia",
            "Everglades",
            "Dolina Śmierci"
        ],
        "correct": 0,
        "explanation": "W Parku Narodowym Bryce Canyon procesy zamrażania i odmarzania wody w szczelinach skalnych (wietrzenie mrozowe) wypreparowały tysiące malowniczych iglic skalnych (hoodoos)."
    },
    {
        "id": 14,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Dolina Yosemite w Kalifornii zawdzięcza swój charakterystyczny przekrój poprzeczny w kształcie litery \"U\" oraz strome granitowe ściany (np. El Capitan):",
        "options": [
            "Rozpuszczaniu skał wapiennych przez kwaśne deszcze",
            "Działalności wiatru i erozji eolicznej na pustyni",
            "Zapadlisku tektonicznemu typu rów ryftowy",
            "Erozji lodowcowej w plejstocenie, gdy jęzory lodowcowe przekształciły dolinę rzeczną w żłób polodowcowy"
        ],
        "correct": 3,
        "explanation": "Dolina Yosemite to podręcznikowy przykład żłobu lodowcowego (doliny U-kształtnej) wyciętego przez lodowiec w litych granitach batolitu Sierra Nevada."
    },
    {
        "id": 15,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Równiny Nadbrzeżne (Nizina Zatokowa i Nizina Atlantycka) w południowo-wschodnich USA charakteryzują się:",
        "options": [
            "Czynnym wulkanizmem i częstymi trzęsieniami ziemi",
            "Głębokimi fiordami wcinającymi się w lite skały bazaltowe",
            "Górzystym krajobrazem o wysokościach względnych przekraczających 1000 metrów",
            "Płaskim ukształtowaniem, osadami morskimi i rzecznymi, obecnością bagnisk, lagun oraz mierzei barierowych"
        ],
        "correct": 3,
        "explanation": "Nizina Zatokowa i Atlantycka to płaskie niziny akumulacyjne z licznymi wyspami barierowymi (Outer Banks), lagunami i bagnistymi deltami rzek (np. delta Missisipi)."
    },
    {
        "id": 16,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Wielkie Równiny (Great Plains) wznoszą się stopniowo w kierunku zachodnim od około 200 m n.p.m. nad Missisipi aż do ponad:",
        "options": [
            "3500 m n.p.m.",
            "1500–1800 m n.p.m. u podnóża Gór Skalistych",
            "500 m n.p.m.",
            "płaskiego poziomu morza"
        ],
        "correct": 1,
        "explanation": "Wielkie Równiny to rozległy płaskowyż nachylony ku wschodowi; u podnóża Gór Skalistych (np. w Denver – Mile High City) osiągają wysokość ponad 1600 m n.p.m."
    },
    {
        "id": 17,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Jaka forma ukształtowania powierzchni powstała w Arizonie około 50 000 lat temu na skutek uderzenia meteorytu niklowo-żelaznego o średnicy ok. 50 metrów?",
        "options": [
            "Wielka Błękitna Dziura",
            "Kaldera Yellowstone",
            "Krater Barringera (Meteor Crater)",
            "Basen Morza Salton"
        ],
        "correct": 2,
        "explanation": "Krater Barringera ma średnicę 1200 m i głębokość 170 m; dzięki suchemu pustynnemu klimatowi Arizony jest najlepiej zachowanym kraterem uderzeniowym na Ziemi."
    },
    {
        "id": 18,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Wypiętrzenie Gór Skalistych, które rozpoczęło się pod koniec mezozoiku i trwało w kenozoiku, określa się w geologii jako orogenezę:",
        "options": [
            "Laramijską",
            "Kaledońską",
            "Hercyńską",
            "Bajkalską"
        ],
        "correct": 0,
        "explanation": "Główne pasmo Gór Skalistych powstało podczas orogenezy laramijskiej (Laramide orogeny) między 80 a 55 milionami lat temu."
    },
    {
        "id": 19,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Wybrzeże pacyficzne Kanady (Kolumbia Brytyjska) oraz południowej Alaski odznacza się wybrzeżem typu:",
        "options": [
            "Limanowego – odciętego piaszczystymi kosami",
            "Riasowego – zalane doliny rzeczne starych gór",
            "Dalmatyńskiego – zalanego pasma wzgórz równoległego do lądu",
            "Fiordowego – głębokie, wąskie zatoki polodowcowe wcinające się stromo w góry przybrzeżne"
        ],
        "correct": 3,
        "explanation": "Wybrzeże Kolumbii Brytyjskiej i Alaski zostało silnie przeżłobione przez lodowce dolinne schodzące wprost do Pacyfiku, tworząc labirynt głębokich fiordów i tysiące wysp (Inside Passage)."
    },
    {
        "id": 20,
        "type": "choice",
        "category": "Ukształtowanie i tektonika",
        "question": "Największym jeziorem w Ameryce Północnej oraz drugim pod względem powierzchni słodkowodnym jeziorem na świecie (82,1 tys. km²) jest:",
        "options": [
            "Jezioro Górne (Lake Superior)",
            "Wielkie Jezioro Niedźwiedzie",
            "Jezioro Michigan",
            "Jezioro Huron"
        ],
        "correct": 0,
        "explanation": "Jezioro Górne na granicy USA i Kanady jest największym ze słodkowodnych jezior Ameryki Płn. (większe powierzchniowo jest tylko słone Morze Kaspijskie)."
    },
    {
        "id": 21,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Dlaczego w Ameryce Północnej fale arktycznego mrozu mogą zimą docierać aż nad Zatokę Meksykańską, a fale gorącego powietrza latem w głąb Kanady?",
        "options": [
            "Ponieważ kontynent leży wyłącznie w strefie okołorównikowej",
            "Ze względu na bardzo niskie ciśnienie nad Grenlandią",
            "Z powodu obecności zimnego Prądu Zatokowego",
            "Z powodu braku poprzecznych (równoleżnikowych) barier górskich w centralnej części kontynentu"
        ],
        "correct": 3,
        "explanation": "Południkowy układ Kordylierów i Appalachów tworzy otwarty korytarz nizinny, którym arktyczne masy powietrza z północy i zwrotnikowe z południa swobodnie przemieszczają się bez przeszkód terenowych."
    },
    {
        "id": 22,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Ciepły, suchy i porywisty wiatr typu fenowego wiejący ze wschodnich stoków Gór Skalistych na Wielkie Równiny, powodujący gwałtowne topnienie śniegu zimą, to:",
        "options": [
            "Bora",
            "Mistral",
            "Chinook",
            "Sirocco"
        ],
        "correct": 2,
        "explanation": "Chinook (zwany tradycyjnie \"pożeraczem śniegu\") to wiatr fenowy. Spadające powietrze ogrzewa się adiabatycznie o 1°C na 100 m, potrafiąc podnieść temperaturę o ponad 20°C w ciągu zaledwie kilku godzin."
    },
    {
        "id": 23,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Wybrzeże stanu Waszyngton oraz południowo-zachodniej Kanady (np. Vancouver, Olympic Peninsula) cechuje się bardzo wysokimi rocznymi sumami opadów (często >2500 mm). Jest to wynik:",
        "options": [
            "Działania zimnego Prądu Kalifornijskiego",
            "Monsunów letnich wiejących znad Arktyki",
            "Opadów orograficznych – wilgotne masy powietrza polarnomorskiego znad Pacyfiku wznoszą się na barierze gór Kordylierów",
            "Położenia w strefie pasatów okołorównikowych"
        ],
        "correct": 2,
        "explanation": "Wilgotne i ciepłe powietrze pacyficzne napotyka wysokie pasma górskie (Góry Nadbrzeżne, Góry Kaskadowe) i jest zmuszone do unoszenia się, ochładzania i skraplania (opady orograficzne), tworząc strefę lasów deszczowych strefy umiarkowanej."
    },
    {
        "id": 24,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Klimatogram stacji położonej w San Francisco (Kalifornia) charakteryzuje się łagodną, wilgotną zimą oraz suchym, chłodnym latem z częstymi mgłami. Jaki to typ klimatu?",
        "options": [
            "Umiarkowany chłodny kontynentalny",
            "Podzwrotnikowy śródziemnomorski (z chłodzącym wpływem zimnego Prądu Kalifornijskiego)",
            "Równikowy wybitnie wilgotny",
            "Zwrotnikowy skrajnie suchy pustynny"
        ],
        "correct": 1,
        "explanation": "Wybrzeże Kalifornii ma klimat podzwrotnikowy śródziemnomorski. Zimny Prąd Kalifornijski powoduje inwersję termiczną i słynne letnie mgły nad Zatoką San Francisco."
    },
    {
        "id": 25,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Klimatogram ze stacji Winnipeg (stolica prowincji Manitoba w Kanadzie) wykazuje średnią temperaturę w styczniu ok. -16°C, w lipcu ok. +20°C oraz maksimum opadów w miesiącach letnich. Wskazuje to na klimat:",
        "options": [
            "Umiarkowany chłodny wybitnie kontynentalny",
            "Polarny arktyczny",
            "Podzwrotnikowy suchy",
            "Umiarkowany morski"
        ],
        "correct": 0,
        "explanation": "Duża roczna amplituda temperatury (ponad 35°C), mroźne zimy i deszczowe lata to podręcznikowe cechy klimatu umiarkowanego o wysokim stopniu kontynentalizmu w głębi lądu."
    },
    {
        "id": 26,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Wpływ zimnego Prądu Labradorskiego na klimat północno-wschodniego wybrzeża Kanady objawia się:",
        "options": [
            "Znacznym obniżeniem temperatury powietrza, częstymi mgłami i obecnością gór lodowych dryfujących na południe",
            "Wzrostem temperatury wód i rozwojem raf koralowych wokół Nowej Fundlandii",
            "Występowaniem tropikalnych huraganów przez cały rok",
            "Całkowitym brakiem zimy i wiecznym latem"
        ],
        "correct": 0,
        "explanation": "Prąd Labradorski przynosi lodowate wody z Arktyki wzdłuż Labradoru i Nowej Fundlandii, powodując, że obszary te na szerokości geograficznej Polski mają klimat tundrowy i subarktyczny z dryfującymi górami lodowymi."
    },
    {
        "id": 27,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Ciepły Prąd Zatokowy (Golfsztrom) opływający wschodnie wybrzeże USA ma kluczowe znaczenie, ponieważ:",
        "options": [
            "Jest jedynym źródłem wody słodkiej dla Nowego Jorku",
            "Transportuje olbrzymie ilości ciepła z Zatoki Meksykańskiej na północny wschód przez Ocean Atlantycki",
            "Płynie w kierunku bieguna południowego",
            "Powoduje wysuszenie klimatu Florydy i powstanie pustyń"
        ],
        "correct": 1,
        "explanation": "Golfsztrom to potężny ciepły prąd morski, który łagodzi klimat wschodnich wybrzeży Ameryki Płn. i przemieszcza się dalej ku Europie Zachodniej jako Prąd Północnoatlantycki."
    },
    {
        "id": 28,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Zjawisko \"cienia opadowego\" (rain shadow) na zachodzie USA polega na tym, że:",
        "options": [
            "Obszary położone po wschodniej (zawietrznej) stronie pasm Sierra Nevada i Kaskad otrzymują znikome opady i stają się pustyniami",
            "Chmury zasłaniają Słońce przez ponad 300 dni w roku na pustyni Mojave",
            "Opady deszczu występują wyłącznie w nocy",
            "Lodowce rzucają cień na doliny rzeczne"
        ],
        "correct": 0,
        "explanation": "Gdy masy powietrza znad Pacyfiku przekroczą wysokie pasma górskie, opadają po ich zawietrznej (wschodniej) stronie, ogrzewając się i osuszając. Dlatego Wielki Basen, Nevada czy Dolina Śmierci są skrajnie suche."
    },
    {
        "id": 29,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Klimat Florydy i południowej części wybrzeża Zatoki Meksykańskiej klasyfikowany jest jako:",
        "options": [
            "Zwrotnikowy suchy z pustyniami piaszczystymi",
            "Zwrotnikowy i podzwrotnikowy wilgotny (z obfitymi opadami i gorącym, parnym latem)",
            "Umiarkowany chłodny kontynentalny",
            "Okołobiegunowy polarny"
        ],
        "correct": 1,
        "explanation": "Floryda leży w strefie podzwrotnikowej wilgotnej (a jej południowy kraniec w zwrotnikowej morskiej), pod stałym wpływem ciepłych wód morskich i wilgotnych mas powietrza."
    },
    {
        "id": 30,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "W miejscowości Barrow (Utqiaġvik) na północnym wybrzeżu Alaski noc polarna trwa nieprzerwanie od połowy listopada do końca stycznia. Wynika to z faktu, że miejscowość leży:",
        "options": [
            "W strefie podzwrotnikowej",
            "W strefie cienia rzucanego przez Kordyliery",
            "Za kołem podbiegunowym północnym (powyżej 66°33' N)",
            "Na południe od równika"
        ],
        "correct": 2,
        "explanation": "Zjawisko dnia i nocy polarnej występuje wyłącznie na obszarach leżących w strefach polarnych, za kołami podbiegunowymi (66°33' N i S), w wyniku nachylenia osi ziemskiej do płaszczyzny orbity."
    },
    {
        "id": 31,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Zjawisko \"efektu jezior\" (lake-effect snow) powodujące paraliżujące opady śniegu np. w mieście Buffalo (stan Nowy Jork) zachodzi, gdy:",
        "options": [
            "Ciepły Prąd Zatokowy wpływa bezpośrednio do jeziora Ontario",
            "Woda w jeziorach paruje z powodu erupcji podwodnych wulkanów",
            "Tornado zasysa wodę z jeziora i zamraża ją w stratosferze",
            "Mroźne, arktyczne powietrze przemieszcza się nad relatywnie cieplejszymi wodami Wielkich Jezior, nasyca się wilgocią i gwałtownie zrzuca śnieg na nawietrznym brzegu"
        ],
        "correct": 3,
        "explanation": "Późną jesienią i wczesną zimą woda w Wielkich Jeziorach jest wciąż ciepła. Gdy nadpływa lodowate powietrze kanadyjskie, ogrzewa się od spodu, pobiera wilgoć i tworzy gwałtowne pasma śnieżyc (lake-effect snow)."
    },
    {
        "id": 32,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Wiatr Santa Ana wiejący jesienią w południowej Kalifornii to wiatr:",
        "options": [
            "Chłodny i wilgotny wiatr przynoszący wielodniowe ulewy z Pacyfiku",
            "Arktyczna zamieć śnieżna",
            "Gorący, skrajnie suchy i porywisty, wiejący z pustyń Wielkiego Basenu w kierunku wybrzeża, drastycznie podnoszący ryzyko pożarów",
            "Morska bryza dzienna"
        ],
        "correct": 2,
        "explanation": "Santa Ana powstaje w wyniku układu wysokiego ciśnienia nad pustyniami Wielkiego Basenu; powietrze spływa w dół przez przełęcze ku Los Angeles, sprężając się, ogrzewając i rozpalając katastrofalne pożary buszu."
    },
    {
        "id": 33,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Wyspa Vancouver w Kanadzie charakteryzuje się najłagodniejszym klimatem w całym kraju, gdzie średnia temperatura najchłodniejszego miesiąca nie spada poniżej zera. Główną przyczyną jest:",
        "options": [
            "Ogrzewający wpływ mas powietrza polarnomorskiego znad Pacyfiku i ciepłego prądu Północnopacyficznego",
            "Brak jakichkolwiek wiatrów",
            "Aktywność licznych gejzerów ogrzewających atmosferę",
            "Położenie geograficzne na szerokości geograficznej Florydy"
        ],
        "correct": 0,
        "explanation": "Morski klimat wybrzeża Pacyfiku sprawia, że Victoria i Vancouver mają zimy niemal bezśnieżne, w przeciwieństwie do reszty Kanady leżącej na tej samej szerokości geograficznej."
    },
    {
        "id": 34,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Strefa klimatu umiarkowanego chłodnego w Kanadzie i północnych USA charakteryzuje się opadami rocznymi rzędu 400–800 mm. W której porze roku przypada tam maksimum opadowe?",
        "options": [
            "Wczesną wiosną podczas topnienia śniegów",
            "W zimie (wyłącznie w postaci gradu)",
            "W lecie (w wyniku intensywniejszej konwekcji termicznej)",
            "Opady w klimacie kontynentalnym nie występują wcale"
        ],
        "correct": 2,
        "explanation": "W klimacie kontynentalnym strefy umiarkowanej maksimum opadów przypada na miesiące letnie (czerwiec–sierpień), gdy nagrzane podłoże sprzyja wznoszeniu powietrza i powstawaniu chmur kłębiasto-deszczowych."
    },
    {
        "id": 35,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Gdzie w Ameryce Północnej odnotowano absolutny rekord najwyższej temperatury powietrza w historii pomiarów na Ziemi (+56,7°C w lipcu 1913 r.)?",
        "options": [
            "Las Vegas (Nevada)",
            "Furnace Creek w Dolinie Śmierci (Kalifornia)",
            "Key West (Floryda)",
            "Phoenix (Arizona)"
        ],
        "correct": 1,
        "explanation": "W Furnace Creek w Dolinie Śmierci (depresja otoczona nagimi górami, zatrzymującymi gorące powietrze niczym w piecu) zarejestrowano oficjalny światowy rekord temperatury +56,7°C (134°F)."
    },
    {
        "id": 36,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Który z poniższych czynników decyduje o powstawaniu pustyń Sonora i Mojave w południowo-zachodnich USA?",
        "options": [
            "Stałe panowanie wyżów zwrotnikowych oraz orograficzny cień opadowy pasm górskich Sierra Nevada i Peninsular Ranges",
            "Zaleganie wiecznej zmarzliny",
            "Przepływ ciepłego Prądu Zatokowego",
            "Monsunowy rozkład opadów atmosferycznych"
        ],
        "correct": 0,
        "explanation": "Pustynie te leżą pod wpływem zwrotnikowej strefy wysokiego ciśnienia (zstępujące, suche masy powietrza) oraz dodatkowo w głębokim cieniu opadowym gór zatrzymujących wilgoć pacyficzną."
    },
    {
        "id": 37,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Zjawisko wiru polarnego (Polar Vortex), przynoszące w USA i Kanadzie fale mrozów poniżej -30°C i paraliż komunikacyjny, wiąże się z:",
        "options": [
            "Przesunięciem Ziemi w peryhelium",
            "Wzrostem stężenia ozonu w troposferze nad Meksykiem",
            "Wybuchem podwodnego wulkanu na Karaibach",
            "Osłabieniem i meandrowaniem prądu strumieniowego (Jet Stream), co pozwala masom mroźnego powietrza arktycznego spłynąć głęboko na południe"
        ],
        "correct": 3,
        "explanation": "Gdy okołobiegunowy prąd strumieniowy zwalnia i faluje, jęzory arktycznego mrozu (Polar Vortex) wdzierają się głęboko nad Środkowy Zachód i wschodnie wybrzeże USA."
    },
    {
        "id": 38,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Klimatogram dla Nowego Jorku charakteryzuje się stosunkowo równomiernym rozkładem opadów w ciągu całego roku (ok. 80–110 mm miesięcznie). Główną tego przyczyną jest:",
        "options": [
            "Położenie w strefie równikowej",
            "Działanie monsunu letniego i zimowego",
            "Wpływ zimnego Prądu Peruańskiego",
            "Ciągły dopływ wilgotnego powietrza polarnomorskiego i zwrotnikowomorskiego znad Oceanu Atlantyckiego"
        ],
        "correct": 3,
        "explanation": "Nowy Jork leży w strefie umiarkowanej ciepłej morskiej/przejściowej, gdzie cyklicznie przemieszczające się niże atlantyckie zapewniają opady deszczu i śniegu przez wszystkie 12 miesięcy."
    },
    {
        "id": 39,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "W kanadyjskim terytorium Nunavut na Ziemi Baffina opady roczne rzadko przekraczają 250 mm. Obszar ten pod względem wilgotnościowym zalicza się do:",
        "options": [
            "Ligi lasów równikowych",
            "Pustyń polarnych (arktycznych)",
            "Sawanny wilgotnej",
            "Wilgotnej strefy śródziemnomorskiej"
        ],
        "correct": 1,
        "explanation": "Bardzo niskie temperatury uniemożliwiają powietrzu nasycenie parą wodną, a stałe wyże arktyczne hamują konwekcję – obszary te są pod względem sumy opadów prawdziwymi pustyniami polarnymi."
    },
    {
        "id": 40,
        "type": "choice",
        "category": "Klimatologia i masy powietrza",
        "question": "Dlaczego wschodnie wybrzeże Kanady (Nowa Fundlandia) na szerokości geograficznej 48°N jest znacznie chłodniejsze niż zachodnie wybrzeże Europy (np. Francja na tej samej szerokości)?",
        "options": [
            "W Nowej Fundlandii noc polarna trwa przez 6 miesięcy",
            "Nową Fundlandię opływa zimny Prąd Labradorski, podczas gdy Francję ociepla Prąd Północnoatlantycki",
            "We Francji występuje wulkanizm tarczowy",
            "Ziemia w Kanadzie otrzymuje o połowę mniej promieniowania słonecznego"
        ],
        "correct": 1,
        "explanation": "Jest to klasyczny przykład wpływu prądów morskich: zimny Prąd Labradorski dramatycznie wychładza wschodnią Kanadę, a ciepły Golfsztrom ogrzewa Europę Zachodnią na tej samej szerokości geograficznej."
    },
    {
        "id": 41,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "W tzw. Alei Tornad (Tornado Alley) w USA najczęstszą przyczyną powstawania gwałtownych trąb powietrznych jest zderzenie trzech mas powietrza:",
        "options": [
            "Trzech mas ciepłego powietrza zwrotnikowego bez udziału mas chłodnych",
            "Wilgotnego znad Pacyfiku + mroźnego znad Syberii + równikowego z Brazylii",
            "Ciepłego i wilgotnego znad Zatoki Meksykańskiej + zimnego i suchego z Kanady + gorącego i suchego z wyżyn Meksyku",
            "Wiatru halnego z pasatami atlantyckimi"
        ],
        "correct": 2,
        "explanation": "Gwałtowne burze superkomórkowe rodzą się na Wielkich Równinach, gdy ciepłe i wilgotne powietrze z Zatoki Meksykańskiej spotyka się z suchym powietrzem z Kordylierów i chłodnym frontem arktycznym znad Kanady."
    },
    {
        "id": 42,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Do pomiaru siły i prędkości wiatru w tornadach na podstawie wyrządzonych zniszczeń stosuje się obecnie skalę:",
        "options": [
            "Beauforta",
            "EF (Enhanced Fujita – Skalę Fujity)",
            "Saffira-Simpsona",
            "Richtera"
        ],
        "correct": 1,
        "explanation": "Ulepszona skala Fujity (od EF0 do EF5) ocenia siłę tornad na podstawie skali zniszczeń infrastruktury i szacowanej prędkości wiatru w leju (w EF5 wiatr przekracza 322 km/h)."
    },
    {
        "id": 43,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Huragany (cyklony tropikalne) uderzające w południowo-wschodnie wybrzeże USA (np. Katrina, Ian) powstają nad:",
        "options": [
            "Lądem Wielkich Równin w wyniku nagrzania skał",
            "Ciepłymi wodami Oceanu Atlantyckiego i Morza Karaibskiego o temperaturze powierzchniowej powyżej 26,5°C",
            "Zimnymi wodami Prądu Kalifornijskiego",
            "Lodowatymi wodami Zatoki Hudsona"
        ],
        "correct": 1,
        "explanation": "Huragany czerpią energię z parowania nagrzanych wód oceanicznych (temperatura wody musi przekraczać 26,5°C na głębokość kilkudziesięciu metrów); w kontakcie z chłodniejszą wodą lub lądem szybko słabną."
    },
    {
        "id": 44,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "W \"oku huraganu\" (centralnej części cyklonu tropikalnego) panują specyficzne warunki atmosferyczne:",
        "options": [
            "Temperatura spada poniżej -20°C",
            "Ciśnienie jest najniższe, wiatr niemal całkowicie cichnie, a niebo często przejaśnia się",
            "Ciśnienie osiąga rekordowo wysoką wartość 1040 hPa",
            "Występuje najsilniejszy huraganowy wiatr i ściana ulewnego deszczu"
        ],
        "correct": 1,
        "explanation": "W oku cyklonu panuje zstępujący ruch powietrza, co powoduje zanik chmur i ciszę wiatrową; najgroźniejszy wiatr i opady szaleją w tzw. ścianie oka (eyewall) tuż wokół centrum."
    },
    {
        "id": 45,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Który stan USA odnotowuje statystycznie największą liczbę uderzeń huraganów atlantyckich?",
        "options": [
            "Kalifornia",
            "Waszyngton",
            "Nowy Jork",
            "Floryda"
        ],
        "correct": 3,
        "explanation": "Floryda, ze względu na swoje półwyspowe położenie między ciepłymi wodami Atlantyku a Zatoką Meksykańską, jest stanem najbardziej narażonym na uderzenia huraganów w USA."
    },
    {
        "id": 46,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Katastrofalne pożary lasów (wildfires) w Kanadzie i na zachodzie USA wybuchają najczęściej w okresie letnim na skutek:",
        "options": [
            "Wylewów lawy ze wszystkich wulkanów Kordylierów",
            "Długotrwałych fal upałów, suszy glebowej, uderzeń suchych piorunów oraz podsycającego działania porywistych wiatrów",
            "Topnienia wiecznej zmarzliny",
            "Wzrostu poziomu wód gruntowych"
        ],
        "correct": 1,
        "explanation": "Susza, wysoka temperatura i wysuszona ściółka iglasta sprawiają, że wyładowania atmosferyczne (tzw. suche burze) oraz nieostrożność człowieka wywołują gigantyczne pożary obejmujące miliony hektarów tajgi."
    },
    {
        "id": 47,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Które miasto w USA zostało w 2005 roku zalane w 80% przez wody jeziora Pontchartrain na skutek przerwania wałów przeciwpowodziowych podczas huraganu Katrina?",
        "options": [
            "Nowy Orlean",
            "Atlanta",
            "Houston",
            "Miami"
        ],
        "correct": 0,
        "explanation": "Nowy Orlean leży w dużej mierze w depresji poniżej poziomu morza i rzeki Missisipi; spiętrzone przez huragan Katrina fale sztormowe przerwały wały, powodując jedną z największych katastrof w historii USA."
    },
    {
        "id": 48,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Gwałtowna zimowa burza śnieżna charakteryzująca się wiatrem powyżej 56 km/h, temperaturą poniżej zera i widocznością spadającą poniżej 400 m to w Ameryce Północnej:",
        "options": [
            "Tornado",
            "Blizzard",
            "Haboob",
            "Sirocco"
        ],
        "correct": 1,
        "explanation": "Blizzard to oficjalny termin meteorologiczny dla potężnej zamieci śnieżnej sparaliżującej życie na Wielkich Równinach, w Kanadzie i na wschodnim wybrzeżu."
    },
    {
        "id": 49,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Jak mieszkańcy miast w Alei Tornad w USA zabezpieczają się przed bezpośrednim uderzeniem żywiołu?",
        "options": [
            "Wyjeżdżają na stałe na Alaskę na cały okres wiosny",
            "Budują podziemne schrony przeciwburzowe (storm shelters), instalują syreny alarmowe i korzystają z ostrzeżeń radarów dopplerowskich",
            "Wznoszą domy wyłącznie z gliny i słomy",
            "Budują wysokie tamy na rzekach"
        ],
        "correct": 1,
        "explanation": "W Alei Tornad domy wyposaża się w specjalnie wzmocnione schrony (często podziemne lub wylewane z betonu *safe rooms*), a sieć radarów dopplerowskich pozwala nadać ostrzeżenie kilkanaście minut przed uderzeniem leja."
    },
    {
        "id": 50,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Wielka powódź na rzece Missisipi w 1927 i 1993 roku była spowodowana:",
        "options": [
            "Zatkaniem delty przez lód morski z Arktyki",
            "Pęknięciem zapory Hoovera",
            "Tsunami wywołanym przez trzęsienie ziemi na Hawajach",
            "Długotrwałymi, intensywnymi opadami deszczu na obszarze całego dorzecza połączonymi z wiosennym topnieniem śniegów"
        ],
        "correct": 3,
        "explanation": "Dorzecze Missisipi obejmuje ponad 40% powierzchni kontynentalnych USA; zbieg obfitych deszczów i roztopów w dorzeczach Missouri i Ohio powoduje wezbrania stulecia zalewające tysiące kilometrów kwadratowych nizin."
    },
    {
        "id": 51,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Katastrofalne zjawisko tzw. \"Dust Bowl\" (burze pyłowe) na Wielkich Równinach w latach 30. XX wieku wynikło z:",
        "options": [
            "Zalania terenu przez wody oceaniczne",
            "Wybuchu wulkanu Mount St. Helens",
            "Wielkiej suszy połączonej z zaoraniem naturalnej darni trawiastej i rabunkową gospodarką rolną (erozja wietrzna)",
            "Spadku meteorytu w Kansas"
        ],
        "correct": 2,
        "explanation": "Zaoranie naturalnej trawy prerii pod uprawę pszenicy pozbawiło glebę korzeni; podczas wieloletniej suszy i silnych wiatrów miliony ton żyznej gleby uniosły się w powietrze, zmuszając setki tysięcy ludzi do migracji."
    },
    {
        "id": 52,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Do pomiaru siły huraganów (cyklonów tropikalnych) w oparciu o stałą prędkość wiatru służy 5-stopniowa skala:",
        "options": [
            "Fujity",
            "Torro",
            "Saffira-Simpsona",
            "Mercallego"
        ],
        "correct": 2,
        "explanation": "Skala Saffira-Simpsona klasyfikuje huragany od kategorii 1 (od 119 km/h) do niszczycielskiej kategorii 5 (wiatr stały powyżej 252 km/h)."
    },
    {
        "id": 53,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Trzęsienie ziemi w San Francisco w 1906 roku, które zniszczyło miasto, było spowodowane nagłym przesunięciem mas skalnych wzdłuż:",
        "options": [
            "Uskoku San Andreas",
            "Kaskadowego łuku wulkanicznego",
            "Ryftu Rio Grande",
            "Rowu Aleuckiego"
        ],
        "correct": 0,
        "explanation": "Uskok San Andreas pękł na odcinku prawie 470 km z przesunięciem dochodzącym do 6 metrów, wywołując wstrząs o magnitudzie ok. 7,9 i potężny pożar miasta."
    },
    {
        "id": 54,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Zjawisko zatorów lodowych na rzekach północnej Kanady (np. rzeka Mackenzie) powodujące gwałtowne powodzie zatorowe wynika z faktu, że:",
        "options": [
            "Rzeki zasilane są wyłącznie przez gorące źródła",
            "Rzeki płyną z południa na północ – lód taje najpierw w górnym biegu, a zablokowany jest przez wciąż zamarznięte ujście",
            "Woda w rzekach zamarza od dna ku powierzchni",
            "Wszystkie rzeki w Kanadzie płyną pod ziemią"
        ],
        "correct": 1,
        "explanation": "Rzeka Mackenzie płynie ku północy; wiosną na południu rzeka już rusza, a masy kry spływają w kierunku północnym, gdzie rzeka wciąż tkwi w grubym lodzie, tworząc spiętrzenia zatorowe i powodzie."
    },
    {
        "id": 55,
        "type": "choice",
        "category": "Zjawiska ekstremalne",
        "question": "Zjawisko \"derecho\" występujące latem w centralnych i wschodnich stanach USA to:",
        "options": [
            "Rozległa, długotrwała i szybko przemieszczająca się burza wiatrowa niosąca niszczycielskie proste wichury na dystansie setek kilometrów",
            "Zjawisko zorzy polarnej",
            "Okres całkowitego zaniku wiatru trwający miesiąc",
            "Pojedyncza trąba wodna na Pacyfiku"
        ],
        "correct": 0,
        "explanation": "Derecho to groźny układ mezoskalowy przynoszący gwałtowny szkwał wiatrowy (często >150 km/h) na pasie o długości ponad 400 km, łamiący miliony drzew i niszczący sieci energetyczne."
    },
    {
        "id": 56,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Rzeka Missisipi wraz ze swoim najdłuższym dopływem Missouri tworzy czwarty pod względem długości system rzeczny świata (ok. 6275 km). Uchodzi ona do:",
        "options": [
            "Zatoki Meksykańskiej (tworząc rozległą deltę palczastą)",
            "Zatoki Hudsona",
            "Morza Arktycznego",
            "Oceanu Spokojnego"
        ],
        "correct": 0,
        "explanation": "Missisipi uchodzi do Zatoki Meksykańskiej na południe od Nowego Orleanu, budując klasyczną deltę palczastą (bird-foot delta) wysuniętą w głąb wód zatoki."
    },
    {
        "id": 57,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Najdłuższa rzeka Kanady, wypływająca z Wielkiego Jeziora Niewolniczego i uchodząca deltą do Morza Beauforta (Ocean Arktyczny), to:",
        "options": [
            "Rzeka Fraser",
            "Rzeka Nelson",
            "Rzeka św. Wawrzyńca",
            "Rzeka Mackenzie (o długości 4241 km w systemie z Peace i Finlay)"
        ],
        "correct": 3,
        "explanation": "Mackenzie to największa i najdłuższa rzeka Kanady, odprowadzająca wody z ogromnego obszaru subarktycznego na północny zachód."
    },
    {
        "id": 58,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Rzeka św. Wawrzyńca (Saint Lawrence River) pełni fundamentalną rolę gospodarczą w Ameryce Północnej, ponieważ:",
        "options": [
            "Uchodzi do Zatoki Meksykańskiej",
            "Jest jedyną rzeką zaporową produkującą energię dla całego Teksasu",
            "Płynie przez pustynie południowej Kalifornii",
            "Stanowi wraz z kanałami i śluzami głębokowodną Drogę Wodną Wielkich Jezior, łącząc wnętrze kontynentu z Atlantykiem"
        ],
        "correct": 3,
        "explanation": "Droga Wodna Świętego Wawrzyńca (Saint Lawrence Seaway) otwarta w 1959 roku umożliwia statkom oceanicznym dopłynięcie z Atlantyku aż do portów w Chicago czy Duluth nad Jeziorem Górnym."
    },
    {
        "id": 59,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Pięć Wielkich Jezior Ameryki Północnej (Górne, Huron, Michigan, Erie, Ontario) ma genezę:",
        "options": [
            "Wulkaniczną (są to kaldery po superwulkanach)",
            "Polodowcowo-tektoniczną (powstały w rynnach wyżłobionych przez lądolód plejstoceński w strefach osłabień skorupy)",
            "Krasową (zapadliska po rozpuszczonym gipsie)",
            "Meteorytową (kratery po roju meteorytów)"
        ],
        "correct": 1,
        "explanation": "Miski Wielkich Jezior zostały pogłębione i wymodelowane przez lądolód laurentyjski, a po jego ustąpieniu wypełniły się wodami roztopowymi około 10 000 lat temu."
    },
    {
        "id": 60,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Wodospad Niagara leży na rzece Niagara łączącej dwa Wielkie Jeziora:",
        "options": [
            "Jezioro Michigan i Jezioro Erie",
            "Jezioro Erie i Jezioro Ontario",
            "Jezioro Huron i Jezioro Ontario",
            "Jezioro Górne i Jezioro Huron"
        ],
        "correct": 1,
        "explanation": "Woda spływa z wyżej położonego jeziora Erie (174 m n.p.m.) do niższego jeziora Ontario (75 m n.p.m.), pokonując 99-metrową różnicę poziomów m.in. na progach wodospadów Horseshoe i American Falls."
    },
    {
        "id": 61,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Rzeka Kolorado (Colorado River) na południowym zachodzie USA uchodziła historycznie do:",
        "options": [
            "Zatoki San Francisco",
            "Zatoki Kalifornijskiej (Morza Corteza), lecz obecnie jej wody są niemal w całości pobierane do nawadniania i celów komunalnych",
            "Zatoki Meksykańskiej",
            "Wielkiego Jeziora Słonego"
        ],
        "correct": 1,
        "explanation": "Intensywny pobór wody dla wielkich miast (Las Vegas, Los Angeles, Phoenix) i rolnictwa w Arizonie i Kalifornii sprawia, że rzeka Kolorado rzadko dociera do swojego ujścia w Meksyku."
    },
    {
        "id": 62,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Potężna zapora Hoovera (Hoover Dam) wybudowana w latach 30. XX wieku spiętrza wody rzeki Kolorado, tworząc sztuczny zbiornik:",
        "options": [
            "Jezioro Winnebago",
            "Jezioro Pontchartrain",
            "Jezioro Mead (Lake Mead)",
            "Jezioro Powell"
        ],
        "correct": 2,
        "explanation": "Zapora Hoovera na granicy Nevady i Arizony utworzyła jezioro Mead – kluczowy rezerwuar wody pitnej i energii wodnej dla południowego zachodu USA."
    },
    {
        "id": 63,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Wielkie Jezioro Słone (Great Salt Lake) w stanie Utah jest pozostałością po gigantycznym plejstoceńskim jeziorze polodowcowym o nazwie:",
        "options": [
            "Jezioro Bonneville",
            "Jezioro Lahontan",
            "Jezioro Missoula",
            "Jezioro Agassiz"
        ],
        "correct": 0,
        "explanation": "Jezioro Bonneville pokrywało w plejstocenie dużą część Utah. Po ociepleniu klimatu woda wyparowała, a minerały skoncentrowały się w bezodpływowym Wielkim Jeziorze Słonym i otaczających solniskach Bonneville Salt Flats."
    },
    {
        "id": 64,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Rzeka Kolumbia (Columbia River) na północnym zachodzie USA i w Kanadzie ma ogromne znaczenie ze względu na:",
        "options": [
            "Fakt, że nie ma w niej żadnych ryb",
            "Przepływ przez środek pustyni Dolina Śmierci",
            "Najcieplejszą wodę ze wszystkich rzek na świecie",
            "Największy potencjał hydroenergetyczny w Ameryce Północnej (m.in. Zapora Grand Coulee)"
        ],
        "correct": 3,
        "explanation": "Rzeka Kolumbia ma duży spadek i olbrzymie zasoby wodne, dzięki czemu wybudowane na niej kaskady hydroelektrowni (Grand Coulee, Bonneville) dostarczają ogromnych ilości czystej energii."
    },
    {
        "id": 65,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Wielkie Jezioro Niedźwiedzie (Great Bear Lake) i Wielkie Jezioro Niewolnicze (Great Slave Lake) w Kanadzie leżą na granicy:",
        "options": [
            "Wyżyny Kolorado i Wielkich Równin",
            "Tarczy Kanadyjskiej i Nizin Wewnętrznych",
            "Gór Skalistych i Pacyfiku",
            "Niziny Zatokowej i Florydy"
        ],
        "correct": 1,
        "explanation": "Oba te gigantyczne jeziora leżą w Terytoriach Północno-Zachodnich na krawędzi Tarczy Kanadyjskiej i należą do najgłębszych i najczystszych jezior polodowcowych świata."
    },
    {
        "id": 66,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Zjawisko wieloletniej zmarzliny (permafrostu) obejmujące ponad połowę terytorium Kanady i znaczną część Alaski sprawia, że:",
        "options": [
            "Ziemia nadaje się idealnie pod uprawę kukurydzy przez cały rok",
            "Budynki i rurociągi (np. Rurociąg Trans-Alaska) muszą być budowane na specjalnych palach termicznych, by ciepło budowli nie roztopiło gruntu",
            "Woda w rzekach nigdy nie zamarza",
            "Nie występują tam żadne zjawiska mrozowe"
        ],
        "correct": 1,
        "explanation": "Rozmarzanie zmarzliny powoduje osiadanie gruntu i zjawisko termokrasu, dlatego rurociągi i domy posadawia się na palach z radiatorami chłodzącymi grunt."
    },
    {
        "id": 67,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Zlewisko którego oceanu zajmuje największą powierzchnię na terytorium Kanady?",
        "options": [
            "Oceanu Arktycznego i Zatoki Hudsona",
            "Morza Śródziemnego",
            "Zatoki Kalifornijskiej",
            "Oceanu Indyjskiego"
        ],
        "correct": 0,
        "explanation": "Zatoka Hudsona i Morze Arktyczne zbierają wody z ponad połowy terytorium Kanady przez potężne systemy rzeczne (Mackenzie, Nelson, Churchill)."
    },
    {
        "id": 68,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Rzeka Jukon (Yukon River) uchodzi potężną deltą do:",
        "options": [
            "Zatoki Hudsona",
            "Zatoki Meksykańskiej",
            "Morza Beringa",
            "Oceanu Atlantyckiego"
        ],
        "correct": 2,
        "explanation": "Rzeka Jukon o długości 3185 km przepływa przez terytorium Jukon w Kanadzie i całą centralną Alaskę, uchodząc do Morza Beringa."
    },
    {
        "id": 69,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "W Górach Skalistych na granicy prowincji Alberta i Kolumbia Brytyjska znajduje się słynne Pole Lodowe Columbia (Columbia Icefield). Cechuje się ono tym, że:",
        "options": [
            "Leży poniżej poziomu morza",
            "Jest jedynym lodowcem na Ziemi, który płonie pod wpływem słońca",
            "Jego wody roztopowe spływają do trzech różnych oceanów: Spokojnego, Arktycznego oraz Atlantyckiego (przez Zatokę Hudsona)",
            "Zasila wyłącznie rzekę Missisipi"
        ],
        "correct": 2,
        "explanation": "Columbia Icefield leży na potrójnym dziale wodnym Ameryki Płn. (Snow Dome) – zasilając rzeki Columbia (Pacyfik), Athabasca/Mackenzie (Arktyka) i Saskatchewan (Zatoka Hudsona / Atlantyk)."
    },
    {
        "id": 70,
        "type": "choice",
        "category": "Hydrologia i zlodowacenie",
        "question": "Główny Dział Wodny Ameryki (Continental Divide of the Americas) przebiega wzdłuż grzbietów:",
        "options": [
            "Appalachów",
            "Gór Skalistych (Kordylierów)",
            "Tarczy Kanadyjskiej",
            "Gór Kaskadowych"
        ],
        "correct": 1,
        "explanation": "Kontynentalny Dział Wodny biegnie wzdłuż grani Gór Skalistych, rozdzielając zlewiska rzek uchodzących do Pacyfiku od zlewisk uchodzących do Atlantyku i Arktyki."
    },
    {
        "id": 71,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Północne obszary Kanady i Alaski porasta tundra. Wśród roślinności tundrowej dominują:",
        "options": [
            "Gęste lasy dębowe i bukowe z lianami",
            "Wysokie trawy preriowe dochodzące do 3 metrów wysokości",
            "Kaktusy saguaro i agawy",
            "Mchy, porosty, krzewinki (np. borówka bagienna) oraz karłowate brzozy i wierzby polarne"
        ],
        "correct": 3,
        "explanation": "Krótki okres wegetacyjny, wieczna zmarzlina i silne wiatry uniemożliwiają rozwój drzew; roślinność tundry jest niska, płożąca i odporna na mrozy."
    },
    {
        "id": 72,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Największym biomem leśnym w Kanadzie i na Alasce jest tajga (borealny las iglasty). Główne gatunki drzew budujące tajgę to:",
        "options": [
            "Palmy kokosowe i namorzyny",
            "Eukaliptusy, baobaby i akacje",
            "Dąb szypułkowy, grab, buk i kasztanowiec",
            "Świerk czarny, świerk biały, modrzew amerykański, sosna Banksa oraz jodła balsamiczna"
        ],
        "correct": 3,
        "explanation": "Kanadyjski las borealny (tajga) tworzą iglaste drzewa szpilkowe przystosowane do długich, mroźnych zim i kwaśnych gleb bielicowych."
    },
    {
        "id": 73,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Gleby wykształcone pod borealnymi lasami iglastymi tajgi, charakteryzujące się jasnym poziomem wymywania, małą zawartością próchnicy i kwaśnym odczynem, to:",
        "options": [
            "Mady rzeczne",
            "Czarne ziemie",
            "Gleby bielicowe (bielice)",
            "Czarnoziemy"
        ],
        "correct": 2,
        "explanation": "Powolny rozkład igliwia i intensywne przemywanie przez kwaśne roztwory wodne wypłukuje związki żelaza i glinu, tworząc ubogi, jasny poziom bielicowania."
    },
    {
        "id": 74,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Formacja roślinna Wielkich Równin w Ameryce Północnej, odpowiadająca eurazjatyckiemu stepowi, to:",
        "options": [
            "Preria",
            "Pampa",
            "Sawanna",
            "Pustynia piaszczysta"
        ],
        "correct": 0,
        "explanation": "Preria to północnoamerykański odpowiednik stepu, zdominowany przez traworośla. W zależności od opadów wyróżnia się prerię wysokotrawiastą na wschodzie i niskotrawiastą na suchym zachodzie."
    },
    {
        "id": 75,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Najbardziej urodzajnymi glebami w Ameryce Północnej, powstałymi pod bogatą roślinnością trawiastą prerii przy udziale dużej biomasy i głębokich korzeni, są:",
        "options": [
            "Czarnoziemy preriowe (molisole) i gleby kasztanowe",
            "Lateryty",
            "Pustynne szaroziemy i burozemy",
            "Gleby tundrowe glejowe"
        ],
        "correct": 0,
        "explanation": "Czarne ziemie prerii i czarnoziemy mają miąższy poziom próchniczny bogaty w składniki pokarmowe, stanowiąc serce rolniczego \"pasa kukurydzianego i pszenicznego\" (Corn Belt, Wheat Belt)."
    },
    {
        "id": 76,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Roślinność twardolistna typu śródziemnomorskiego, występująca w strefie nadmorskiej Kalifornii, składająca się z wiecznie zielonych, gęstych, kolczastych zarośli krzewiastych, nosi lokalną nazwę:",
        "options": [
            "Pampa",
            "Selwa",
            "Makia",
            "Chaparral"
        ],
        "correct": 3,
        "explanation": "Chaparral to kalifornijski odpowiednik śródziemnomorskiej makii; krzewy mają skórzaste liście pokryte woskiem, ograniczające parowanie podczas bezdeszczowego lata."
    },
    {
        "id": 77,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Mamutowiec olbrzymi (Sequoiadendron giganteum) oraz sekwoja wieczniezielona (Sequoia sempervirens) to najpotężniejsze i najwyższe drzewa świata. Ich naturalnym siedliskiem jest:",
        "options": [
            "Równiny Teksasu",
            "Pustynia Sonora w Arizonie",
            "Bagniska Everglades na Florydzie",
            "Góry Sierra Nevada oraz wilgotny pas wybrzeża Pacyfiku w północnej Kalifornii"
        ],
        "correct": 3,
        "explanation": "Sekwoje rosną naturalnie wyłącznie w wąskim, wilgotnym pasie mgieł oceanicznych wybrzeża Kalifornii, a mamutowce olbrzymie (General Sherman) na zachodnich stokach Sierra Nevada."
    },
    {
        "id": 78,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Gigantyczny kaktus saguaro (Carnegiea gigantea), osiągający wysokość kilkunastu metrów i magazynujący tony wody w łodydze, jest symbolem pustyni:",
        "options": [
            "Sahara w Afryce",
            "Gobi",
            "Wielka Pustynia Piaszczysta",
            "Sonora w Arizonie"
        ],
        "correct": 3,
        "explanation": "Kaktus saguaro rośnie endemicznie na pustyni Sonora w południowej Arizonie i północnym Meksyku, będąc chronionym m.in. w Parku Narodowym Saguaro."
    },
    {
        "id": 79,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Które z poniższych zwierząt jest największym roślinożercą lądowym Ameryki Północnej, niegdyś występującym w milionowych stadach na Wielkich Równinach, niemal wytępionym w XIX wieku?",
        "options": [
            "Bizon amerykański (Bison bison)",
            "Puma",
            "Karibu",
            "Niedźwiedź grizli"
        ],
        "correct": 0,
        "explanation": "Bizon amerykański był podstawą egzystencji rdzennych plemion Indian prerii. W XIX wieku z populacji liczącej 30–60 milionów ocalało zaledwie kilkaset osobników (ocalony m.in. w Yellowstone)."
    },
    {
        "id": 80,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Zwierzęciem endemicznym dla arktycznych obszarów Kanady i Grenlandii, pokrytym wyjątkowo gęstą, długą sierścią chroniącą przed mrozami -50°C, jest:",
        "options": [
            "Wół piżmowy (Ovibos moschatus)",
            "Pancernik",
            "Kojot",
            "Bizon preriowy"
        ],
        "correct": 0,
        "explanation": "Wół piżmowy to relikt epoki lodowcowej, doskonale przystosowany do skrajnych warunków tundry arktycznej dzięki wełnistemu podszerstkowi qiviut."
    },
    {
        "id": 81,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Drzewo będące narodowym symbolem Kanady, którego liść znajduje się na fladze państwowej, a pień służy do pozyskiwania tradycyjnego słodkiego syropu, to:",
        "options": [
            "Daglezja zielona",
            "Klon cukrowy (Acer saccharum)",
            "Dąb czerwony",
            "Świerk czarny"
        ],
        "correct": 1,
        "explanation": "Klon cukrowy rośnie obficie w lasach liściastych wschodniej Kanady (Quebec, Ontario); wczesną wiosną z pni wytacza się sok gotowany na syrop klonowy."
    },
    {
        "id": 82,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Unikalną cechą ekosystemu bagien Everglades w południowej Florydzie jest to, że współwystępują tam naturalnie dwa gatunki wielkich gadów drapieżnych:",
        "options": [
            "Krokodyl nilowy oraz anakonda zielona",
            "Waran z Komodo oraz żółw słoniowy",
            "Kajman czarny oraz gawial gangesowy",
            "Aligator amerykański oraz krokodyl amerykański"
        ],
        "correct": 3,
        "explanation": "Everglades to jedyne miejsce na Ziemi, gdzie w jednym środowisku (mieszanka wód słodkich i słonawych wód namorzynowych) współwystępują obok siebie aligatory i krokodyle."
    },
    {
        "id": 83,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Dzikim krewnym renifera w Ameryce Północnej, podejmującym coroczne wędrówki na dystansie setek kilometrów między tundrą a tajgą, jest:",
        "options": [
            "Karibu (Rangifer tarandus caribou)",
            "Jeleń wapiti",
            "Łoś amerykański",
            "Widłoróg"
        ],
        "correct": 0,
        "explanation": "Karibu tworzą ogromne stada migrujące wiosną na północ na pastwiska tundrowe, a jesienią na południe w osłonę lasów tajgi."
    },
    {
        "id": 84,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "Najszybszym ssakiem lądowym Ameryki Północnej, potrafiącym biec z prędkością dochodzącą do 90 km/h po otwartych równinach, jest:",
        "options": [
            "Gepard",
            "Mulak białoogonowy",
            "Wilk szary",
            "Widłoróg (Antilocapra americana)"
        ],
        "correct": 3,
        "explanation": "Widłoróg rozwinął zawrotną prędkość w epoce lodowcowej uciekając przed wymarłym amerykańskim gepardem (Miracinonyx)."
    },
    {
        "id": 85,
        "type": "choice",
        "category": "Biosfera i gleby",
        "question": "W lasach strefy umiarkowanej północno-zachodniego wybrzeża USA i Kanady (stan Waszyngton, Kolumbia Brytyjska) dominuje potężne iglaste drzewo użytkowe:",
        "options": [
            "Daglezja zielona (jedlica Douglasa)",
            "Baobab",
            "Brzoza brodawkowata",
            "Sosna limba"
        ],
        "correct": 0,
        "explanation": "Daglezja zielona (Douglas fir) osiąga wysokość do 80–100 metrów i tworzy lasy o największej biomasie na hektar poza strefą równikową."
    },
    {
        "id": 86,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Pierwszym parkiem narodowym na świecie, utworzonym w 1872 roku decyzją Kongresu USA i prezydenta Ulyssesa Granta, był:",
        "options": [
            "Park Narodowy Banff",
            "Park Narodowy Yosemite",
            "Park Narodowy Yellowstone",
            "Park Narodowy Wielkiego Kanionu"
        ],
        "correct": 2,
        "explanation": "Yellowstone powstał w 1872 roku \"dla pożytku i przyjemności narodu\", dając początek globalnemu ruchowi tworzenia parków narodowych."
    },
    {
        "id": 87,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Najstarszym parkiem narodowym w Kanadzie, założonym w 1885 roku w Górach Skalistych wokół gorących źródeł siarkowych, jest:",
        "options": [
            "Park Narodowy Gros Morne",
            "Park Narodowy Jasper",
            "Park Narodowy Yoho",
            "Park Narodowy Banff"
        ],
        "correct": 3,
        "explanation": "Park Narodowy Banff w Albercie założono po odkryciu gorących źródeł Cave and Basin przez robotników budujących Kolej Transkanadyjską."
    },
    {
        "id": 88,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Najsłynniejszy regularny gejzer w Parku Narodowym Yellowstone, wyrzucający słup wrzącej wody na wysokość do 55 metrów co około 90 minut, to:",
        "options": [
            "Steamboat Geyser",
            "Old Faithful (Wierny Stary)",
            "El Tatio",
            "Strokkur"
        ],
        "correct": 1,
        "explanation": "Gejzer Old Faithful zawdzięcza swą nazwę niezwykłej punktualności wybuchów, dokumentowanej od czasów ekspedycji Washburna w 1870 roku."
    },
    {
        "id": 89,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Park Narodowy Wielkiego Kanionu (Grand Canyon National Park) w Arizonie chroni przełom rzeki Kolorado o głębokości dochodzącej do:",
        "options": [
            "4000 metrów",
            "300 metrów",
            "Około 1600–1800 metrów (ponad milę w głąb skał)",
            "50 metrów"
        ],
        "correct": 2,
        "explanation": "Wielki Kanion ma długość 446 km, szerokość do 29 km i głębokość 1,8 km, odsłaniając przekrój geologiczny od prekambryjskiego łupku Wisznu po permskie wapienie Kaibab."
    },
    {
        "id": 90,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Park Narodowy Arches w stanie Utah słynie z największego na Ziemi zagęszczenia naturalnych form erozyjnych piaskowca:",
        "options": [
            "Głębokich jaskiń lodowych z naciekami",
            "Naturalnych łuków skalnych (ponad 2000 skatalogowanych łuków, w tym Delicate Arch)",
            "Stożków wulkanicznych z lawą kordową",
            "Jezior kraterowych o szmaragdowej barwie"
        ],
        "correct": 1,
        "explanation": "Delicate Arch i Landscape Arch w Parku Arches powstały w wyniku wietrzenia mrozowego i chemicznego w warstwie piaskowca Entrada nad podziemnym wysadem solnym."
    },
    {
        "id": 91,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "W Parku Narodowym Sekwoi (Sequoia National Park) rośnie \"General Sherman\" – drzewo uznawane za:",
        "options": [
            "Jedyne drzewo, które nie zrzuca igieł w pożarze",
            "Najstarsze drzewo świata liczące ponad 10 000 lat",
            "Największy pod względem objętości pnia pojedynczy organizm żywy na Ziemi (ponad 1480 m³ drewna)",
            "Najwyższą palmę na świecie"
        ],
        "correct": 2,
        "explanation": "General Sherman (mamutowiec olbrzymi) ma 84 m wysokości i ponad 31 m obwodu u podstawy, będąc rekordzistą objętości biomasy pnia."
    },
    {
        "id": 92,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Jezioro Moraine oraz Jezioro Louise, znane ze zjawiskowej turkusowo-mlecznej barwy wody, leżą w Kanadzie w parku:",
        "options": [
            "Parku Narodowym Fundy",
            "Parku Narodowym Banff (Alberta)",
            "Parku Narodowym Nahanni",
            "Parku Narodowym Gros Morne"
        ],
        "correct": 1,
        "explanation": "Intensywnie błękitny kolor wody tych jezior wynika z obecności mączki skalnej (drobno zmielonych osadów polodowcowych), która zawieszona w wodzie rozprasza światło słoneczne w odcieniach turkusu."
    },
    {
        "id": 93,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Park Narodowy Gros Morne w Nowej Fundlandii został wpisany na Listę UNESCO m.in. z powodu płaskowyżu Tablelands, gdzie:",
        "options": [
            "Na powierzchni Ziemi odsłonięte są bezpośrednio skały płaszcza ziemskiego (perydotyty), co potwierdziło teorię tektoniki płyt",
            "Znajduje się największy czynny wulkan Ameryki Północnej",
            "Płynie rzeka o temperaturze wrzenia",
            "Żyją ostatnie dzikie dinozaury"
        ],
        "correct": 0,
        "explanation": "Tablelands to rzadkie zjawisko ofiolitu – skały z głębokiego płaszcza Ziemi zostały wprasowane na kontynent podczas zamykania dawnego oceanu Japetus."
    },
    {
        "id": 94,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Pierwszym Pomnikiem Narodowym (National Monument) w USA, ustanowionym w 1906 roku przez prezydenta Theodore'a Roosevelta, była bazaltowa intruzja w Wyoming:",
        "options": [
            "Góra Rushmore",
            "Mesa Verde",
            "Wielki Kanion",
            "Devils Tower (Wieża Diabła)"
        ],
        "correct": 3,
        "explanation": "Devils Tower to spektakularny nek wulkaniczny z regularnymi kolumnami ciosu bazaltowego, wznoszący się 386 metrów nad okoliczne prerie Wyoming."
    },
    {
        "id": 95,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Największym pod względem powierzchni parkiem narodowym w USA (ponad 53 tys. km² – obszar większy niż Szwajcaria) jest:",
        "options": [
            "Everglades na Florydzie",
            "Death Valley w Kalifornii",
            "Yellowstone w Wyoming",
            "Wrangell-St. Elias na Alasce"
        ],
        "correct": 3,
        "explanation": "Park Narodowy Wrangell-St. Elias na Alasce chroni potężne lodowce i szczyty Kordylierów, zajmując powierzchnię ponad 53 000 km²."
    },
    {
        "id": 96,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Park Narodowy Everglades na Florydzie chroni unikalną, bardzo wolno płynącą rzekę słodkowodną zwaną metaforycznie:",
        "options": [
            "\"Czarnym Strumieniem\"",
            "\"Doliną Błota\"",
            "\"Rzeką Traw\" (River of Grass)",
            "\"Wodnym Lasem\""
        ],
        "correct": 2,
        "explanation": "Everglades to w rzeczywistości szeroka na kilkadziesiąt kilometrów i płytka na kilkadziesiąt centymetrów rzeka porośnięta kłocią wiechowatą (sawgrass), płynąca powoli z jeziora Okeechobee ku Zatoce Florydzkiej."
    },
    {
        "id": 97,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "W Parku Narodowym Mesa Verde w stanie Kolorado chronione są:",
        "options": [
            "Wykute w piaskowcowych niszach klifowych prehistoryczne osiedla Indian Pueblo (np. Cliff Palace)",
            "Czynne wulkany błotne",
            "Zalane jaskinie krasowe z kośćmi mamutów",
            "Największe drzewa iglaste Ameryki"
        ],
        "correct": 0,
        "explanation": "Mesa Verde to park łączący ochronę przyrody i archeologii – chroni spektakularne wielopiętrowe kamienne budowle Indian kultury Anasazi z XII i XIII wieku."
    },
    {
        "id": 98,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "W Parku Narodowym Jasper w kanadyjskiej prowincji Alberta turyści mogą wjechać specjalnymi autobusami terenowymi bezpośrednio na jęzor lodowca:",
        "options": [
            "Lodowiec Perito Moreno",
            "Lodowiec Hubbarda",
            "Lodowiec Athabasca",
            "Lodowiec Malaspina"
        ],
        "correct": 2,
        "explanation": "Lodowiec Athabasca wypływający z Columbia Icefield jest najłatwiej dostępnym i najchętniej odwiedzanym lodowcem w Górach Skalistych Kanady."
    },
    {
        "id": 99,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Park Narodowy Nahanni w Terytoriach Północno-Zachodnich Kanady, jeden z pierwszych obiektów na liście UNESCO, słynie z potężnego wodospadu Virginia Falls oraz:",
        "options": [
            "Piaszczystych plaż wypoczynkowych",
            "Gajów palmowych",
            "Głębokich kanionów rzeki South Nahanni i jaskiń krasowych w strefie subarktycznej",
            "Ciepłych raf koralowych"
        ],
        "correct": 2,
        "explanation": "Nahanni to dziki rezerwat przyrody chroniący kaniony głębsze niż Grand Canyon, zjawiska krasowe w wiecznej zmarzlinie oraz wodospad dwa razy wyższy od Niagary."
    },
    {
        "id": 100,
        "type": "choice",
        "category": "Ochrona przyrody i Parki",
        "question": "Zatoka Fundy (Bay of Fundy) leżąca między Nowym Brunszwikiem a Nową Szkocją jest chroniona m.in. w Parku Narodowym Fundy z powodu:",
        "options": [
            "Najwyższych na świecie pływów morskich, których amplituda osiąga nawet 16 metrów",
            "Najwyższej temperatury wody w Arktyce",
            "Najgłębszego rowu oceanicznego na Ziemi",
            "Całorocznego zlodzenia i braku dostępu do morza"
        ],
        "correct": 0,
        "explanation": "Lejkowaty kształt zatoki oraz zjawisko rezonansu fal pływowych sprawiają, że różnica poziomów wody między odpływem a przypływem w Zatoce Fundy dochodzi do rekordowych 16 metrów."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = USA_CAN_PHYSICAL_QUESTIONS;
}
