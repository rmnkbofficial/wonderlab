/*MODEL: get User Data from DB*/
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    
    firstName: {
    type: String,
    required: true
},
    
    lastName: {
    type: String,
    required: true,
    trim: true
},
    username: {
    type: String,
    unique: true,
    required: true,
    trim: true
},

    instagram: {
    type: String,
    required: true
},
    
    email: {
    type: String,
    unique: true,
    required: true,
    trim: true
},
    password: {
    type: String,
    required: true,
}
});


UserSchema.methods.createUser = function(callback){
	bcrypt.genSalt(10, function(err, salt) {
	    if (err) throw (err);
	    else
	    bcrypt.hash(this.password, salt, function(err, hash) {
	        if (err) throw (err);
	        else
	        this.password = hash;
	        this.save(callback);
	    });
	});
}

UserSchema.methods.getUserByUsername = function(username, callback){
	var query = {username: username};
	this.findOne(query, callback);
}

UserSchema.methods.getUserById = function(id, callback){
	this.findById(id, callback);
}

UserSchema.methods.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports = mongoose.model('User', UserSchema);