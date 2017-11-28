var express = require('express');
var router = express.Router();
var login = require('../controllers/users');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('users', {"title": "Log in"});
});

module.exports = router;
