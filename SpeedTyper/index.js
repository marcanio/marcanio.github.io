var express=require("express");
var session = require('express-session');
var bodyParser=require('body-parser');
var path = require('path');
var http = require('http');
var url = require('url');
var router = express.Router();
var flash = require('connect-flash');
var connection = require('./config');
var app = express();

var authenticateController=require('./controllers/authenticate-controller');
var registerController=require('./controllers/register-controller');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
	secret: 'speedtyper',
	resave: true,
	saveUninitialized: true
}));
app.use(flash());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules')));

require('./router')(app); 
app.engine('.html', require('ejs').renderFile);
app.set('views', __dirname);
app.set('view engine', 'html');


/* routes to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/authenticate-controller', authenticateController.authenticate);
app.listen(8012);