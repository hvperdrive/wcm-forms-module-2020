"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.7.factories", []);
	angular.module("wcm-forms-sna_1.1.7.services", ["wcm-forms-sna_1.1.7.factories"]);
	angular.module("wcm-forms-sna_1.1.7.controllers", ["wcm-forms-sna_1.1.7.services"]);
	angular.module("wcm-forms-sna_1.1.7.directives", ["wcm-forms-sna_1.1.7.controllers"]);

	angular.module("wcm-forms-sna_1.1.7", [

		"pelorus.services",

		"wcm-forms-sna_1.1.7.factories",
		"wcm-forms-sna_1.1.7.services",
		"wcm-forms-sna_1.1.7.controllers",
		"wcm-forms-sna_1.1.7.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

