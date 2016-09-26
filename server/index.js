"use strict";

let express = require( 'express' ),
	config 	= require( "./config" ),
	route 	= require( "./route" ),
	app 	= express();

config( app );
route( app );

app.listen(3000, () => {});