/* CONTROLLER: GET users listing from MODEL. */
var User = require('../model/users');
exports.list= function(req, res, next) {
User.find({}, function (err, result) {
if (err) return next(err)
res.render('users',
{ 'title': 'Express', 'data': result })
})
}

