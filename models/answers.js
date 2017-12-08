/*MODEL: get Questions from DB*/
var mongoose = require('mongoose');
var config = require('../config');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
    
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
        
    },
    
    questionNumber: {
    type: Number
},
    
    question: {
        type: String
},
    response: {
        type: Object
    }
});

      

module.exports = mongoose.model('Answer', AnswerSchema);