/* GET users listing. */
var model = require('../model/users');
exports.list= function(req, res, next) {
var result = model.getAll( function(result) {
res.render('users',
{ 'title': 'Express', 'data': result });
})}
