/* CONTROLLER: GET courses listing from MODEL. */
var model = require('../model/courses');
exports.list= function(req, res, next) {
var result = model.getAll( function(result) {
res.render('courses',
{ 'title': 'Express', 'data': result });
})}

