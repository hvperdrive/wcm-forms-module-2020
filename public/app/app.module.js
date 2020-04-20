"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.3.factories", []);
	angular.module("wcm-forms-sna_1.1.3.services", ["wcm-forms-sna_1.1.3.factories"]);
	angular.module("wcm-forms-sna_1.1.3.controllers", ["wcm-forms-sna_1.1.3.services"]);
	angular.module("wcm-forms-sna_1.1.3.directives", ["wcm-forms-sna_1.1.3.controllers"]);

	angular.module("wcm-forms-sna_1.1.3", [

		"pelorus.services",

		"wcm-forms-sna_1.1.3.factories",
		"wcm-forms-sna_1.1.3.services",
		"wcm-forms-sna_1.1.3.controllers",
		"wcm-forms-sna_1.1.3.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

