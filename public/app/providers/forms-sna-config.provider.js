"use strict";

(function(angular) {
	angular.module("wcm-forms-sna_1.1.8")
		.provider("formsSNAConfig", [

			"MODULE_ENV_CONFIG",

			function testConfig(MODULE_ENV_CONFIG) {

				this.API = {
					name: MODULE_ENV_CONFIG.angularModule,
					version: "1.1.8",
					feDirPath: MODULE_ENV_CONFIG.feDirPath,
					assetsDirPath: MODULE_ENV_CONFIG.assetsDirPath,
					cssDirPath: MODULE_ENV_CONFIG.cssDirPath
				};

				this.API.modulePath = this.API.feDirPath;

				this.$get = function get() {
					return this.API;
				};
			}
		]);
})(window.angular);
