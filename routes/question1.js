var express = require('express');
var router = express.Router();
var quiz = require('../controllers/questions')

/* GET question listing. */

router.get('/', quiz.display);

module.exports = router;
