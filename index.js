'use strict';
const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');
const builtinModules = require('builtin-modules/static');

alfredNotifier();

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
