"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.4.factories", []);
	angular.module("wcm-forms-sna_1.1.4.services", ["wcm-forms-sna_1.1.4.factories"]);
	angular.module("wcm-forms-sna_1.1.4.controllers", ["wcm-forms-sna_1.1.4.services"]);
	angular.module("wcm-forms-sna_1.1.4.directives", ["wcm-forms-sna_1.1.4.controllers"]);

	angular.module("wcm-forms-sna_1.1.4", [

		"pelorus.services",

		"wcm-forms-sna_1.1.4.factories",
		"wcm-forms-sna_1.1.4.services",
		"wcm-forms-sna_1.1.4.controllers",
		"wcm-forms-sna_1.1.4.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

