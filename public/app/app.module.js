"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.2.1.factories", []);
	angular.module("wcm-forms-sna_1.2.1.services", ["wcm-forms-sna_1.2.1.factories"]);
	angular.module("wcm-forms-sna_1.2.1.controllers", ["wcm-forms-sna_1.2.1.services"]);
	angular.module("wcm-forms-sna_1.2.1.directives", ["wcm-forms-sna_1.2.1.controllers"]);

	angular.module("wcm-forms-sna_1.2.1", [

		"pelorus.services",

		"wcm-forms-sna_1.2.1.factories",
		"wcm-forms-sna_1.2.1.services",
		"wcm-forms-sna_1.2.1.controllers",
		"wcm-forms-sna_1.2.1.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

