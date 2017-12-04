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


QuestionSchema.query.question = function (id, callback) {
return this.find({questionNumber: id}, callback);
 };
      

module.exports = mongoose.model('Question', QuestionSchema);