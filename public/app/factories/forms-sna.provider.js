"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_0.0.1.factories")
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

