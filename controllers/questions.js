var model = require('../models/questions');

exports.display = function(req, res) {
model.find().question(1).exec(function(result){
    console.log(result);
    res.render('question1', {"title": "WonderGirl Application", "question": result});
})};
