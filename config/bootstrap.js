/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var writtenExam = [
    {
        metaData: 1,
        writtenBy: 1,
        points: 36,
        anonCode: "FJWEqAS",
        answers: [{
            data: "Då databasen snabbt kommer att växa i storlek (ca 12 miljoner poster/månad) är det extra relevant att sträva efter en så smidig och snabb tabell som möjligt, med vår struktur är en post endast 13 byte stor. Transaktioner kommer att växa med uppskattningsvis 146 Mb per månad (13/1024^2*11800000). Om två likadana fordon passerar samma betalstation under samma minut kommer dessa två transaktioner att vara identiska i systemet, primärnyckeln är alltså inte perfekt, detta är dock inte ett problem då det inte är önskvärt att kunna mäta enskilda fordons passage.",
            points: 7,
            comments: [
                {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                {data: "Försök att utveckla mer.", color: "#bbbbff"}
            ]
        },
            {
                data: "Tid: dimension table Innehåller data om olika tidsenheter som går att koppla till en transaktion. Att nyckeln anges som INT möjliggör att registrera varje enskild minut i över 50 års tid.",
                points: 7,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }, {
                data: "Station: dimension table Innehåller data om vart stationen befinner sig i flera olika nivåer. Tabellen kommer aldrig att inehålla många poster därför kan kolumnerna innehålla text.",
                points: 7,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }, {
                data: "Fordon: dimension table Innehåller data om fordon som kan passera betalstationer. Tabellen innehåller endast attributen klass och drivmedel för att inte beskriva för mycket så att ett enskilt fordon kan identifieras genom att kombinera flera dimensioner.",
                points: 7,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }
        ]

    },
    {
        metaData: 2,
        writtenBy: 1,
        points: 40,
        anonCode: "FJWEqAS",
        grade: "G",
        answers: [{
            data: "Att underlätta att >-hålla databasen konsistens är det viktigaste skälet för normalisering.-< Ett fakta på endast ett ställe gör att det blir enklare att underhålla databaser, framför allt map uppdateringar, borttag och inlägg. Sk. uppdateringsanomalier inträffar vid för lågt normaliserade tabeller. Ett exempel är om man lagrar telefonnummer till en lärare i en tabell som handlar om de kurser denna lärare har. Tar man bort den sista kursen en lärare har försvinner även alla personuppgifter om läraren. Får läraren en nytt telefonnummer måste man ändra i alla kurstupler där denna lärare förekommer. Etc. >-En annan fördel är att databasen (oftast) blir mindre utrymmeskrävande-<. Även om man faktiskt inför en viss kontrollerad redundans i form av främmande nycklar så kommer utrymmet för dessa data att ta mindre plats jämfört med att lagra redundant information som t ex i exemplet med kurser och telefonnummer ovan. Har man långa nycklar i kombination med korta övriga attribut och få rader i tabellerna kan dock databasen ta större plats att lagra om man normaliserar. Att joina tabeller tar dock tid, i en övernormaliserad databas (där man t ex lagrar allt i binära tabeller med nyckeln plus endast ett attribut till) måste man läsa samman flera tabeller för att sammanställa information som gäller en användarfråga som spänner över flera tabeller. Detta tar vanligen längre tid och kräver mer komplicerad optimering än att hämta data från endast en tabell.",
            points: 10,
            comments: [
                {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                {data: "Försök att utveckla mer.", color: "#bbbbff"}
            ]
        },
            {
                data: "Vid de tillfällen då det är trängselskatt registrerar betalstationerna information om datum, tid, betalstation, registreringsnummer samt belopp, detta sker för alla fordon som passerar en betalstation. Identifieringen av bilar sker automatiskt med hjälp av att bilens registreringsskyllt fotograferas och texten i bilden tolkas av en dator. >-Uppgifter som kan identifiera-< en bilist är sekretessbelagda och efter det att skatten är betald (vanligtvis inom 30 dagar) raderas uppgifterna.",
                points: 10,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }, {
                data: "Som tidigare nämnt är informationen om fordonsägare sekretessbelagd, då vi skall lagra data långsiktigt måste den struktureras och maskeras på ett sätt som hedrar sekretessen. För att säkerställa att ett enskilt fordon inte går att identifiera lagras så endast fordonets klass samt drivmedel, klass och drivmedel är en relativt grov indelning och fungerar därmed inte som identifikator även om ett fordon är av unik karaktär.",
                points: 10,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }, {
                data: "En avvägning har gjorts mellan komplexitet, storlek, körbarhet och flexibilitet. Exempelvis är fordon en egen dimension delvis för att det kan finnas fler relevanta attribut att fylla den med, samt så går det nu i klartext att namnge bilklasser utan att storleken på databasen växer. I tabellen “Passage” lagras data om var fordonägarens hemort är (i form av stadsdel), i kombination med vilken betalstation som passeras kan exempelvis data genereras om mellan vilka områden kollektivtrafiken kan behöva byggas ut.",
                points: 10,
                comments: [
                    {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
                    {data: "Försök att utveckla mer.", color: "#bbbbff"}
                ]

            }
        ]

    }
];
var exams = [
    {
        courseCode: 'TIG164',
        name: "Affärssystem",
        maxPoints: 60,
        points: 7.5,
        date: '2015-05-31T10:20:01.102Z',
        questions: [{data: "Hello?", points: 10}],
        examinator: "Kjell Engberg"
    }, {

        courseCode: 'TIG098',
        name: "E-Business",
        maxPoints: 60,
        points: 7.5,
        date: '2015-05-01T10:20:01.102Z',
        questions: [
            {data: "Vad innebär?", points: 15},
            {data: "Vad är ett beslutstödssystem?", points: 15},
            {data: "Vad är NPM?", points: 15},
            {data: "Vad är beslut?", points: 15}
        ],
        examinator: "Kjell Engberg"
    }, {
        courseCode: 'TIG059',
        name: "Systemprojekt",
        maxPoints: 60,
        points: 7.5,
        date: '2015-06-10T10:20:01.102Z',
        questions: [{data: "Hello?", points: 10}],
        examinator: "Kjell Engberg"
    }, {
        courseCode: 'TIG058',
        name: "Databasteknik",
        maxPoints: 60,
        points: 7.5,
        date: '2015-06-10T10:20:01.102Z',
        questions: [{data: "Hello?", points: 10}],
        examinator: "Kjell Engberg"
    }, {
        courseCode: 'TIG016',
        name: "Verksamheter och information",
        maxPoints: 60,
        points: 7.5,
        date: '2015-06-10T10:20:01.102Z',
        questions: [{data: "Hello?", points: 10}],
        examinator: "Kjell Engberg"
    }];
var users = [{
    username: "gusfrikar", password: "123123",
    name: "Fridolf Karlsson",
    birthday: "1994-08-09-2343",
    email: "gusfrikar@gu.student.se"
}];
module.exports.bootstrap = function (cb) {
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your wserver will never lift, since it's waiting on the bootstrap)
    User.find({}).exec(function findCB(err, found) {
        console.log(found);
        if (found.length === 0) {
            console.log("no user");
            User.create(users).exec(function () {
                Exam.create(exams).exec(function () {
                    WrittenExam.create(writtenExam).exec(function () {
                        cb();
                    });
                });
            })
        } else {
            cb();
        }
    });
};
