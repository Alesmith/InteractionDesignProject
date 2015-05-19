/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    'login': function (req, res) {
        User.findOne({username: req.body.username, password: req.body.password})
            .exec(function (err, user) {
                console.log(err, user, req.body.username, req.body.password);
                if (user) {
                    req.session.user = user;
                    return res.json(user);
                } else {
                    return res.status(404).json({error: 'Invalid email/password'});
                }
            });
    },
    current: function (req, res) {
        if (req.session.user) {
            return User.findOne({id:req.session.user.id}).exec(function(err,user){
                res.json(user);
            });

        }
        return res.status(404).json({error: 'Not logged in'});
    },
    logout: function(req, res) {
        delete req.session.user;
        return res.json({});
    }
};

