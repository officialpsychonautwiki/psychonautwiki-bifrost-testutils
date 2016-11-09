'use strict';

const path = require('path');

module.exports = testType => {
	const mochaOptionFile = path.join(__dirname, `${testType}-mocha.opts`);

    const mochaArguments = ['--opts', mochaOptionFile];
    const reporter = process.env.MOCHA_REPORTER;

    if(reporter){
        mochaArguments.push('--reporter');
        mochaArguments.push(reporter);
    }

    return () => {
        const spawn = require('child_process').spawn;

        const mocha = spawn('./node_modules/mocha/bin/mocha', mochaArguments, {
            stdio: 'inherit',
            env: process.env
        });

        mocha.on('exit', exitCode => {
            mocha.kill();

            if (exitCode) {
                throw new Error('Mocha terminated with exit code ' + exitCode);
            }
        });

        mocha.on('close', (code, signal) =>
        	console.log('mocha child process terminated due to receipt of signal ' + signal)
        );
    };
};
