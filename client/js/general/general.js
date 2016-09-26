
'use strict';

( function( angular ){

	var general = angular.module( "general", [
	]);

	general.service( "server", [ "$http", function( $http ){
		this.endpoints = {
			SET_COMMENT 	: "api/comments",
			GET_COMMENTS	: "api/comments"
		};

		this.templates = {
			comment 		: "html/comment.html",
			comments 		: "html/comments.html",
			comments_form 	: "html/comments_form.html",
			comments_list 	: "html/comments_list.html"
		};

		this.get = function( url ){
			return $http.get( url );
		};

		this.set = function( url, data ){
			return $http.post( url, data );
		};

	}]);

})( angular );

