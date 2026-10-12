// 100 Pytań Quizowych: Podział Administracyjny USA i Kanady
// Wszystkie 100 pytań to pytania zamknięte jednokrotnego wyboru (A, B, C, D)

const QUIZ_QUESTIONS = [
    {
        "id": 1,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Kalifornia?",
        "options": [
            "San Diego",
            "Sacramento",
            "Los Angeles",
            "San Francisco"
        ],
        "correct": 1,
        "explanation": "Stolicą Kalifornii jest Sacramento (od 1854 roku), mimo że Los Angeles i San Francisco są znacznie większymi metropoliami."
    },
    {
        "id": 2,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Teksas jest:",
        "options": [
            "Houston",
            "San Antonio",
            "Dallas",
            "Austin"
        ],
        "correct": 3,
        "explanation": "Austin jest stolicą Teksasu od 1839 roku. Houston jest z kolei najludniejszym miastem tego stanu."
    },
    {
        "id": 3,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Jakie miasto pełni funkcję stolicy stanu Nowy Jork (New York)?",
        "options": [
            "Rochester",
            "Nowy Jork (New York City)",
            "Albany",
            "Buffalo"
        ],
        "correct": 2,
        "explanation": "Stolicą stanu Nowy Jork jest Albany, położone nad rzeką Hudson."
    },
    {
        "id": 4,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Floryda (często myloną z Miami lub Orlando)?",
        "options": [
            "Orlando",
            "Tampa",
            "Miami",
            "Tallahassee"
        ],
        "correct": 3,
        "explanation": "Stolicą Florydy jest Tallahassee, położone w północnej części stanu (tzw. Florida Panhandle)."
    },
    {
        "id": 5,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Illinois jest miasto powiązane z Abrahamem Lincolnem. Jest to:",
        "options": [
            "Rockford",
            "Peoria",
            "Chicago",
            "Springfield"
        ],
        "correct": 3,
        "explanation": "Stolicą Illinois jest Springfield, a nie olbrzymia metropolia Chicago."
    },
    {
        "id": 6,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które z poniższych miast jest stolicą stanu Waszyngton (stanu na północno-zachodnim wybrzeżu Pacyfiku)?",
        "options": [
            "Olympia",
            "Tacoma",
            "Spokane",
            "Seattle"
        ],
        "correct": 0,
        "explanation": "Stolicą stanu Waszyngton jest Olympia, leżąca nad zatoką Puget Sound."
    },
    {
        "id": 7,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Kolorado, leżącą u stóp Gór Skalistych (zwaną \"Mile High City\"), jest:",
        "options": [
            "Colorado Springs",
            "Aspen",
            "Boulder",
            "Denver"
        ],
        "correct": 3,
        "explanation": "Stolicą i największym miastem Kolorado jest Denver, położone dokładnie jedną milę (1609 m) n.p.m."
    },
    {
        "id": 8,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Pensylwania jest:",
        "options": [
            "Pittsburgh",
            "Filadelfia",
            "Allentown",
            "Harrisburg"
        ],
        "correct": 3,
        "explanation": "Stolicą Pensylwanii jest Harrisburg, mimo że najważniejszym historycznie i demograficznie miastem jest Filadelfia."
    },
    {
        "id": 9,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Arizona?",
        "options": [
            "Phoenix",
            "Mesa",
            "Flagstaff",
            "Tucson"
        ],
        "correct": 0,
        "explanation": "Phoenix jest stolicą Arizony i jednocześnie najludniejszą stolicą stanową w całych Stanach Zjednoczonych (ponad 1,6 mln mieszkańców)."
    },
    {
        "id": 10,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Georgia (gospodarz Letnich Igrzysk Olimpijskich w 1996 roku)?",
        "options": [
            "Macon",
            "Atlanta",
            "Augusta",
            "Savannah"
        ],
        "correct": 1,
        "explanation": "Stolicą i gospodarczym sercem Georgii jest Atlanta."
    },
    {
        "id": 11,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Massachusetts i jednym z najstarszych miast w USA jest:",
        "options": [
            "Worcester",
            "Boston",
            "Cambridge",
            "Salem"
        ],
        "correct": 1,
        "explanation": "Boston jest stolicą Massachusetts oraz nieformalną stolicą całego regionu Nowej Anglii."
    },
    {
        "id": 12,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Luizjana?",
        "options": [
            "Baton Rouge",
            "Shreveport",
            "Lafayette",
            "Nowy Orlean"
        ],
        "correct": 0,
        "explanation": "Stolicą Luizjany jest Baton Rouge, podczas gdy Nowy Orlean jest jej największym miastem i centrum kulturalnym."
    },
    {
        "id": 13,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą Alaski – do której nie można dojechać żadną drogą lądową z reszty kontynentu – jest:",
        "options": [
            "Fairbanks",
            "Nome",
            "Juneau",
            "Anchorage"
        ],
        "correct": 2,
        "explanation": "Stolicą Alaski jest Juneau. Można się tam dostać wyłącznie drogą morską (promem) lub samolotem."
    },
    {
        "id": 14,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Hawaje, położoną na wyspie Oahu, jest:",
        "options": [
            "Honolulu",
            "Hilo",
            "Kailua",
            "Kahului"
        ],
        "correct": 0,
        "explanation": "Stolicą i głównym portem stanu Hawaje jest Honolulu."
    },
    {
        "id": 15,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Nevada, słynącego z kasyn i pustyń, jest:",
        "options": [
            "Reno",
            "Las Vegas",
            "Carson City",
            "Henderson"
        ],
        "correct": 2,
        "explanation": "Stolicą Nevady jest Carson City, leżące w pobliżu jeziora Tahoe."
    },
    {
        "id": 16,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Michigan, znanego z przemysłu motoryzacyjnego (Detroit), jest:",
        "options": [
            "Detroit",
            "Ann Arbor",
            "Grand Rapids",
            "Lansing"
        ],
        "correct": 3,
        "explanation": "Stolicą stanu Michigan jest Lansing, wybrane w 1847 roku jako kompromisowa lokalizacja w głębi lądu."
    },
    {
        "id": 17,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Utah, będącą światowym centrum mormonów, jest:",
        "options": [
            "Provo",
            "Saint George",
            "Salt Lake City",
            "Ogden"
        ],
        "correct": 2,
        "explanation": "Stolicą Utah jest Salt Lake City, położone nad Wielkim Jeziorem Słonym."
    },
    {
        "id": 18,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Ohio?",
        "options": [
            "Cleveland",
            "Columbus",
            "Toledo",
            "Cincinnati"
        ],
        "correct": 1,
        "explanation": "Stolicą i największym miastem Ohio jest Columbus."
    },
    {
        "id": 19,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Minnesota (tworzącą z Minneapolis tzw. \"Bliźniacze Miasta\" – Twin Cities) jest:",
        "options": [
            "Bloomington",
            "Rochester",
            "Saint Paul",
            "Duluth"
        ],
        "correct": 2,
        "explanation": "Stolicą Minnesoty jest Saint Paul, graniczące bezpośrednio przez rzekę Missisipi z Minneapolis."
    },
    {
        "id": 20,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Nowy Meksyk (najstarsza stolica stanowa w USA, założona w 1610 r.)?",
        "options": [
            "Santa Fe",
            "Albuquerque",
            "Las Cruces",
            "Roswell"
        ],
        "correct": 0,
        "explanation": "Stolicą Nowego Meksyku jest Santa Fe, założone przez hiszpańskich konkwistadorów w 1610 roku."
    },
    {
        "id": 21,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Indiana jest:",
        "options": [
            "Indianapolis",
            "Evansville",
            "Fort Wayne",
            "South Bend"
        ],
        "correct": 0,
        "explanation": "Indianapolis jest stolicą i największym miastem stanu Indiana."
    },
    {
        "id": 22,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Tennessee, słynącego z muzyki country?",
        "options": [
            "Nashville",
            "Knoxville",
            "Memphis",
            "Chattanooga"
        ],
        "correct": 0,
        "explanation": "Stolicą Tennessee jest Nashville, światowa stolica muzyki country. Memphis leży na zachodnim krańcu stanu."
    },
    {
        "id": 23,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Karolina Północna (North Carolina) jest:",
        "options": [
            "Durham",
            "Greensboro",
            "Raleigh",
            "Charlotte"
        ],
        "correct": 2,
        "explanation": "Stolicą Karoliny Północnej jest Raleigh, a Charlotte jest jej największym miastem."
    },
    {
        "id": 24,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Wirginia (Virginia)?",
        "options": [
            "Richmond",
            "Norfolk",
            "Virginia Beach",
            "Alexandria"
        ],
        "correct": 0,
        "explanation": "Stolicą Wirginii jest Richmond, dawna stolica Skonfederowanych Stanów Ameryki podczas wojny secesyjnej."
    },
    {
        "id": 25,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Oregon (nie mylić z największym miastem Portland) jest:",
        "options": [
            "Eugene",
            "Salem",
            "Medford",
            "Bend"
        ],
        "correct": 1,
        "explanation": "Stolicą Oregonu jest Salem, położone w urodzajnej dolinie rzeki Willamette."
    },
    {
        "id": 26,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Z ilu stanów składają się Stany Zjednoczone Ameryki?",
        "options": [
            "51",
            "50",
            "48",
            "52"
        ],
        "correct": 1,
        "explanation": "USA składają się dokładnie z 50 stanów (48 stanów kontynentalnych oraz Alaska i Hawaje), a także Dystryktu Kolumbii i terytoriów zależnych."
    },
    {
        "id": 27,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który stan został przyjęty do Unii jako 50. (ostatni) w sierpniu 1959 roku?",
        "options": [
            "Alaska",
            "Hawaje",
            "Arizona",
            "Nowy Meksyk"
        ],
        "correct": 1,
        "explanation": "Hawaje zostały przyjęte jako 50. stan 21 sierpnia 1959 roku, kilka miesięcy po Alasce (49. stan)."
    },
    {
        "id": 28,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Stolica federalna USA, Waszyngton, leży w specjalnym okręgu federalnym o nazwie:",
        "options": [
            "Union Territory",
            "Federal Territory of Washington",
            "District of Columbia (D.C.)",
            "Capital State"
        ],
        "correct": 2,
        "explanation": "Waszyngton leży w Dystrykcie Kolumbii (D.C. – District of Columbia), który nie jest częścią żadnego stanu."
    },
    {
        "id": 29,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który stan USA ma największą powierzchnię lądową?",
        "options": [
            "Alaska",
            "Teksas",
            "Montana",
            "Kalifornia"
        ],
        "correct": 0,
        "explanation": "Alaska ma ponad 1,7 mln km² powierzchni – jest ponad 2,4 razy większa od drugiego w kolejności Teksasu!"
    },
    {
        "id": 30,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Najmniejszym pod względem powierzchni stanem USA (leżącym w Nowej Anglii) jest:",
        "options": [
            "Connecticut",
            "New Jersey",
            "Delaware",
            "Rhode Island"
        ],
        "correct": 3,
        "explanation": "Rhode Island (State of Rhode Island) ma zaledwie 3144 km² lądu i wód śródlądowych."
    },
    {
        "id": 31,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który stan USA ma największą liczbę ludności (ponad 39 milionów mieszkańców)?",
        "options": [
            "Nowy Jork",
            "Kalifornia",
            "Floryda",
            "Teksas"
        ],
        "correct": 1,
        "explanation": "Kalifornia jest najludniejszym stanem USA (ok. 39 mln), wyprzedzając Teksas (ok. 30 mln) i Florydę (ok. 22 mln)."
    },
    {
        "id": 32,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który stan USA ma najmniejszą liczbę ludności (poniżej 600 tysięcy mieszkańców)?",
        "options": [
            "Dakota Północna",
            "Wyoming",
            "Vermont",
            "Alaska"
        ],
        "correct": 1,
        "explanation": "Wyoming liczy jedynie ok. 580 tys. mieszkańców i ma najmniejszą populację spośród wszystkich 50 stanów."
    },
    {
        "id": 33,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Większość stanów USA dzieli się na hrabstwa (counties). W Luizjanie odpowiednikiem hrabstwa jest jednak:",
        "options": [
            "Dystrykt (District)",
            "Prowincja (Province)",
            "Gmina (Borough)",
            "Parafia (Parish)"
        ],
        "correct": 3,
        "explanation": "W Luizjanie, z racji francuskiego dziedzictwa prawnego, jednostki podziału nazywają się oficjalnie parafiami (parishes)."
    },
    {
        "id": 34,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Na Alasce odpowiednikiem hrabstw (counties) są jednostki podziału zwane:",
        "options": [
            "Districts",
            "Boroughs",
            "Townships",
            "Parishes"
        ],
        "correct": 1,
        "explanation": "Alaska dzieli się na \"boroughs\" (zorganizowane) oraz jeden wielki Unorganized Borough."
    },
    {
        "id": 35,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Które z poniższych terytoriów zamorskich USA jest tzw. wspólnotą (Commonwealth) o największej populacji na Karaibach?",
        "options": [
            "Portoryko (Puerto Rico)",
            "Samoa Amerykańskie",
            "Wyspy Dziewicze USA",
            "Guam"
        ],
        "correct": 0,
        "explanation": "Portoryko (Puerto Rico) jest stowarzyszonym terytorium USA na Morzu Karaibskim zamieszkanym przez ok. 3,2 mln obywateli USA."
    },
    {
        "id": 36,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Punkt \"Four Corners\" (Cztery Kąty) to jedyne miejsce w USA, gdzie stykają się granice czterech stanów. Są to:",
        "options": [
            "Nevada, Idaho, Wyoming, Utah",
            "Kolorado, Utah, Arizona, Nowy Meksyk",
            "Montana, Dakota Północna, Dakota Południowa, Wyoming",
            "Kalifornia, Nevada, Arizona, Utah"
        ],
        "correct": 1,
        "explanation": "Four Corners Monument łączy pod kątem prostym granice stanów: Kolorado, Utah, Arizona i Nowy Meksyk."
    },
    {
        "id": 37,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który z poniższych stanów jako pierwszy ratyfikował Konstytucję USA w 1787 roku (przez co nazywany jest \"The First State\")?",
        "options": [
            "Wirginia",
            "Nowy Jork",
            "Pensylwania",
            "Delaware"
        ],
        "correct": 3,
        "explanation": "Delaware jako pierwszy stan ratyfikował Konstytucję Stanów Zjednoczonych 7 grudnia 1787 roku."
    },
    {
        "id": 38,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Jedynym stanem USA, którego parlament stanowy jest jednoizbowy (Unicameral), jest:",
        "options": [
            "Nebraska",
            "Kansas",
            "Dakota Południowa",
            "Iowa"
        ],
        "correct": 0,
        "explanation": "Nebraska posiada jedyny jednoizbowy parlament stanowy w USA (tzw. Nebraska Legislature), którego członkowie są wybierani w wyborach bezpartyjnych."
    },
    {
        "id": 39,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Termin \"Lower 48\" lub \"CONUS\" oznacza:",
        "options": [
            "Stany, które wstąpiły do Unii w XIX wieku",
            "48 najmniejszych stanów",
            "Stany założycielskie",
            "48 stanów położonych na południe od Kanady (bez Alaski i Hawajów)"
        ],
        "correct": 3,
        "explanation": "\"Lower 48\" (lub Contiguous US) to 48 przyległych stanów leżących na zwartym obszarze kontynentu Ameryki Północnej."
    },
    {
        "id": 40,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Region Nowa Anglia (New England) w północno-wschodnich USA obejmuje 6 stanów. Który stan NIE należy do Nowej Anglii?",
        "options": [
            "Nowy Jork",
            "New Hampshire",
            "Maine",
            "Vermont"
        ],
        "correct": 0,
        "explanation": "Nowy Jork należy do regionu Środkowoatlantyckiego (Mid-Atlantic). Nowa Anglia to: Maine, New Hampshire, Vermont, Massachusetts, Rhode Island i Connecticut."
    },
    {
        "id": 41,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Stolicą stanu Wisconsin, położoną malowniczo na przesmyku między dwoma jeziorami, jest:",
        "options": [
            "Milwaukee",
            "Green Bay",
            "Kenosha",
            "Madison"
        ],
        "correct": 3,
        "explanation": "Stolicą Wisconsin jest Madison, podczas gdy największym miastem jest Milwaukee nad jeziorem Michigan."
    },
    {
        "id": 42,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Kansas (słynną m.in. z orzeczenia Sądu Najwyższego ws. desegregacji szkół) jest:",
        "options": [
            "Topeka",
            "Overland Park",
            "Wichita",
            "Kansas City"
        ],
        "correct": 0,
        "explanation": "Stolicą Kansas jest Topeka (sprawa Brown v. Board of Education of Topeka w 1954 r.)."
    },
    {
        "id": 43,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Iowa jest:",
        "options": [
            "Sioux City",
            "Davenport",
            "Des Moines",
            "Cedar Rapids"
        ],
        "correct": 2,
        "explanation": "Stolicą i największym miastem stanu Iowa jest Des Moines."
    },
    {
        "id": 44,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Missouri jest miasto:",
        "options": [
            "Jefferson City",
            "Kansas City",
            "Springfield",
            "Saint Louis"
        ],
        "correct": 0,
        "explanation": "Stolicą Missouri jest Jefferson City, nazwane na cześć prezydenta Thomasa Jeffersona."
    },
    {
        "id": 45,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Idaho, znaną jako \"Miasto Drzew\" (City of Trees), jest:",
        "options": [
            "Coeur d'Alene",
            "Idaho Falls",
            "Pocatello",
            "Boise"
        ],
        "correct": 3,
        "explanation": "Stolicą i największym miastem stanu Idaho jest Boise."
    },
    {
        "id": 46,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Montana jest:",
        "options": [
            "Bozeman",
            "Billings",
            "Helena",
            "Missoula"
        ],
        "correct": 2,
        "explanation": "Stolicą Montany jest Helena, założona podczas gorączki złota w 1864 roku."
    },
    {
        "id": 47,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Wyoming jest:",
        "options": [
            "Jackson",
            "Cheyenne",
            "Laramie",
            "Casper"
        ],
        "correct": 1,
        "explanation": "Stolicą i największym miastem stanu Wyoming jest Cheyenne."
    },
    {
        "id": 48,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Które miasto jest stolicą stanu Alabama?",
        "options": [
            "Mobile",
            "Birmingham",
            "Montgomery",
            "Huntsville"
        ],
        "correct": 2,
        "explanation": "Stolicą Alabamy jest Montgomery, historyczne centrum walk o prawa obywatelskie Afroamerykanów (strajk autobusowy Rosy Parks)."
    },
    {
        "id": 49,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Arkansas jest:",
        "options": [
            "Jonesboro",
            "Fort Smith",
            "Fayetteville",
            "Little Rock"
        ],
        "correct": 3,
        "explanation": "Stolicą i największym miastem Arkansas jest Little Rock."
    },
    {
        "id": 50,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Karolina Południowa (South Carolina) jest:",
        "options": [
            "Greenville",
            "Charleston",
            "Columbia",
            "Myrtle Beach"
        ],
        "correct": 2,
        "explanation": "Stolicą Karoliny Południowej jest Columbia, leżąca w centrum stanu."
    },
    {
        "id": 51,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Ile prowincji i ile terytoriów liczy obecnie Kanada?",
        "options": [
            "50 prowincji i 1 terytorium",
            "8 prowincji i 4 terytoria",
            "10 prowincji i 3 terytoria",
            "12 prowincji i 2 terytoria"
        ],
        "correct": 2,
        "explanation": "Kanada dzieli się na 10 prowincji (posiadających szeroką suwerenność konstytucyjną) oraz 3 terytoria federalne na północy."
    },
    {
        "id": 52,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą federalną Kanady (leżącą w prowincji Ontario nad rzeką graniczną z Quebekiem) jest:",
        "options": [
            "Montreal",
            "Ottawa",
            "Vancouver",
            "Toronto"
        ],
        "correct": 1,
        "explanation": "Stolicą Kanady jest Ottawa, wybrana w 1857 roku przez królową Wiktorię."
    },
    {
        "id": 53,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Która prowincja Kanady ma największą liczbę ludności (prawie 40% mieszkańców kraju)?",
        "options": [
            "Ontario",
            "Kolumbia Brytyjska",
            "Quebec",
            "Alberta"
        ],
        "correct": 0,
        "explanation": "Ontario jest najludniejszą prowincją Kanady (ponad 15 mln mieszkańców), z największym miastem Toronto."
    },
    {
        "id": 54,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą prowincji Ontario jest:",
        "options": [
            "Hamilton",
            "Ottawa",
            "London",
            "Toronto"
        ],
        "correct": 3,
        "explanation": "Stolicą prowincji Ontario jest Toronto. Ottawa jest z kolei stolicą całego państwa (federalną)."
    },
    {
        "id": 55,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Która prowincja Kanady jest największa pod względem powierzchni lądowej?",
        "options": [
            "Kolumbia Brytyjska",
            "Quebec",
            "Nunavut",
            "Ontario"
        ],
        "correct": 1,
        "explanation": "Spośród prowincji największy jest Quebec (ponad 1,5 mln km²). Nunavut jest większe, ale jest terytorium, a nie prowincją."
    },
    {
        "id": 56,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Jedyną kanadyjską prowincją, w której jedynym językiem urzędowym jest wyłącznie język francuski, jest:",
        "options": [
            "Quebec",
            "Manitoba",
            "Ontario",
            "Nowy Brunszwik"
        ],
        "correct": 0,
        "explanation": "Quebec (Québec) jest prowincją francuskojęzyczną z własnym unikalnym systemem prawa cywilnego."
    },
    {
        "id": 57,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą prowincji Quebec jest:",
        "options": [
            "Québec (Quebec City)",
            "Laval",
            "Gatineau",
            "Montreal"
        ],
        "correct": 0,
        "explanation": "Stolicą prowincji jest miasto Québec (Quebec City), choć największą metropolią jest Montreal."
    },
    {
        "id": 58,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Które miasto jest stolicą Kolumbii Brytyjskiej (British Columbia), położone na wyspie Vancouver?",
        "options": [
            "Vancouver",
            "Kelowna",
            "Richmond",
            "Victoria"
        ],
        "correct": 3,
        "explanation": "Stolicą Kolumbii Brytyjskiej jest Victoria, położona na południowym krańcu wyspy Vancouver."
    },
    {
        "id": 59,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą prowincji Alberta, słynącej z ropy naftowej i bliskości Gór Skalistych, jest:",
        "options": [
            "Red Deer",
            "Calgary",
            "Edmonton",
            "Banff"
        ],
        "correct": 2,
        "explanation": "Stolicą Alberty jest Edmonton, podczas gdy Calgary jest jej największym miastem i centrum biznesowym."
    },
    {
        "id": 60,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą prowincji Manitoba, będącą węzłem kolejowym i centrum geograficznym Kanady, jest:",
        "options": [
            "Steinbach",
            "Winnipeg",
            "Brandon",
            "Thompson"
        ],
        "correct": 1,
        "explanation": "Stolicą i zdecydowanie największym miastem Manitoby jest Winnipeg."
    },
    {
        "id": 61,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą preriowej prowincji Saskatchewan jest miasto:",
        "options": [
            "Moose Jaw",
            "Regina",
            "Prince Albert",
            "Saskatoon"
        ],
        "correct": 1,
        "explanation": "Stolicą Saskatchewan jest Regina (nazwana na cześć królowej Wiktorii: Victoria Regina), choć największym miastem jest Saskatoon."
    },
    {
        "id": 62,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Która prowincja Kanady jest oficjalnie jedyną dwujęzyczną (angielsko-francuską) prowincją w konstytucji?",
        "options": [
            "Nowa Szkocja",
            "Ontario",
            "Quebec",
            "Nowy Brunszwik (New Brunswick)"
        ],
        "correct": 3,
        "explanation": "Nowy Brunszwik (New Brunswick) jest jedyną prowincją Kanady z konstytucyjnie zagwarantowanym statusem pełnej dwujęzyczności."
    },
    {
        "id": 63,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą Nowego Brunszwiku (New Brunswick) jest:",
        "options": [
            "Moncton",
            "Saint John",
            "Fredericton",
            "Bathurst"
        ],
        "correct": 2,
        "explanation": "Stolicą Nowego Brunszwiku jest Fredericton, a największymi ośrodkami miejskimi są Moncton i Saint John."
    },
    {
        "id": 64,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą nadatlantyckiej prowincji Nowa Szkocja (Nova Scotia) jest:",
        "options": [
            "Halifax",
            "Lunenburg",
            "Dartmouth",
            "Sydney"
        ],
        "correct": 0,
        "explanation": "Stolicą i głównym portem Nowej Szkocji jest Halifax, strategiczna baza kanadyjskiej marynarki wojennej."
    },
    {
        "id": 65,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Najmniejszą pod względem powierzchni i ludności prowincją Kanady jest:",
        "options": [
            "Wyspa Księcia Edwarda (PEI)",
            "Jukon",
            "Nowa Szkocja",
            "Nowa Fundlandia"
        ],
        "correct": 0,
        "explanation": "Wyspa Księcia Edwarda (Prince Edward Island) ma powierzchnię zaledwie 5660 km² i ok. 175 tys. mieszkańców."
    },
    {
        "id": 66,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą Wyspy Księcia Edwarda (uznawaną za \"Kolebkę Konfederacji Kanady\" z 1864 r.) jest:",
        "options": [
            "Summerside",
            "Stratford",
            "Cornwall",
            "Charlottetown"
        ],
        "correct": 3,
        "explanation": "Stolicą PEI jest Charlottetown, uznawane za \"Kolebkę Konfederacji Kanady\"."
    },
    {
        "id": 67,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Prowincja Nowa Fundlandia i Labrador wstąpiła do Konfederacji Kanady jako ostatnia w roku:",
        "options": [
            "1999",
            "1867",
            "1949",
            "1905"
        ],
        "correct": 2,
        "explanation": "Nowa Fundlandia była osobnym brytyjskim dominium aż do referendum w 1949 roku, kiedy została 10. prowincją Kanady."
    },
    {
        "id": 68,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą prowincji Nowa Fundlandia i Labrador (najbardziej na wschód wysuniętym miastem w Ameryce Płn.) jest:",
        "options": [
            "Gander",
            "Corner Brook",
            "Happy Valley-Goose Bay",
            "St. John's"
        ],
        "correct": 3,
        "explanation": "Stolicą Nowej Fundlandii i Labradoru jest St. John's, położone na półwyspie Avalon."
    },
    {
        "id": 69,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Trzy terytoria Kanady na dalekiej północy to:",
        "options": [
            "Labrador, Jukon, Grenlandia",
            "Alaska, Nunavut, Arktyka",
            "Jukon, Terytoria Północno-Zachodnie, Nunavut",
            "Manitoba, Jukon, Nunavut"
        ],
        "correct": 2,
        "explanation": "Kanada ma 3 terytoria: Jukon (Yukon), Terytoria Północno-Zachodnie (NWT) oraz Nunavut."
    },
    {
        "id": 70,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Najmłodszym terytorium Kanady, utworzonym w 1999 roku jako ojczyzna Inuitów, jest:",
        "options": [
            "Labrador",
            "Nunavut",
            "Terytoria Północno-Zachodnie",
            "Jukon"
        ],
        "correct": 1,
        "explanation": "Nunavut zostało wydzielone z Terytoriów Północno-Zachodnich 1 kwietnia 1999 roku."
    },
    {
        "id": 71,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą terytorium Nunavut jest miasto na Ziemi Baffina o nazwie:",
        "options": [
            "Rankin Inlet",
            "Inuvik",
            "Iqaluit",
            "Yellowknife"
        ],
        "correct": 2,
        "explanation": "Stolicą Nunavut jest Iqaluit (do 1987 r. znane jako Frobisher Bay)."
    },
    {
        "id": 72,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą Terytoriów Północno-Zachodnich (Northwest Territories) położoną nad Wielkim Jeziorem Niewolniczym jest:",
        "options": [
            "Yellowknife",
            "Hay River",
            "Dawson City",
            "Whitehorse"
        ],
        "correct": 0,
        "explanation": "Stolicą NWT jest Yellowknife, słynące ze złotonośnych i diamentowych złóż oraz zórz polarnych."
    },
    {
        "id": 73,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Stolicą terytorium Jukon (Yukon), znanego z gorączki złota nad rzeką Klondike, jest:",
        "options": [
            "Mayo",
            "Dawson City",
            "Watson Lake",
            "Whitehorse"
        ],
        "correct": 3,
        "explanation": "Stolicą Jukonu jest Whitehorse (przeniesiona z Dawson City w 1953 roku)."
    },
    {
        "id": 74,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Które prowincje Kanady wchodzą w skład tzw. Prowincji Prerii (Prairie Provinces)?",
        "options": [
            "Saskatchewan, Manitoba, Ontario",
            "Kolumbia Brytyjska, Alberta, Jukon",
            "Alberta, Saskatchewan, Manitoba",
            "Ontario, Quebec, Nowy Brunszwik"
        ],
        "correct": 2,
        "explanation": "Prowincje Prerii to Alberta, Saskatchewan i Manitoba – rolnicze serce kanadyjskiej uprawy zbóż."
    },
    {
        "id": 75,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Cztery prowincje leżące nad Oceanem Atlantyckim (Nowy Brunszwik, Nowa Szkocja, PEI i Nowa Fundlandia) określa się wspólnie jako:",
        "options": [
            "Prowincje Atlantyckie (Atlantic Canada)",
            "Kraina Wielkich Jezior",
            "Terytoria Wschodnie",
            "Kanada Arktyczna"
        ],
        "correct": 0,
        "explanation": "Atlantic Canada (Prowincje Atlantyckie) obejmuje 4 prowincje nadmorskie nad Oceanem Atlantyckim."
    },
    {
        "id": 76,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Główna lądowa granica między zachodnią częścią Kanady a USA (od Jeziora Leśnego po Cieśninę Georgia) biegnie wzdłuż równoleżnika:",
        "options": [
            "54°40'N",
            "45°N",
            "49°N",
            "42°N"
        ],
        "correct": 2,
        "explanation": "Równoleżnik 49°N stanowi najdłuższy prostoliniowy odcinek nieufortyfikowanej granicy międzynarodowej na świecie, ustalony traktatami z 1818 i 1846 roku."
    },
    {
        "id": 77,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Który stan USA dzieli najdłuższą granicę lądową z Kanadą (aż 2475 km)?",
        "options": [
            "Waszyngton",
            "Nowy Jork",
            "Montana",
            "Alaska"
        ],
        "correct": 3,
        "explanation": "Granica lądowa Alaski z Jukonem i Kolumbią Brytyjską liczy aż 2475 km (1538 mil)."
    },
    {
        "id": 78,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Spośród 48 kontynentalnych stanów USA (\"Lower 48\"), który ma najdłuższą granicę lądową z Kanadą?",
        "options": [
            "Waszyngton",
            "Montana",
            "Dakota Północna",
            "Nowy Jork"
        ],
        "correct": 1,
        "explanation": "Montana ma najdłuższą granicę z Kanadą spośród stanów kontynentalnych – aż 877 km (545 mil) z Kolumbią Brytyjską, Albertą i Saskatchewan."
    },
    {
        "id": 79,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Ile stanów USA bezpośrednio graniczy z terytorium Kanady (lądowo lub przez wody Wielkich Jezior)?",
        "options": [
            "10",
            "15",
            "13",
            "8"
        ],
        "correct": 2,
        "explanation": "Dokładnie 13 stanów: Alaska, Waszyngton, Idaho, Montana, Dakota Północna, Minnesota, Wisconsin (przez jezioro), Michigan, Ohio (przez jezioro), Pensylwania (przez jezioro), Nowy Jork, Vermont, New Hampshire, Maine."
    },
    {
        "id": 80,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Rzeka Rio Grande stanowi naturalną granicę między USA (głównie stanem Teksas) a:",
        "options": [
            "Kubą",
            "Nowym Meksykiem",
            "Kanadą",
            "Meksykiem"
        ],
        "correct": 3,
        "explanation": "Rzeka Rio Grande (w Meksyku znana jako Río Bravo) wyznacza południową granicę Teksasu z Meksykiem."
    },
    {
        "id": 81,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Która rzeka stanowi naturalną granicę oddzielającą stany Waszyngton i Oregon na północnym zachodzie USA?",
        "options": [
            "Rzeka Snake",
            "Rzeka Kolumbia",
            "Rzeka Kolorado",
            "Rzeka Missouri"
        ],
        "correct": 1,
        "explanation": "Rzeka Kolumbia (Columbia River) stanowi znaczną część granicy między stanami Waszyngton i Oregon."
    },
    {
        "id": 82,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Wodospad Niagara leży na granicy kanadyjskiej prowincji Ontario oraz amerykańskiego stanu:",
        "options": [
            "Pensylwania",
            "Nowy Jork",
            "Ohio",
            "Michigan"
        ],
        "correct": 1,
        "explanation": "Wodospad Niagara leży na rzece Niagara łączącej jezioro Erie z jeziorem Ontario, na granicy stanu Nowy Jork i prowincji Ontario."
    },
    {
        "id": 83,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Point Roberts to niezwykła eksklawa lądowa USA, do której można dojechać lądem wyłącznie przez terytorium Kanady. Do którego stanu USA należy?",
        "options": [
            "Alaska",
            "Minnesota",
            "Waszyngton",
            "Maine"
        ],
        "correct": 2,
        "explanation": "Point Roberts leży na południe od 49. równoleżnika na półwyspie Tsawwassen i należy do hrabstwa Whatcom w stanie Waszyngton."
    },
    {
        "id": 84,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Północno-Zachodni Kąt (Northwest Angle) nad Jeziorem Leśnym to jedyna część przyległych stanów USA na północ od 49°N. Należy do stanu:",
        "options": [
            "Minnesota",
            "Michigan",
            "Wisconsin",
            "Dakota Północna"
        ],
        "correct": 0,
        "explanation": "Northwest Angle należy do stanu Minnesota i jest odciętą enklawą dostępną lądem tylko przez kanadyjską Manitobę."
    },
    {
        "id": 85,
        "type": "choice",
        "category": "Geografia fizyczno-administracyjna",
        "question": "Najwyższy szczyt Stanów Zjednoczonych i całej Ameryki Północnej (Denali, 6190 m n.p.m.) leży w stanie:",
        "options": [
            "Waszyngton",
            "Kalifornia",
            "Kolorado",
            "Alaska"
        ],
        "correct": 3,
        "explanation": "Denali (dawniej Mount McKinley) leży w Parku Narodowym Denali w środkowej części Alaski."
    },
    {
        "id": 86,
        "type": "choice",
        "category": "Geografia fizyczno-administracyjna",
        "question": "Najwyższy szczyt Kanady – Góra Logan (Mount Logan, 5959 m n.p.m.) – leży w jednostce:",
        "options": [
            "Terytorium Jukon",
            "Kolumbia Brytyjska",
            "Alberta",
            "Terytoria Północno-Zachodnie"
        ],
        "correct": 0,
        "explanation": "Mount Logan leży w Parku Narodowym Kluane na terenie terytorium Jukon."
    },
    {
        "id": 87,
        "type": "choice",
        "category": "Geografia fizyczno-administracyjna",
        "question": "Najgłębsza depresja i najgorętsze miejsce w Ameryce Północnej (Dolina Śmierci, -86 m p.p.m.) znajduje się w stanie:",
        "options": [
            "Nevada",
            "Nowy Meksyk",
            "Arizona",
            "Kalifornia"
        ],
        "correct": 3,
        "explanation": "Dolina Śmierci (Death Valley) oraz Badwater Basin leżą we wschodniej Kalifornii."
    },
    {
        "id": 88,
        "type": "choice",
        "category": "Geografia fizyczno-administracyjna",
        "question": "Wielki Kanion rzeki Kolorado (Grand Canyon) znajduje się w całości w stanie:",
        "options": [
            "Kolorado",
            "Utah",
            "Nevada",
            "Arizona"
        ],
        "correct": 3,
        "explanation": "Wielki Kanion Kolorado znajduje się w północnej części stanu Arizona."
    },
    {
        "id": 89,
        "type": "choice",
        "category": "Geografia fizyczno-administracyjna",
        "question": "Najstarszy park narodowy na świecie – Yellowstone – leży głównie w granicach stanu:",
        "options": [
            "Idaho",
            "Wyoming",
            "Montana",
            "Kolorado"
        ],
        "correct": 1,
        "explanation": "Aż 96% powierzchni Yellowstone leży w stanie Wyoming (3% w Montanie i 1% w Idaho)."
    },
    {
        "id": 90,
        "type": "choice",
        "category": "Stany USA i ich stolice",
        "question": "Stolicą stanu Karolina Północna (będącą częścią Research Triangle wraz z Durham i Chapel Hill) jest:",
        "options": [
            "Charlotte",
            "Raleigh",
            "Greensboro",
            "Winston-Salem"
        ],
        "correct": 1,
        "explanation": "Stolicą Karoliny Północnej jest Raleigh."
    },
    {
        "id": 91,
        "type": "choice",
        "category": "Symbole i ciekawostki stanowe",
        "question": "Dlaczego Teksas nosi oficjalny przydomek \"The Lone Star State\" (Stan Samotnej Gwiazdy)?",
        "options": [
            "Bo ma tylko jedno duże miasto",
            "Na pamiątkę okresu, gdy był niepodległą republiką (1836–1845)",
            "Na cześć pierwszego gubernatora",
            "Bo na niebie widać tam tylko jedną jasną gwiazdę"
        ],
        "correct": 1,
        "explanation": "Teksas przez 9 lat po wyzwoleniu spod władzy Meksyku był niepodległym państwem (Republika Teksasu) z flagą z jedną gwiazdą."
    },
    {
        "id": 92,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Zatoka Hudsona – ogromne morze śródlądowe w Kanadzie – otoczona jest przez prowincje i terytorium. Która prowincja NIE ma dostępu do Zatoki Hudsona lub Zatoki Jamesa?",
        "options": [
            "Quebec",
            "Ontario",
            "Saskatchewan",
            "Manitoba"
        ],
        "correct": 2,
        "explanation": "Saskatchewan jest prowincją całkowicie śródlądową, bez dostępu do oceanu czy Zatoki Hudsona."
    },
    {
        "id": 93,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Łańcuch wysp wulkanicznych ciągnących się na zachód od Alaski w stronę Azji to:",
        "options": [
            "Aleuty (Aleutian Islands)",
            "Hawaje",
            "Wyspy Królowej Elżbiety",
            "Florida Keys"
        ],
        "correct": 0,
        "explanation": "Aleuty (Aleutian Islands) to wyspy należące do Alaski, rozdzielające Morze Beringa od Pacyfiku."
    },
    {
        "id": 94,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który z Wielkich Jezior Ameryki Północnej leży W CAŁOŚCI w granicach Stanów Zjednoczonych (nie graniczy z Kanadą)?",
        "options": [
            "Jezioro Huron",
            "Jezioro Erie",
            "Jezioro Górne",
            "Jezioro Michigan"
        ],
        "correct": 3,
        "explanation": "Jezioro Michigan jest jedynym z pięciu Wielkich Jezior, które leży całkowicie w granicach USA."
    },
    {
        "id": 95,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Słynny Park Narodowy Banff oraz Lake Louise znajdują się w kanadyjskiej prowincji:",
        "options": [
            "Kolumbia Brytyjska",
            "Alberta",
            "Quebec",
            "Ontario"
        ],
        "correct": 1,
        "explanation": "Banff leży w prowincji Alberta w paśmie kanadyjskich Gór Skalistych."
    },
    {
        "id": 96,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "W którym stanie znajduje się słynny przylądek Canaveral (Cape Canaveral) i Centrum Kosmiczne Kennedy’ego?",
        "options": [
            "Teksas",
            "Kalifornia",
            "Floryda",
            "Karolina Północna"
        ],
        "correct": 2,
        "explanation": "Cape Canaveral i Kennedy Space Center leżą na wschodnim wybrzeżu Florydy."
    },
    {
        "id": 97,
        "type": "choice",
        "category": "Struktura administracyjna USA",
        "question": "Który stan USA ma przydomek \"The Sunshine State\" (Słoneczny Stan)?",
        "options": [
            "Kalifornia",
            "Hawaje",
            "Floryda",
            "Arizona"
        ],
        "correct": 2,
        "explanation": "Oficjalnym przydomkiem Florydy jest \"The Sunshine State\" (od 1970 roku na tablicach rejestracyjnych)."
    },
    {
        "id": 98,
        "type": "choice",
        "category": "Podział administracyjny Kanady",
        "question": "Miasto Calgary w prowincji Alberta słynie na świecie z corocznego wielkiego festiwalu kowbojskiego o nazwie:",
        "options": [
            "Wild West Expo",
            "Yukon Quest",
            "Calgary Stampede",
            "Rodeo Fiesta"
        ],
        "correct": 2,
        "explanation": "Calgary Stampede to jedno z największych rodeo i festiwali kultury Dzikiego Zachodu na świecie."
    },
    {
        "id": 99,
        "type": "choice",
        "category": "Granice i geografia polityczna",
        "question": "Zatoka oceaniczna słynąca z największych pływów morskich świata (do 16 metrów), leżąca między Nowym Brunszwikiem a Nową Szkocją, to:",
        "options": [
            "Zatoka Chesapeake",
            "Zatoka Fundy",
            "Zatoka Hudsona",
            "Zatoka Świętego Wawrzyńca"
        ],
        "correct": 1,
        "explanation": "Zatoka Fundy (Bay of Fundy) odznacza się najwyższymi pływami morskimi na kuli ziemskiej."
    },
    {
        "id": 100,
        "type": "choice",
        "category": "Podsumowanie podziału administracyjnego",
        "question": "Gdyby połączyć wszystkie stany USA (50) oraz prowincje (10) i terytoria (3) Kanady, ile głównych jednostek administracyjnych 1. rzędu tworzą te dwa kraje?",
        "options": [
            "63",
            "60",
            "70",
            "65"
        ],
        "correct": 0,
        "explanation": "50 stanów USA + 10 prowincji Kanady + 3 terytoria Kanady = dokładnie 63 jednostki administracyjne pierwszego rzędu (oraz D.C. i terytoria zamorskie)."
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUIZ_QUESTIONS;
}
