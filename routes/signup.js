//this is the signup route
var express = require('express');
var router = express.Router();
var user = require('../controllers/users')

/* GET signup page. */
router.get('/', function(req, res, next) {
  res.render('signup', {"title": "Sign up"});
});

router.post('/', user.register);

module.exports = router;
