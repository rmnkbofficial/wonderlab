/*MODEL: get Questions from DB*/
var mongoose = require('mongoose');
var config = require('../config');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
    
    questionNumber: {
    type: Number
},
    
    question: {
    type: String
},
    option1: { 
        type: String
},

    option2: { 
        type: String
},

    option3: { 
        type: String
},
    option4: { 
        type: String
},
    option5: { 
        type: String
}
});

QuizSchema.statics.getQuestion = function (id, callback) {
this.findOne({questionNumber: id}).exec(function (err, question) {
      if (err) {
        console.log("in the model" + err)
      };
      
      var text = question.option3;
      console.log("the question option3 is: " + text);

    return callback(question);
    
 })};
      

module.exports = mongoose.model('Question', QuizSchema);