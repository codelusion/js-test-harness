'use strict';

//these are typically external libraries
// location/version will change
var externalLibs = require('../external-libs');

//register js application files to load before specs are run
//just javascript files being tested and dependencies
var specRegistry = require('../spec/app-test-registry');

//determine the files to include
//when the browser instance loads
var includeFiles = function () {
    var commonFiles = [
        externalLibs['jquery'],
        externalLibs['knockout']
        //add any other js files that need to loaded for all tests
        //'src/main.js'
    ];
    var specFixtures = [
        {
            pattern: 'spec/**/*.html',
            watched: true,
            included: false,
            served: true
        }
        //Add any test fixtures if needed
        //'spec/**/fixtures*.js',
    ];

    var specFiles = [
        "spec/**/SpecHelper.js",
        'spec/**/*Spec.js'
    ];

    var loadFiles = {
        'common': commonFiles,
        'testing': specRegistry.App,
        'fixtures': specFixtures,
        'specs': specFiles
    };

    return [].concat(loadFiles.common, loadFiles.testing, loadFiles.fixtures, loadFiles.specs);
};

var excludeFiles = function () {
    //specify files to exclude
    return [];
};

module.exports.includeFiles = includeFiles;
module.exports.excludeFiles = excludeFiles;