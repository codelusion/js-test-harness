##js-test-harness

###A test harness for Javascript using Gulp, Karma, Jasmine and Phantom.js

While setting up a test harness for an enterprise SaaS application with a largely untested Javascript codebase, I had to pull together
information from a lot of different sources. 

I was looking to do the following:
- Setup Karma for TDD
- Setup Karma for a CI/Build Server (Jenkins) using PhantomJS
- Setup test filters via commandline flags
- Setup to test ajax with jQuery (i.e. the ability to mock Http Requests)
- Setup testing for jQuery with HTML injection into a spec (in cases where Javascript is coupled the DOM).

This test harness pulls together all of these.

*Note:* Sample code and tests relating to the Media Player is from the Jasmine standalone download: https://github.com/jasmine/jasmine/releases



###To install and run sample tests:

```bash
git clone https://github.com/codelusion/js-test-harness
npm install
gulp test
gulp test -f "text to match" //only runs tests that match phrase
gulp tdd //TDD Mode, tests are run when changes are detected

```

