const request = require('request-promise');
var VariableHelper = require('@wcm/module-helper').variables;

var authApiUrl;
var authClientId;
var authClientSecret;
var formsApiUrl;
var formsApiKey;
var formsTenantId;

VariableHelper.getAll(packageInfo.name, packageInfo.version)
    .then(
        function onSuccess(variables) {
            // access variables here
            // The variables object is modified so it only contains key/value pairs.

            // Example output:
            // {
            //   [key as specified in the package.json] : [value]
            // }
        },
        function onError(responseError) {
            // handle error here
        }
    );

function getAuth() { // tslint:disable-next-line: no-any
    return request.post({
        url: `${config.forms.apiUrl}/oauth2/token`,
        body: {
            'client_id': config.forms.clientId, // tslint:disable-line: object-literal-key-quotes
            'client_secret': config.forms.clientSecret, // tslint:disable-line: object-literal-key-quotes
            'grant_type': 'client_credentials', // tslint:disable-line: object-literal-key-quotes
        },
        json: true,
    });
}

function getAll(qs = {}) {
    const auth = new Promise(function(resolve) {
        const data = this.getAuth()
            .then(function(data) {
                resolve(data);
            });
    })

    return request.get({
        qs,
        url: `${config.forms.apiUrl}/forms/search`,
        json: true,
        headers: {
            Authorization: `bearer ${auth.access_token}`,
            apikey: config.server.apiKey,
            'dgp-tenant-id': config.forms.dgpTenantId,
        },
    });
}

module.exports = {
    getAll,
}
