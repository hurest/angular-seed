//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',


    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-aria/angular-aria.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-material/angular-material.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/moment/moment.js',
      '../bower_components/moment/locale/ko.js',
      '../bower_components/angular-moment/angular-moment.js',
      '../bower_components/angular-ui-router/release/angular-ui-router.js',
      '../bower_components/jquery/dist/jquery.js',
      '../app/js/init/config.js',
      '../app/js/app.js',
      '../app/templates/**/**/js/*.js'
    ],

    autoWatch: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || 
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    reporters: ['progress'],

    frameworks: ['jasmine'],

    //captureTimeout: 60000,

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    singleRun: true
/*
    junitReporter: {
      outputFile: './unit.xml',
      suite: 'unit'
    }
*/
  });
};
