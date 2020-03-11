"use strict";

angular.module("wcm-forms-sna_1.0.0.directives")
	.directive("formField", [

		"formsSNAConfig",
		"formsSNAFactory",

		function(formsSNAConfig, formsSNAFactory) {
			return {
				restrict: "E",
				templateUrl: formsSNAConfig.modulePath + "directives/fields/form-field/form-field.html",
				replace: true,
				scope: {
					label: "@",
					secondaryLabel: "@?",
					name: "@",
					model: "=",

					// Validation
					fieldData: "=",

					id: "@?",
					group: "@?",

					// Validation
					required: "=",
					placeholder: "=?",
					disabled: "=?",
				},
				link: function($scope, element, attr) {
					$scope.settings = {
						qlabel: "meta.label",
						track: null,
						options: [],
						id: "uuid",
						placeholder: "Select a form",
					};

					var init = function init() {
						formsSNAFactory.query().$promise
							.then(function(forms) {
								console.log(forms);
								$scope.settings.options = forms;
							});
					};

					init();
				},
			};
		},
	]);
