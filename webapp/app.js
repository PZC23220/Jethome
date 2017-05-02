var express = require('express');
var path = require('path');
var log4js = require('log4js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var router = require('./router');
var api_v1 = require('./api/v1');

app.set('trust proxy', true);

// logger
log4js.configure({
    appenders: [
        { type: 'console' }
    ],
    replaceConsole: true
});
var logger = log4js.getLogger('debug');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// init router
app.use('/', router);
app.use('/api/v1/', api_v1);


// catch 404 and forward to error handler
app.get('/favicon.ico', function(req, res, next){
    res.status(404);
});
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
