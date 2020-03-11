export const copy = (req, res, next) => {
	req.data = {
		body: clone(req.body),
		headers: clone(req.headers),
		params: clone(req.params),
		query: clone(req.query),
	};
	next();
}
