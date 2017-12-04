var express = require('express');
var router = express.Router();
var quiz = require('../controllers/questions')

/* GET question listing. */

router.get('/', quiz.question);

module.exports = router;
