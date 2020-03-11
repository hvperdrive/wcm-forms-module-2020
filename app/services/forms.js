import request from 'request-promise';

export class FormsService {
	public static async getAuth() { // tslint:disable-next-line: no-any
		return await request.post({
			url: `${config.forms.apiUrl}/oauth2/token`,
			body: {
				'client_id': config.forms.clientId, // tslint:disable-line: object-literal-key-quotes
				'client_secret': config.forms.clientSecret, // tslint:disable-line: object-literal-key-quotes
				'grant_type': 'client_credentials', // tslint:disable-line: object-literal-key-quotes
			},
			json: true,
		});
	}

	public static async getAll(qs = {}) {
		const auth = await this.getAuth();

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
}
