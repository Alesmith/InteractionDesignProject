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
    points: 40,
    anonCode: "FJWEqAS",
    answers: [{
      data: "Att underlätta att >-hålla databasen konsistens är det viktigaste skälet för normalisering.-< Ett fakta på endast ett ställe gör att det blir enklare att underhålla databaser, framför allt map uppdateringar, borttag och inlägg. Sk. uppdateringsanomalier inträffar vid för lågt normaliserade tabeller. Ett exempel är om man lagrar telefonnummer till en lärare i en tabell som handlar om de kurser denna lärare har. Tar man bort den sista kursen en lärare har försvinner även alla personuppgifter om läraren. Får läraren en nytt telefonnummer måste man ändra i alla kurstupler där denna lärare förekommer. Etc. >-En annan fördel är att databasen (oftast) blir mindre utrymmeskrävande-<. Även om man faktiskt inför en viss kontrollerad redundans i form av främmande nycklar så kommer utrymmet för dessa data att ta mindre plats jämfört med att lagra redundant information som t ex i exemplet med kurser och telefonnummer ovan. Har man långa nycklar i kombination med korta övriga attribut och få rader i tabellerna kan dock databasen ta större plats att lagra om man normaliserar. Att joina tabeller tar dock tid, i en övernormaliserad databas (där man t ex lagrar allt i binära tabeller med nyckeln plus endast ett attribut till) måste man läsa samman flera tabeller för att sammanställa information som gäller en användarfråga som spänner över flera tabeller. Detta tar vanligen längre tid och kräver mer komplicerad optimering än att hämta data från endast en tabell.",
      points: 7,
      comments: [
        {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
        {data: "Försök att utveckla mer.", color: "#bbbbff"}
      ]
    }]

  },
  {
    metaData: 2,
    writtenBy: 1,
    points: 40,
    anonCode: "FJWEqAS",
    grade: "VG",
    answers: [{
      data: "Att underlätta att >-hålla databasen konsistens är det viktigaste skälet för normalisering.-< Ett fakta på endast ett ställe gör att det blir enklare att underhålla databaser, framför allt map uppdateringar, borttag och inlägg. Sk. uppdateringsanomalier inträffar vid för lågt normaliserade tabeller. Ett exempel är om man lagrar telefonnummer till en lärare i en tabell som handlar om de kurser denna lärare har. Tar man bort den sista kursen en lärare har försvinner även alla personuppgifter om läraren. Får läraren en nytt telefonnummer måste man ändra i alla kurstupler där denna lärare förekommer. Etc. >-En annan fördel är att databasen (oftast) blir mindre utrymmeskrävande-<. Även om man faktiskt inför en viss kontrollerad redundans i form av främmande nycklar så kommer utrymmet för dessa data att ta mindre plats jämfört med att lagra redundant information som t ex i exemplet med kurser och telefonnummer ovan. Har man långa nycklar i kombination med korta övriga attribut och få rader i tabellerna kan dock databasen ta större plats att lagra om man normaliserar. Att joina tabeller tar dock tid, i en övernormaliserad databas (där man t ex lagrar allt i binära tabeller med nyckeln plus endast ett attribut till) måste man läsa samman flera tabeller för att sammanställa information som gäller en användarfråga som spänner över flera tabeller. Detta tar vanligen längre tid och kräver mer komplicerad optimering än att hämta data från endast en tabell.",
      points: 7,
      comments: [
        {data: "Detta är ett inkonsistent svar.", color: "#bbbbbb"},
        {data: "Försök att utveckla mer.", color: "#bbbbff"}
      ]
    }]

  }
];
var exams = [
  {
    courseCode: 'TIG164',
    name: "Affärssystem",
    maxPoints: 60,
    points: 7.5,
    date: '2015-05-18T10:20:01.102Z',
    questions: [{data: "Hello?", points: 10}],
    examinator: "Kjell Engberg"
  }, {

    courseCode: 'TIG098',
    name: "E-Business",
    maxPoints: 60,
    points: 7.5,
    date: '2015-05-18T10:20:01.102Z',
    questions: [{data: "Hello?", points: 10}],
    examinator: "Kjell Engberg"
  }, {
    courseCode: 'TIG059',
    name: "Systemprojekt",
    maxPoints: 60,
    points: 7.5,
    date: '2015-05-18T10:20:01.102Z',
    questions: [{data: "Hello?", points: 10}],
    examinator: "Kjell Engberg"
  }, {
    courseCode: 'TIG058',
    name: "Databasteknik",
    maxPoints: 60,
    points: 7.5,
    date: '2015-05-18T10:20:01.102Z',
    questions: [{data: "Hello?", points: 10}],
    examinator: "Kjell Engberg"
  }, {
    courseCode: 'TIG016',
    name: "Verksamheter och information",
    maxPoints: 60,
    points: 7.5,
    date: '2015-05-18T10:20:01.102Z',
    questions: [{data: "Hello?", points: 10}],
    examinator: "Kjell Engberg"
  }];
var users = [{
  username: "gusfaraal", password: "123123",
  name: "Fridolf Karlsson",
  birthday: "1994-08-09-2343",
  email:"gusfaraal@gu.student.se"
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
