
var path = require('path');
var webpack = require('webpack');

var config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    polyfills: './src/polyfills',
    vendor:    './src/vendor',
    main:      './src/main'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html/,  loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'to-string-loader!css-loader' },
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
  ],

  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;

// Karma configuration
// Generated on Thu Aug 04 2016 22:14:56 GMT-0400 (Eastern Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      { pattern: './specs.js', watched: false }
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
