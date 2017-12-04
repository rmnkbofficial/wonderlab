/*MODEL: get Questions from DB*/
var mongoose = require('mongoose');
var config = require('../config');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    
    questionNumber: {
    type: Number
},
    
    question: {
    type: String
}
});


QuestionSchema.statics.getQuestion = function (id, callback) {
this.findOne({questionNumber: id}).exec(function (err, question) {
      if (err) {
        console.log("in the model" + err);
        return question;
      }
      
      var text = question.question;
      console.log("the question is: " + text);

      return callback(text);
    
 })};
      

module.exports = mongoose.model('Question', QuestionSchema);