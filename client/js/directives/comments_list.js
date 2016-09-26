"use strict";

( function( angular ){
	var comments_list = angular.module( "directives.comments.comments_list", [
	]);

	comments_list.service( "commentsListService", [ "server",
		function( server ) {
			this.template = server.templates.comments_list;
		}]);

	comments_list.directive( "commentsList", [ "commentsListService",
		function( service ) {

			return {
				replace 		: true,
				templateUrl 	: service.template,
				scope			: {
					data : "="
				},

				link : function( scope, element, attrs, comments ){
				}
			}
		}]);

})( angular );