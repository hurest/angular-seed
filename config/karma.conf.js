//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../app/js/**/*.js',
      '../app/templates/**/**/js/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: './unit.xml',
      suite: 'unit'
    }

  });
};
