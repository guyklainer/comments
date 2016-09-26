"use strict";

let cookieParser 	= require( 'cookie-parser' ),
	bodyParser 		= require( 'body-parser' ),
	express 		= require( 'express' );

module.exports = function( app ){
	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');
	app.use(express.static( __dirname + '/../client'));
	app.locals.pretty = true;
	app.use( cookieParser() );
	app.use( bodyParser.urlencoded({
		extended: true,
		limit	: '10mb'
	}));
	app.use( bodyParser.json({
		limit	: '10mb'
	}));
};
