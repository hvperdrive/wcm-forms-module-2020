"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.0.0.factories")
		.factory("formsSNAFactory", [

			"$resource",
			"configuration",

			function feFactory($resource, configuration) {

				var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel;
				var factory = {};

				factory = $resource(api);

				return factory;
			},
		]);
})(window.angular);

