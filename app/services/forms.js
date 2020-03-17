const request = require('request-promise');
var VariableHelper = require('../helpers/variables');

function getAuth() { // tslint:disable-next-line: no-any
    return request.post({
        url: `${VariableHelper.get().authApiURL}/oauth2/token`,
        body: {
            'client_id': VariableHelper.get().authClientId, // tslint:disable-line: object-literal-key-quotes
            'client_secret': VariableHelper.get().authClientSecret, // tslint:disable-line: object-literal-key-quotes
            'grant_type': 'client_credentials', // tslint:disable-line: object-literal-key-quotes
        },
        json: true,
    });
}

function getAll(qs = {}) {
    return getAuth()
        .then((auth) => {
            return request.get({
                qs,
                url: `${VariableHelper.get().formsApiURL}/forms/search`,
                json: true,
                headers: {
                    Authorization: `bearer ${auth.access_token}`,
                    apikey: VariableHelper.get().formsApiKey,
                    'dgp-tenant-id': VariableHelper.get().formsTenantId,
                },
            });
        })
}

function getHistory(id, qs = {}) {
	return getAuth()
		.then((auth) => {
			return request.get({
				qs,
				url: `${VariableHelper.get().formsApiURL}/forms/${id}/history`,
				json: true,
				headers: {
					Authorization: `bearer ${auth.access_token}`,
                    apikey: VariableHelper.get().formsApiKey,
                    'dgp-tenant-id': VariableHelper.get().formsTenantId,
				},
			});
		})
}

function getTemplate(id, qs = {}) {
	return getAuth()
		.then((auth) => {
			return request.get({
				qs,
				url: `${VariableHelper.get().formsApiURL}/forms/${id}`,
				json: true,
				headers: {
					Authorization: `bearer ${auth.access_token}`,
                    apikey: VariableHelper.get().formsApiKey,
                    'dgp-tenant-id': VariableHelper.get().formsTenantId,
				},
			});
		})
}

module.exports = {
	getAll,
    getHistory,
    getTemplate,
}
