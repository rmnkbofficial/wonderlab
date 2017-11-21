process.env.NODE_ENV = process.env.NODE_ENV
|| 'development';
var express = require('./config/express');
var app = express();

var index = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/users');
var courses = require('./routes/courses')

app.use('/', index);
app.use('/about', about);
app.use('/users', users);
app.use('/courses', courses);
var error = require('./config/error-handler');
error(app);

module.exports = app;

