"use strict";

(function(angular) {
	angular.module("wcm-boilerplate_0.0.1")
		.config([

			"$stateProvider",
			"formsSNAConfigProvider",

			function ($stateProvider, formsSNAConfigProvider) {

				var moduleFolder = formsSNAConfigProvider.API.modulePath;

				$stateProvider

					.state("pelorus.wcm-forms-sna.index", {
						url: "",
						access: {
							requiresLogin: true
						},
						resolve: {
							ListData: ["formsSNAFactory", function(formsSNAFactory) {
								return formsSNAFactory.get().$promise;
							}],
						},
						ncyBreadcrumb: {
							label: "{{breadcrumb}}"
						},
						views: {
							"": {
								templateUrl: moduleFolder + "views/overview.html",
								controller: "forms-snaOverviewController"
							}
						}
					})

					.state("pelorus.wcm-forms-sna.edit", {
						url: "/{uuid}",
						access: {
							requiresLogin: true
						},
						resolve: {
							InstanceData: ["formsSNAFactory", "$stateParams", function(formsSNAFactory, $stateParams) {
								if ($stateParams.uuid && $stateParams.uuid !== "new") {
									return formsSNAFactory.get({ id: $stateParams.uuid }).$promise;
								} else {
									return {};
								}
							}],
						},
						ncyBreadcrumb: {
							label: "{{breadcrumb}}"
						},
						views: {
							"": {
								templateUrl: "/app/core/resource/views/resource.html",
								controller: "boilerplateDetailController"
							},
							"form@pelorus.wcm-forms-sna.edit": {
								templateUrl: moduleFolder + "views/detail.html"
							}
						}
					});
			}
		]);
})(window.angular);
