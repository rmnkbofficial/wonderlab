//this is the login route 
var express = require('express');
var router = express.Router();
var user = require('../controllers/users');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('users', {"title": "Log in"});
});

router.post('/', user.login);

module.exports = router;
