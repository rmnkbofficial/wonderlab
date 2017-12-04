var model = require('../models/questions');

exports.question = function(req, res) {
model.getQuestion(1, function(result){
    res.render('question1', {"title": "Wondergirl Application", "question": result })}
)};
