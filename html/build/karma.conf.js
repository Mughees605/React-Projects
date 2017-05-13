const argv = require('yargs').argv
const config = require('../config').default
const webpackConfig = require('./webpack.config').default

console.info('app:karma Creating configuration.')
const karmaConfig = {
  basePath : '../', // project root in relation to bin/karma.js
  files    : [
    {
      pattern  : `./${config.dir_test}/test-bundler.js`,
      watched  : false,
      served   : true,
      included : true
    }
  ],
  singleRun     : !argv.watch,
  frameworks    : ['mocha'],
  reporters     : ['mocha'],
  preprocessors : {
    [`${config.dir_test}/test-bundler.js`] : ['webpack']
  },
  browsers : ['Chrome'],
  webpack  : {
    devtool : 'cheap-module-source-map',
    resolve : Object.assign({}, webpackConfig.resolve, {
      alias : Object.assign({}, webpackConfig.resolve.alias, {
        sinon : 'sinon/pkg/sinon.js'
      })
    }),
    plugins : webpackConfig.plugins,
    module  : {
      noParse : [
        /\/sinon\.js/
      ],
      loaders : webpackConfig.module.loaders.concat([
        {
          test   : /sinon(\\|\/)pkg(\\|\/)sinon\.js/,
          loader : 'imports?define=>false,require=>false'
        }
      ])
    },
    // Enzyme fix, see:
    // https://github.com/airbnb/enzyme/issues/47
    externals : Object.assign({}, webpackConfig.externals, {
      'react/addons'                   : true,
      'react/lib/ExecutionEnvironment' : true,
      'react/lib/ReactContext'         : 'window'
    }),
    sassLoader : webpackConfig.sassLoader
  },
  webpackMiddleware : {
    noInfo : true
  },
  coverageReporter : {
    reporters : config.coverage_reporters
  }
}

if (config.globals.__COVERAGE__) {
  var path = require('path')
  const fs = require('fs')

  const babelConfig = JSON.parse(fs.readFileSync(`${path.resolve('.')}/.babelrc`, 'utf8'))

  karmaConfig.reporters.push('coverage')
  karmaConfig.webpack.module.preLoaders = [{
    test: /\.(js|jsx)$/,
    include: new RegExp(config.dir_client),
    loader: 'babel',
    query: Object.assign({}, babelConfig, {
      plugins: [
        ...babelConfig.plugins,
        'istanbul'
      ]
    })
  }]
}

module.exports = (cfg) => cfg.set(karmaConfig)
