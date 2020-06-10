"use strict";

angular.module("wcm-forms-sna_1.2.0.directives")
	.directive("formField", [

		"formsSNAConfig",
		"formsSNAFactory",

		function (formsSNAConfig, formsSNAFactory) {
			return {
				restrict: "E",
				templateUrl: formsSNAConfig.modulePath + "directives/fields/form-field/form-field.html",
				replace: true,
				scope: {
					label: "@",
					secondaryLabel: "@?",
					name: "@",
					model: "=",
					readonly: "=?",

					// Validation
					fieldData: "=",

					id: "@?",
					group: "@?",

					// Validation
					required: "=",
					placeholder: "=?",
					disabled: "=?",
				},
				link: function ($scope, element, attr) {
					$scope.form = {
						settings: {},
					}

					$scope.form.settings = {
						qlabel: "identifier",
						track: "identifier",
						options: [],
						placeholder: "Select a form",
					};

					var init = function init() {
						formsSNAFactory.all.query().$promise
							.then(function (forms) {
								$scope.form.settings.options = forms;
							});
					};

					init();
				},
			};
		},
	]);
