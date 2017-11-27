/*MODEL: get Courses Data from DB*/
var config = require('../config');
exports.getAll = function(callback) {
config.db(function (err, db) {
if (err) throw err
db.collection('courses').find().toArray(function (err, result) {
if (err) throw err
callback(result)
})})};