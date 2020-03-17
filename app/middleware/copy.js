var R = require('ramda');

module.exports = function(req, res, next) {
	req.data = {
		body: R.clone(req.body),
		headers: R.clone(req.headers),
		params: R.clone(req.params),
		query: R.clone(req.query),
	};
	next();
}
