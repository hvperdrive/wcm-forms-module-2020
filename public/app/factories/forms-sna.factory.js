"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.8.factories")
		.factory("formsSNAFactory", [

			"$resource",
			"configuration",

			function feFactory($resource, configuration) {

				var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel + "forms";
				var factory = {};

				factory = {
                    all: $resource(api),
                    history: $resource(api + "/history/:id", { id: '@id' }),
                    template: $resource(api + "/template/:id", { id: '@id' })
                };

				return factory;
			},
		]);
})(window.angular);

