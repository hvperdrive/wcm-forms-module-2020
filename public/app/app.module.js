"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.2.2.factories", []);
	angular.module("wcm-forms-sna_1.2.2.services", ["wcm-forms-sna_1.2.2.factories"]);
	angular.module("wcm-forms-sna_1.2.2.controllers", ["wcm-forms-sna_1.2.2.services"]);
	angular.module("wcm-forms-sna_1.2.2.directives", ["wcm-forms-sna_1.2.2.controllers"]);

	angular.module("wcm-forms-sna_1.2.2", [

		"pelorus.services",

		"wcm-forms-sna_1.2.2.factories",
		"wcm-forms-sna_1.2.2.services",
		"wcm-forms-sna_1.2.2.controllers",
		"wcm-forms-sna_1.2.2.directives"

	])
	.run([function () {
		console.log("WCM forms sna module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

