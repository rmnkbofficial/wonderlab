var model = require('../models/questions');


exports.question = function(req, res) {
model.getQuestion(1, function(question){
    res.render('question1', {"title": "Wondergirl Application", "question": question})}
)};


