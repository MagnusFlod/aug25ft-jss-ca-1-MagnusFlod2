// This is the app.js for the Course-assignment for JSS-servers!
var memesApiFile = require('./memesAPI');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var axios = require('axios');
var app = express();

var memesRouter = require('./routes/memes');

function loadMemes()
{
	// Getting the API-data
	axios.get('http://jss.restapi.co.za/memes')
	// Sending the resultet data as first argument(response)
	.then(function (response)
	{
		// Calling the function to the memesAPI-file and puts the memes into the array of memes
		memesApiFile.setMemes(response.data.memes);
		console.log('Memes loaded');
	});
}

loadMemes();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.use('/', indexRouter);
app.use('/memes', memesRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next)
{
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next)
{
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;

