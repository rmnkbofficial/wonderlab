/*MODEL: get Users Data from DB*/
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var UserSchema = new Schema({
firstName: String,
lastName: String,
email: String,
login: {type: String, required: true},
password: String
});

UserSchema.methods.generateNewPassword = function (cb){
    this.password = 'new';
    this.save(cb)
};

module.exports = mongoose.model('User', UserSchema);