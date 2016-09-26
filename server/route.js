"use strict";

let Comments = require( "./commets" );

Comments = new Comments();

let endpoints = {
	comments : '/api/comments'
};

module.exports = function( app ){
	app.get('/', (req, res) => {
		res.render( 'index');
	});

	app.post( endpoints.comments, Comments.set.bind(Comments) );
	app.get ( endpoints.comments, Comments.get.bind(Comments) );
};