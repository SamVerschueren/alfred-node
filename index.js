'use strict';
const alfy = require('alfy');
const builtinModules = require('builtin-modules/static');

const items = builtinModules.map(module => {
	const url = `https://nodejs.org/api/${module}.html`;

	return {
		title: module,
		autocomplete: module,
		arg: url,
		quicklookurl: url
	};
});

alfy.output(alfy.inputMatches(items, 'title'));
