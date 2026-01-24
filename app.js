// This is the app.js for the Course-assignment for JSS-servers!
// This is the 'heart'. The main control-center of this app

// Declaring variables to store all necessary imports from different files and packages
var passport = require('passport');
var initializePassport = require('./passport-config');
var session = require('express-session');
var memesApiFile = require('./memesAPI');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Every route to the relevant file. Like a highway to each destination
var indexRouter = require('./routes/index');
var memesRouter = require('./routes/memes');
var memeRouter = require('./routes/meme');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');

// Acquiring data from external API
var axios = require('axios');

// The application itself
var app = express();


// Loads memes ONCE when the server starts
function loadMemes()
{
	// Getting the API-data
	axios.get('http://jss.restapi.co.za/memes')
	.then(function (response)
	{
		// Putting the memes into the in-memory array
		memesApiFile.setMemes(response.data.memes);
		console.log('Memes loaded');
	});
}

// Run once on server startup
loadMemes();


// View engine setup. First the correct paths, then setting up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Logging requests
app.use(logger('dev'));

// Reads JSON-body
app.use(express.json());

// Reads form data
app.use(express.urlencoded({ extended: false }));

// Reads cookies
app.use(cookieParser());

// This code is like a festival bracelet when entering a festival
app.use(session({
	// Signing session-ID when entering a new session
	secret: 'supersecretkey',
	// No resave if no changes has been made
	resave: false,
	// No empty sessions
	saveUninitialized: false
}));

// Initializing passport configuration (users, strategy, serialize/deserialize)
initializePassport();

// Connecting passport to express
app.use(passport.initialize());

// Connecting passport to session
app.use(passport.session());

// Making login state and user globally available in all EJS views. A middelware function to make sure that the user is authenticated in each .ejs-room
app.use(function(req, res, next)
{
	res.locals.isLoggedIn = req.isAuthenticated();
	res.locals.user = req.user || null;
	next();
});

// Making everything inside the public-folder available directly in the browser
app.use(express.static(path.join(__dirname, 'public')));


// Routes
app.use('/', indexRouter);
app.use('/memes', memesRouter);
app.use('/meme', memeRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);


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