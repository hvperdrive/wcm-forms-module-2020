"use strict";

angular.module("wcm-forms-sna_1.1.6.directives")
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
				link: function($scope, element, attr) {
                    $scope.form = {
                        settings: {},
                    }

                    $scope.version = {
                        settings: {},
                    }

                    $scope.form.settings = {
						qlabel: "identifier",
						track: "identifier",
						options: [],
						placeholder: "Select a form",
                    };

                    $scope.version.settings = {
                        qlabel: "version",
						track: "id",
						options: [],
						placeholder: "Select a version",
                    }

                    $scope.$watch('model.form', function(nv, prev) {
                        formsSNAFactory.history.query({id: nv}).$promise
							.then(function(versions) {
                                $scope.version.settings.options = versions
							});
                    })

                    $scope.$watch('model.version', function(nv, prev) {
                        formsSNAFactory.template.get({id: nv.id}).$promise
							.then(function(template) {
                                $scope.model.template = template;
							});
                    })

					var init = function init() {
						formsSNAFactory.all.query().$promise
							.then(function(forms) {
                                $scope.form.settings.options = forms;
							});
					};

					init();
				},
			};
		},
	]);
