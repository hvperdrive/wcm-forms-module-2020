"use strict";

angular.module("wcm-forms-sna_1.0.0")
	.provider("fieldGenerator", [

		"$provide",
		"formsSNAConfigProvider",

		function fieldTypeGenerator($provide, formsSNAConfigProvider) {
			var customFields = [
				{
					key: "form-select",
					url: "app/modules/@wcm/forms-sna_1.0.0/public/app/directives/fields/form-field/form-field.template.html",
				},
			];

			this.registerCustomFields = function registerCustomFields() {
				$provide.decorator("FieldService", [

					"$delegate",

					function(fieldService) {
						_.forEach(customFields, function(cf) {
							fieldService.registerFieldTemplate(cf.key, cf.url, cf.content);
						});

						return fieldService;
					},
				]);
			};

			this.$get = function get() {
				return this.API;
			};
		},
	]);
