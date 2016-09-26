"use strict";

( function( angular ){
	var comments_form = angular.module( "directives.comments.comments_form", [
	]);

	comments_form.service( "commentsFormService", [ "server",
		function( server ) {
			this.template = server.templates.comments_form;
		}]);

	comments_form.directive( "commentsForm", [ "commentsFormService",
		function( service ) {

			return {
				replace 		: true,
				templateUrl 	: service.template,
				scope			: true,
				require 		: "^comments",

				link : function( scope, element, attrs, comments ){

					scope.submit = function(){
						comments.addComment( scope.data );
						scope.data = {};
					}
				}
			}
		}]);

})( angular );