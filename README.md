##js-test-harness

###A sample "Test Harness" for Javascript using Gulp, Karma, Jasmine and Phantom.js

Notes: Sample code and tests relating to the Media Player is from the Karma Standalone download.

- Setting up Karma for TDD
- Setting up Karma for CI/Build Server using PhantomJS
- Setting up test filters via commandline flags
- Testing jQuery Ajax
- Testing jQuery with HTML injection into spec


###To install and run sample tests:

```
git clone https://github.com/codelusion/js-test-harness
npm install
gulp test
gulp test -f "text to match" //only runs tests that match phrase
gulp tdd //TDD Mode, tess are run when changes are detected

```

