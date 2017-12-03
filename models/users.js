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

    birthday: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
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


UserSchema.methods.getUserById = function(id, callback){
	this.findById(id, callback);
}

UserSchema.methods.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

UserSchema.statics.authenticate = function (email, password, callback) {
    this.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) throw err;
        else if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

module.exports = mongoose.model('User', UserSchema);