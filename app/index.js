const setupRoutes = require("./routes");
const variablesHelper = require("./helpers/variables");
const hooksController = require("./controllers/hooks");
const fieldFixture = require("./fixtures/fieldTypes");

module.exports = (app, hooks, moduleInfo) => {
	fieldFixture();
	// Get variables
	variablesHelper.reload(moduleInfo)
		.then((variables) => {
			// do some stuff that needs the variables first
		});

	// Handle hooks
	hooksController.handleHooks(hooks);

	// Setup routes
	setupRoutes(app, moduleInfo);
};

// Exposed API (for other modules)
module.exports.API = require("./api");
