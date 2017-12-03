process.env.NODE_ENV = process.env.NODE_ENV
|| 'development';
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash    = require('connect-flash');
var session = require('express-session');
var app = express();

var index = require('./routes/index');
var about = require('./routes/about');
var users = require('./routes/users');
var signup = require('./routes/signup');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(session(
  { secret: 'ramarama', 
  resave: true,
  saveUninitialized: false
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/', index);
app.use('/about', about);
app.use('/users', users);
app.use('/signup', signup);
var error = require('./config/error-handler');
error(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = function() {
    let app = express();
    // change of dir!
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    if (process.env.NODE_ENV === 'development') {
    app.use(logger('morgan'));
    } else if (process.env.NODE_ENV === 'production') {
    }
    return app;
};
//const express = require('./config/express');
var mongoose = require('./config/mongoose');
//var app = express();


module.exports = app;

