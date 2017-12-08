var model = require('../models/questions');
var Answer = require('../models/answers');
var session = require('express-session');
var async = require('async');
var vw;


exports.question = function(req, res) {
model.getQuestion(req.params.qid, function(qu){
    if (qu.type === "scroll") {
       vw = "qscroll"
    }
    console.log(req.params.qid);
    res.render("question1", {"title": "Wondergirl Application", "question": qu, qid: req.params.qid})}
)};

exports.save = function(req, res){
    async.series([function(callback){
    let user = req.body.user;
    let answer = req.body.params;
    console.log(answer, user);
    Answer.create({user: req.session.user, questionNumber: req.params.qid, question: req.body.question, response: req.body.params}); 
    callback();
    }, function(callback){
    let nq = req.params.qid;
    nq++;
    model.getQuestion(nq, function(qu){
    res.render("question" + nq + "", {"title": "Wondergirl Application", "question": qu, qid: nq});
    console.log(nq); 
    callback(nq);})}], function(err, result){
        console.log(result);
        if (err) console.log("the error is: " + err);
    })
}

exports.thanks = function(req, res){
    let user = req.body.user;
    let answer = req.body.params;
    console.log(answer, user);
    Answer.create({user: req.session.user, questionNumber: 3, response: answer}, function(){
        res.render("thanks", {"title": "You're done!"});
    })
   
}
   
