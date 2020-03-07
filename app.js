var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');

//require controllers
var landing= require('./controllers/landing')
var home= require('./controllers/home');
var login= require('./controllers/login');
var reg= require('./controllers/reg');
var logout=  require('./controllers/logout');
var update=require('./controllers/update');
var enroll_course=require('./controllers/enroll_course');
var view_course=require('./controllers/view_course');
var notice=require('./controllers/notice');
var msg=require('./controllers/msg');
var result=require('./controllers/result');
// var c_delete=require('./controllers/c_delete');
// var notes=require('./controllers/notes');
// var notice=require('./controllers/notice');





var app = express();


//configuration
app.set('view engine', 'ejs');


//middleWare
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret:'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use('/abc', express.static('assets'));
app.use('/landing',landing);
app.use('/login',login);
app.use('/reg',reg);
app.use('/home',home);
app.use('/logout',logout);
app.use('/update',update);
app.use('/enroll_course',enroll_course);
app.use('/view_course',view_course);
app.use('/notice',notice);
app.use('/msg',msg);
app.use('/result',result);
// app.use('/c_delete',c_delete);
// app.use('/notes',notes);
// app.use('/notice',notice);



//routes
app.get('/', function(req, res){
	res.render('index');
});


//server startup
app.listen(3500, function(){
	console.log('server started at 3500!');
});