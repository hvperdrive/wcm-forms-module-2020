"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.0.0.factories", []);
	angular.module("wcm-forms-sna_1.0.0.services", ["wcm-forms-sna_1.0.0.factories"]);
	angular.module("wcm-forms-sna_1.0.0.controllers", ["wcm-forms-sna_1.0.0.services"]);
	angular.module("wcm-forms-sna_1.0.0.directives", ["wcm-forms-sna_1.0.0.controllers"]);

	angular.module("wcm-forms-sna_1.0.0", [

		"pelorus.services",

		"wcm-forms-sna_1.0.0.factories",
		"wcm-forms-sna_1.0.0.services",
		"wcm-forms-sna_1.0.0.controllers",
		"wcm-forms-sna_1.0.0.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

