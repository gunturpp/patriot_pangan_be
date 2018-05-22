
var jwt = require('jsonwebtoken');
var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// https://www.joshmorony.com/building-a-review-app-with-ionic-2-mongodb-node/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

var mongoose =  require('mongoose');
var mongo =  require('mongodb');
// nama db nya dan dikonekin
// mongoose.connect('mongodb://localhost/db_haha');
// var db = mongoose.connection;
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://", () =>{
// console.log('connected to mongodb');
// });
// var users = require('../routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
