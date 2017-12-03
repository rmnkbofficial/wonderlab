var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    console.log(req)
  res.render('about', {"title": "about"});
});


module.exports = router;
