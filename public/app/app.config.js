
"use strict";

angular.module("wcm-forms-sna_1.2.2")
	.config([

		"fieldGeneratorProvider",

		function(fieldGeneratorProvider) {
			// Register custom fields (eg. form field);
			fieldGeneratorProvider.registerCustomFields();
		},
	]);
