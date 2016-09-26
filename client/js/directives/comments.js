"use strict";

( function( angular ){
	var comments = angular.module( "directives.comments", [
		'directives.comments.comment',
		'directives.comments.comments_form',
		'directives.comments.comments_list'
	]);

	comments.service( "commentsService", [ "server",
		function( server ) {
			var self = this;

			this.comments = [];
			this.template = server.templates.comments;

			this.get = function(){
				var self = this;

				server.get( server.endpoints.GET_COMMENTS ).then( function( response ){
					Array.prototype.push.apply( self.comments, response.data );
				});
			};

			this.set = function( data ){
				server.set( server.endpoints.SET_COMMENT, data ).then( function( response ){
					self.comments.push( response.data );
				});
			};
		}]);

	comments.directive( "comments", [ "commentsService",
		function( service ) {

			return {
				replace 			: true,
				templateUrl 		: service.template,
				scope				: {

				},

				controller : function(){
					this.addComment = service.set;
					return this;

				},

				link : function( scope ){
					scope.service = service;

					service.get();

				}
			}
	}]);

})( angular );