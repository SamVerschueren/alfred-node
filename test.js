'use strict';
const test = require('ava');
const alfyTest = require('alfy-test');

test.beforeEach(t => {
	t.context.alfy = alfyTest();
});

test('url module', async t => {
	const result = await t.context.alfy('url');

	t.deepEqual(result, [
		{
			title: 'url',
			autocomplete: 'url',
			arg: 'https://nodejs.org/api/url.html',
			quicklookurl: 'https://nodejs.org/api/url.html'
		}
	]);
});
