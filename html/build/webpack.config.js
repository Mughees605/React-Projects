import webpack from 'webpack'
import cssnano from 'cssnano'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../config'

const paths = config.utils_paths
const {__DEV__, __PROD__, __TEST__} = config.globals

const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: config.compiler_devtool,
  resolve: {
    modules: [paths.client(), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: __PROD__ ? {
      'prop-types': '',
    } : {}
  },
  module: {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY_PATHS = [
  paths.client('main.js')
]

webpackConfig.entry = {
  app: __DEV__
    ? APP_ENTRY_PATHS.concat(`webpack-hot-middleware/client?path=${config.compiler_public_path}__webpack_hmr`)
    : APP_ENTRY_PATHS,
  vendor: config.compiler_vendor
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename: `[name].[${config.compiler_hash_type}].js`,
  path: paths.dist(),
  publicPath: config.compiler_public_path
}

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(config.globals),
  new HtmlWebpackPlugin({
    template: paths.client('index.html'),
    hash: false,
    favicon: paths.client('static/favicon.ico'),
    filename: 'index.html',
    inject: 'body',
    minify: {
      collapseWhitespace: true
    }
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: __dirname,
      postcss: [
        cssnano({
          autoprefixer: {
            add: true,
            remove: true,
            browsers: ['last 2 versions']
          },
          discardComments: {
            removeAll: true
          },
          discardUnused: false,
          mergeIdents: false,
          reduceIdents: false,
          safe: true,
          sourcemap: !__PROD__
        })
      ],
      sassLoader: {
        includePaths: paths.client('styles')
      }
    }
  }),
]

if (__DEV__) {
  console.info('app:webpack:config Enable plugins for live development (HMR, NoErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (__PROD__) {
  console.info('app:webpack:config Enable plugins for production (OccurenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    })
  )
}

// ------------------------------------
// Pre-Loaders
// ------------------------------------
/*
 [ NOTE ]
 We no longer use eslint-loader due to it severely impacting build
 times for larger projects. `npm run lint` still exists to aid in
 deploy processes (such as with CI), and it's recommended that you
 use a linting plugin for your IDE in place of this loader.

 If you do wish to continue using the loader, you can uncomment
 the code below and run `npm i --save-dev eslint-loader`. This code
 will be removed in a future release.

 webpackConfig.module.preLoaders = [{
 test: /\.(js|jsx)$/,
 loader: 'eslint',
 exclude: /node_modules/
 }]

 webpackConfig.eslint = {
 configFile: paths.base('.eslintrc'),
 emitWarning: __DEV__
 }
 */

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.loaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
},
  {
    test: /\.json$/,
    loader: 'json-loader'
  }
]

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
const BASE_CSS_LOADER = `css-loader?${__DEV__ ? 'sourceMap' : ''}&-minimize`

// Add any packge names here whose styles need to be treated as CSS modules.
// These paths will be combined into a single regex.
const PATHS_TO_TREAT_AS_CSS_MODULES = [
  // 'react-toolbox', (example)
]

// If config has CSS modules enabled, treat this project's styles as CSS modules.
if (config.compiler_css_modules) {
  PATHS_TO_TREAT_AS_CSS_MODULES.push(
    paths.client().replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&') // eslint-disable-line
  )
}

const isUsingCSSModules = !!PATHS_TO_TREAT_AS_CSS_MODULES.length
const cssModulesRegex = new RegExp(`(${PATHS_TO_TREAT_AS_CSS_MODULES.join('|')})`)

// Loaders for styles that need to be treated as CSS modules.
if (isUsingCSSModules) {
  const cssModulesLoader = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    __PROD__ ? 'localIdentName=[hash:base64:5]' : 'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&')

  const globalCSS = [
    BASE_CSS_LOADER,
    'modules',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&')

  webpackConfig.module.loaders.push({
    test: /\.scss$/,
    include: [
      ...cssModulesRegex,
      paths.client() + '/components',
      paths.client() + '/routes',
      paths.client() + '/layouts',
    ],
    loaders: [
      'style-loader',
      cssModulesLoader,
      'postcss-loader',
      `sass-loader?${__DEV__ ? 'sourceMap' : ''}`
    ]
  })

  webpackConfig.module.loaders.push({
    test: /\.scss$/,
    include: [
      paths.client() + '/styles'
    ],
    loaders: [
      'style-loader',
      globalCSS,
      'postcss-loader',
      `sass-loader?${__DEV__ ? 'sourceMap' : ''}`
    ]
  })

  webpackConfig.module.loaders.push({
    test: /\.css$/,
    include: cssModulesRegex,
    loaders: [
      'style-loader',
      cssModulesLoader,
      'postcss-loader'
    ]
  })
}

// Loaders for files that should not be treated as CSS modules.
const excludeCSSModules = isUsingCSSModules ? cssModulesRegex : false
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: excludeCSSModules,
  loaders: [
    'style-loader',
    BASE_CSS_LOADER,
    'postcss-loader',
    `sass-loader?${__DEV__ ? 'sourceMap' : ''}`
  ]
})
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: excludeCSSModules,
  loaders: [
    'style-loader',
    BASE_CSS_LOADER,
    'postcss-loader'
  ]
})

// File loaders
/* eslint-disable */
webpackConfig.module.loaders.push(
  {
    test: /\.woff(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=1&mimetype=application/font-woff'
  },
  {
    test: /\.woff2(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=1&mimetype=application/font-woff2'
  },
  {test: /\.otf(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=1&mimetype=font/opentype'},
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=1&mimetype=application/octet-stream'
  },
  {test: /\.eot(\?.*)?$/, loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]'},
  {test: /\.svg(\?.*)?$/, loader: 'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=1&mimetype=image/svg+xml'},
  {test: /\.(png|jpg)$/, loader: 'url-loader?limit=1'}
)
/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  console.info('app:webpack:config Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
  ).forEach((loader) => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract({
      fallback: first,
      use: rest.join('!')
    })
    Reflect.deleteProperty(loader, 'loaders')
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
  )
}

export default webpackConfig