"use strict";

( function( angular ){
	var comment = angular.module( "directives.comments.comment", [
	]);

	comment.service( "commentService", [ "server",
		function( server ) {
			this.template = server.templates.comment;
		}]);

	comment.directive( "comment", [ "commentService",
		function( service ) {

			return {
				replace 		: true,
				templateUrl 	: service.template,
				scope			: {
					data : "="
				},

				link : function( scope, element, attrs ){

				}
			}
		}]);

})( angular );