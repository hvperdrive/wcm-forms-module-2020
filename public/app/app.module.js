"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.6.factories", []);
	angular.module("wcm-forms-sna_1.1.6.services", ["wcm-forms-sna_1.1.6.factories"]);
	angular.module("wcm-forms-sna_1.1.6.controllers", ["wcm-forms-sna_1.1.6.services"]);
	angular.module("wcm-forms-sna_1.1.6.directives", ["wcm-forms-sna_1.1.6.controllers"]);

	angular.module("wcm-forms-sna_1.1.6", [

		"pelorus.services",

		"wcm-forms-sna_1.1.6.factories",
		"wcm-forms-sna_1.1.6.services",
		"wcm-forms-sna_1.1.6.controllers",
		"wcm-forms-sna_1.1.6.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

