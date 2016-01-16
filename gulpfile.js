'use strict';
var gulp = require('gulp');
var Server = require('karma').Server;
var env = require('gulp-env');
var testSetup = require('./lib/spec-setup');
var argv = require('minimist')(process.argv.slice(2));
var testResults = require('./lib/spec-report');

//setup environment variables
gulp.task('set-env', function () {
    env({
        vars: {
            //add path to browser binaries Phantom, Chrome, IE etc
            //http://karma-runner.github.io/0.13/config/browsers.html
            PHANTOMJS_BIN: __dirname + "/node_modules/phantomjs/lib/phantom/bin/phantomjs"
        }
    })
});

//CI/Build Server Mode
//test runner task
gulp.task('karma-test-js', ['set-env'], function (done) {
    var clientArgs = [];
    //capture filters if passed in via command line
    if (argv.grep || argv.f) {
        clientArgs = ['--grep', argv.grep || argv.f];
    }
    //init Karma server instance
    //handle exit status
    new Server({
        basePath: __dirname,
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        files: testSetup.includeFiles(),
        exclude: testSetup.excludeFiles(),
        client: {
            args: clientArgs
        }
    }, function (exitStatus) {
        testResults.save(exitStatus);
        done();
    }).start();
});

//final report on tests
//exit code set here for CI/Build server
gulp.task('final', ['karma-test-js'], function () {
    testResults.report();
});

//TDD Mode
//watch files and run tests on change
gulp.task('tdd-watch', ['set-env'], function (done) {
    new Server({
        basePath: __dirname,
        configFile: __dirname + '/karma.conf.js',
        files: testSetup.includeFiles(),
        exclude: testSetup.excludeFiles(),
        autoWatch: true
    }, done).start();
});

//Task dependencies
gulp.task('test', ['set-env', 'karma-test-js', 'final']);
gulp.task('tdd', ['set-env', 'tdd-watch']);
