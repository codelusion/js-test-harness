##js-test-harness

###A sample "Test Harness" for Javascript using Gulp, Karma, Jasmine and Phantom.js

While attempting to setup test harness for an enterprise SaaS application with a large untested Javascript codebase, I had to pull together
information from a lot of different sources. 

I was looking to do the following:
- Setup Karma for TDD
- Setup Karma for a CI/Build Server (Jenkins) using PhantomJS
- Setup test filters via commandline flags
- Setup to test jQuery Ajax (ability to mock Http Requests)
- Setup testing for jQuery with HTML injection into spec (because Javascript is coupled the DOM).

This test harness pulls together all of these.

*Note:* 
 - Sample code and tests relating to the Media Player is from the Jasmine standalone download: https://github.com/jasmine/jasmine/releases



###To install and run sample tests:

```
git clone https://github.com/codelusion/js-test-harness
npm install
gulp test
gulp test -f "text to match" //only runs tests that match phrase
gulp tdd //TDD Mode, tess are run when changes are detected

```

