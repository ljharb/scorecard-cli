'use strict';

const test = require('tape');
const mockProperty = require('mock-property');

process.argv = [process.argv[0], process.argv[1], 'nvm-sh/nvm'];

test('CLI', async (t) => {
	const messages = [];
	const { log: origLog, error: origError } = console;

	const log = (...args) => { messages.push(['log', ...args]); origLog(...args); };
	const error = (...args) => { messages.push(['error', ...args]); origError(...args); };

	const restoreLog = mockProperty(console, 'log', { value: log });
	t.teardown(restoreLog);
	const restoreError = mockProperty(console, 'error', { value: error });
	t.teardown(restoreError);

	await require('../bin/scorecard-cli'); // eslint-disable-line global-require

	restoreLog();
	restoreError();

	t.deepEqual(
		messages,
		[['log', messages[0][1]]],
		'expected console messages are output',
	);
});
