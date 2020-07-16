// Karma configuration
// Generated on Mon Dec 25 2017 17:56:36 GMT+0930 (ACST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './helpers/helpers.js',
      './node_modules/citeproc/citeproc_commonjs.js',
      './helpers/sys.js',
      './tests/*.js',
      { pattern: './*.csl', included: false, served: true },
      { pattern: './citations.json', included: false, served: true },
      { pattern: './locales/*.xml', included: false, served: true }
    ],

    proxies: {
      '/ridley-sbl.csl': '/base/ridley-sbl.csl',
      '/smbc-sbl.csl': '/base/smbc-sbl.csl',
      '/citations.json': '/base/citations.json',
      '/locales/': '/base/locales/'
    },


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
