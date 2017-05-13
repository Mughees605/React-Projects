/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import {argv} from 'yargs'

// ========================================================
// Default Configuration
// ========================================================
const config = {
  env: process.env.NODE_ENV || 'development',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base: path.resolve(__dirname, '..'),
  dir_client: 'src',
  dir_dist: 'dist',
  dir_server: 'server',
  dir_test: 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host: 'localhost', // use string 'localhost' to prevent exposure on local network
  server_port: process.env.PORT || 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_css_modules: true,
  compiler_devtool: 'source-map',
  compiler_hash_type: 'hash',
  compiler_fail_on_warning: false,
  compiler_quiet: false,
  compiler_public_path: '/',
  compiler_stats: {
    chunks: false,
    chunkModules: false,
    colors: true
  },
  compiler_vendor: [
    'react',
    'react-redux',
    'react-router',
    'redux',
    'classnames'
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_reporters: [
    {type: 'text-summary'},
    {type: 'lcov', dir: 'coverage'}
  ]
}

/************************************************
 -------------------------------------------------

 All Internal Configuration Below
 Edit at Your Own Risk

 -------------------------------------------------
 ************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env': {
    'NODE_ENV': JSON.stringify(config.env)
  },
  'NODE_ENV': config.env,
  '__DEV__': config.env === 'development',
  '__PROD__': config.env === 'production',
  '__TEST__': config.env === 'test',
  '__DEBUG__': config.env === 'development' && !argv.no_debug,
  '__COVERAGE__': !argv.watch && config.env === 'test',
  '__BASENAME__': JSON.stringify(process.env.BASENAME || '')
}

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')
Object.keys(pkg.dependencies).filter((dep) => {
  if (pkg.dependencies[dep]) return true

  console.info(
    `app:config Package "${dep}" was not found as an npm dependency in package.json;
      it won't be included in the webpack vendor bundle.`
  )
})

// ------------------------------------
// Utilities
// ------------------------------------
const resolve = path.resolve
const base = (...args) =>
  Reflect.apply(resolve, null, [config.path_base, ...args])

config.utils_paths = {
  base: base,
  client: base.bind(null, config.dir_client),
  dist: base.bind(null, config.dir_dist),
  public: base.bind(null, config.compiler_public_path)
}

// ========================================================
// Environment Configuration
// ========================================================
console.info(`app:config Looking for environment overrides for NODE_ENV "${config.env}".`)
const environments = require('./environments').default
const overrides = environments[config.env]
if (overrides) {
  console.info('app:config Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  console.info('app:config No environment overrides found, defaults will be used.')
}

export default config
