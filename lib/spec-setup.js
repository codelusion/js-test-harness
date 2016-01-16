'use strict';

//external libraries
// location/version may change
var externalLibs = require('./external-libs');

//register js application files to load before specs are run
//just javascript files being tested and dependencies
var specRegistry = require('../spec/app-spec-registry');

//determine the files to include
//when the browser instance loads
var includeFiles = function () {
    var commonFiles = [
        externalLibs['jquery'],
        externalLibs['jquery-validate'],
        externalLibs['knockout']

        //add any other js files that need to loaded for all tests
        //'src/main.js'
    ];

    var specFixtures = [
        {
            pattern: 'spec/**/*.html',
            watched: true,
            //not included, specs will load as needed
            included: false,
            //useful to be able to see html specs
            // when accessing via browser
            served: true
        }
        //Add any other test fixtures if needed
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