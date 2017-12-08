var express = require('express');
var router = express.Router();
var quiz = require('../controllers/questions')


router.post('/', quiz.thanks);

module.exports = router;
