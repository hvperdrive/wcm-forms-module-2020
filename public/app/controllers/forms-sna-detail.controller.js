"use strict";

angular.module("wcm-forms-sna_1.0.0.controllers")
	.controller("formsSnaDetailController", [
		"$scope",
		"$rootScope",
		"$controller",
		"$templateCache",
		"$filter",
		"$window",
		"uuid4",

		// Services
		"LabelService",
		"configuration",

		// Factories
		"formsSNAFactory",

		// Resolves
		"InstanceData",
		"ExternalForms",

		function($scope, $rootScope, $controller, $templateCache, $filter, $window, uuid4, LabelService, configuration, formsSNAFactory, InstanceData, ExternalForms) {

			// Referencing the required factory
			$scope._factory = formsSNAFactory;

			// Extend the default resource controller
			angular.extend(this, $controller("ResourceController", { $scope: $scope, InstanceData: InstanceData, Languages: [] }));

			// ResourceView configuration
			$scope.context.type = LabelService.getString("Form"); // Set the current type to "Consumer"
			// Get server path for asset.
			$scope.serverPath = configuration.serverPath;

			$scope.form = nul;

			// $scope events
			$scope.$on("$destroy", function() {
				$scope._newInstance = undefined;
				$scope._instance = undefined;
			});
		},
	]);
