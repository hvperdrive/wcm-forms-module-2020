const formsService = require('../services/forms');

function getAll(req, res, next) {
    try {
        formsService.getAll(
            {
                size: 1000,
                page: 1,
                status: "published",
                online: true,
            }
        ).then(function(forms) {
			const mappedForms = forms._embedded.resourceList.map((form) => ({
                id: form.id,
                identifier: form.identifier,
                uuid: form.identifier,
                meta: {
                    label: form.identifier,
                }
            }));
			res.status(200).json(mappedForms);
		});
    } catch (error) {
        next(error);
    }
}

function getHistory(req, res, next) {
	try {
		const forms = formsService.getHistory(
			req.data.params.id,
			{
				page: 1,
				size: 1000,
			}
        ).then(function(forms) {
            const allFormVersions = forms._embedded.resourceList.map(
                (form, index) => ({
                    version: index + 1,
                    id: form.id,
                    identifier: form.identifier,
                })
            );

		    res.status(200).json(allFormVersions.reverse());
        });



	} catch (error) {
		next(error);
	}
}

function getTemplate(req, res, next) {
	try {
        const forms = formsService.getTemplate(req.data.params.id)
            .then(function(template) {
                const mappedValue = template.template.content;
                res.status(200).json(mappedValue);
            });
	} catch (error) {
		next(error);
	}
}

module.exports = {
    getAll,
    getHistory,
    getTemplate,
}
