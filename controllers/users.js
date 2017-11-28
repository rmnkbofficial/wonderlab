/* CONTROLLER: RENDER LOGIN PAGE. */
var User = require('../models/users');
exports.list = function(req, res, next) {
User.find({}, function (err, result) {
if (err) return next (err)
res.render('users',
{ 'title': 'Express', 'data': result })
})
};
