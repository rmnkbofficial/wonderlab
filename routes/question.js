var express = require('express');
var router = express.Router();
var quiz = require('../controllers/questions')

/* GET question listing. */


router.get('/:qid', quiz.question);

router.post('/:qid', quiz.save);


module.exports = router;
