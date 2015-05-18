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
var exams = [
    {
        courseCode: 'TIG164',
        name: "Affärssystem",
        points: 7.5,
        date: '2015-05-18T10:20:01.102Z'
    }, {

        courseCode: 'TIG098',
        name: "E-Business",
        points: 7.5,
        date: '2015-05-18T10:20:01.102Z'
    }, {
        courseCode: 'Tig059',
        name: "Systemprojekt",
        points: 7.5,
        date: '2015-05-18T10:20:01.102Z'
    }, {
        courseCode: 'Tig058',
        name: "Databasteknik",
        points: 7.5,
        date: '2015-05-18T10:20:01.102Z'
    }, {
        courseCode: 'Tig016',
        name: "Verksamheter och information",
        points: 7.5,
        date: '2015-05-18T10:20:01.102Z'
    }];
module.exports.bootstrap = function (cb) {
    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your wserver will never lift, since it's waiting on the bootstrap)
    User.find({}).exec(function findCB(err, found) {
        console.log(found);
        if (found.length === 0) {
            console.log("no user");
            User.create({username: "gusfaraal", password: "123123"}).exec(function () {
                Exam.create(exams).exec(function () {
                    cb();
                });
            })
        } else {
            cb();
        }
    });
};
