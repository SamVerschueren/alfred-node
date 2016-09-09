import test from 'ava';
import alfyTest from 'alfy-test';

test.beforeEach(t => {
	t.context.alfy = alfyTest();
});

test(async t => {
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
