"use strict";

let redisClient	= require( 'redis' ),
	promise		= require( 'bluebird' );

class Redis{
	constructor(){
		this.connection = redisClient.createClient( 6379, "127.0.0.1" );

		this.connection.on('error', function( err ){
			console.error( err );
			process.exit(1);
		});

		this.connection.on( "ready", function(){
			setTimeout( function(){
				console.log( "redis connected" );
			}, 1000);
		});
	}


	get( key ){
		return promise.promisify(this.connection.get).call( this.connection, key ).then(function( data ){
			try {
				return JSON.parse(data);

			} catch(e) {
				return data;
			}
		});
	};

	set( key, value ){
		try {
			value = JSON.stringify(value);
		} catch(e) {
		}

		return promise.promisify(this.connection.set).call( this.connection, key, value );
	}
}

module.exports = Redis;