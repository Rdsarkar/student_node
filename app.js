var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var home= require('./controllers/home');
var login= require('./controllers/login');
var reg= require('./controllers/reg');

var app = express();


//configuration
app.set('view engine', 'ejs');


//middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/abc', express.static('assets'));
app.use('/login',login);
app.use('/reg',reg);
app.use('/home',home);



//routes
app.get('/', function(req, res){
	res.render('login/login');
});


//server startup
app.listen(3500, function(){
	console.log('server started at 3500!');
});