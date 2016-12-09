//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '../e2e/*.js'
  ],

  chromeOnly: true,
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
