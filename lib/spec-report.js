'use strict';

var results = {};

var save = function(exitStatus) {
    if (exitStatus) {
        results['message'] = 'Karma test runner reports failing unit tests, exitStatus: '  + exitStatus;
        results['status'] = exitStatus;
    } else {
        results = null;
    }
};

var report = function() {
    if (results) {
        console.log(results['message']);
        process.exit(results['status']);
    }
};

module.exports.save = save;
module.exports.report = report;