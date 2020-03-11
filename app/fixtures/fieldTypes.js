'use strict';

// Set default envs
var Q = require('q');
var _ = require('lodash');
var mongoose = require('mongoose');
var packageConfig = require('../../package.json');

// Start mongoose connection
var FieldTypeModel = require('@wcm/module-helper').models.FieldType;

// jscs:disable maximumLineLength
var fieldTypes = {
	formFieldType: {
		key: 'form-select',
		label: 'Form',
		type: 'form-select',
		dataType: 'object',
		isQueryable: false,
		isTranslate: false,
		isMultiple: true,
		source: 'external',
		operators: []
	}
};

var createFieldType = function createFieldType(data) {
	var d = Q.defer();
	if (data.uuid) {
		FieldTypeModel.update({ uuid: data.uuid }, data)
			.exec()
			.then(
			function onSuccess() {
				d.resolve(true);
			},
			function onError(error) {
				d.reject(error);
			}
			);
	} else {
		FieldTypeModel.create(data)
			.then(
			function onSuccess() {
				d.resolve(true);
			},
			function onError(error) {
				d.reject(error);
			}
			);
	}

	return d.promise;
};

var checkIfFieldTypeAlreadyExists = function checkIfFieldTypeAlreadyExists(fieldtype) {
	var d = Q.defer();

	FieldTypeModel.findOne({ key: fieldtype.key })
		.exec()
		.then(
		function onSuccess(response) {
			if (response) {
				fieldtype.uuid = response.uuid;
			}
			d.resolve(fieldtype);
		},
		function onError(err) {
			d.reject(err);
		}
		);

	return d.promise;
};
module.exports = function() {
	var promises = [];

	_.forEach(fieldTypes, function (ft) {
		promises.push(
			checkIfFieldTypeAlreadyExists(ft)
				.then(
				createFieldType,
				function (err) {
					return Q.reject(err);
				}
				)
		);


	});

	Q.all(promises).then(
		function onSuccess() {
			console.log('Form fieldtypes added');
		},
		function onError(err) {
			console.log('There was a error while adding a fieldtype for a form');
			console.log(err);
		}
	);
};
