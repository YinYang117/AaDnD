const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('../../routes/index');
const usersRouter = require('../../routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Error handling
app.use(function(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use(function(error, req, res, next) {
  res.status(error.status || 500);
  res.render('error', { // render not finalized
    message: error.message,
    error: req.app.get('env') === 'development' ? error : {}  // not finalized
  });
});


module.exports = app;
