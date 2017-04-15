var express = require('express');
/*var home 	= require('../app/routes/home');*/
var load	= require('express-load');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express();
	app.set('port', 8080) //Define porta
	.use(express.static('./public')) //Define páginas estáticas
	.set('view engine', 'ejs') //Define o view template que será utilizado
	.set('views', './app/views') //Define diretório onde serão criada as views

	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())
	.use(require('method-override')());

	/*home(app);*/
	load('controllers', {cwd: 'app'})
	.then('routes')
	.into(app);
	
	return app;
}	