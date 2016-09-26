"use strict";

let Redis 	= require( "./redis" ),
	md5 	= require( 'md5' );

class Comments {
	constructor(){
		this.DB = new Redis();
	}

	get( req, res ){
		this.DB.get( "comments", true ).then( res.json.bind(res) );
	}

	set( req, res ){
		req.body.imageHash = md5(req.body.email.trim().toLowerCase());

		this.DB.get( "comments" )
			.then( ( comments ) => {
				comments = comments || [];

				comments.push( req.body );
				this.DB.set( "comments", comments );

				res.json( req.body );
			});
	}
}

module.exports = Comments;