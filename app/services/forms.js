const request = require('request-promise');
var VariableHelper = require('../helpers/variables');

var authApiUrl;
var authClientId;
var authClientSecret;
var formsApiUrl;
var formsApiKey;
var formsTenantId;

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
    console.log(VariableHelper.get());
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
