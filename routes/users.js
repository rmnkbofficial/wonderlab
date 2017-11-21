var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
var config = require('../config');
config.db(function (err, db) {
if (err) throw err;
db.collection('users').find().toArray(function (err, result) {
if (err) throw err;
res.render('users', { 'title': 'Express',
'data': result });
})})});

module.exports = router;
