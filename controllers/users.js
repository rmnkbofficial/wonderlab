/* CONTROLLER: RENDER LOGIN PAGE. */
var User = require('../models/users');
var mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var session = require('express-session')


//register logic
exports.register = function(req, res) {
    
    
let firstName = req.body.firstname;
let lastName = req.body.lastname;
let pw = req.body.password;
let insta = req.body.instagram;
let email = req.body.email;
let gender = req.body.gender
let birthday = req.body.month + " " + req.body.day + " " + req.body.year;

// hash pw and store user
bcrypt.hash(pw, 10, function(err, hash) {
    if (err) console.log(err);
    else User.create({firstName: firstName, lastName: lastName, password: pw, instagram: insta, email: email, birthday: birthday, gender: gender, password : hash})
    res.render('users', {"title": "Login"})
});
console.log("user created")
}


//login logic
exports.login = function(req, res){
    let id = req.body.email
    let pw = req.body.password
    
    bcrypt.hash(pw, 10, function(err, hash) {
    if (err) console.log(err)
    else
    User.authenticate(id, pw, function(err, result){
    if (err) {
    console.log(err);
    }
    if (result == undefined) {
          res.render('users', { "title": "Login"});
    }
    else res.render('welcome', {"title": "Welcome", "name": result.firstName }) 
    
    })
    });
}