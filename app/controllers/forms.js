const R = require('ramda');
const formsService = require('../services/forms');

function getAll(req, res, next) {
    try {
        console.log(formsService);
        formsService.getAll(
            {
                size: R.get(1000, ['data', 'query', 'size', req]),
                page: R.get(1, ['data', 'query', 'page', req]),
                status: R.get('published', ['data', 'query', 'status', req]),
                online: R.get(true, ['data', 'query', 'online', req]),
            }
        ).then(function(forms) {
			res.status(200).json(forms);
		});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll,
}
