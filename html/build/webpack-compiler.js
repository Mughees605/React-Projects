const webpack = require('webpack')
const config = require('../config')

function webpackCompiler (webpackConfig, statsFormat) {
  statsFormat = statsFormat || config.compiler_stats

  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig)

    compiler.run((err, stats) => {
      if (err) {
        console.info('app:build:webpack-compiler Webpack compiler encountered a fatal error.', err)
        return reject(err)
      }

      const jsonStats = stats.toJson()
      console.info('app:build:webpack-compiler Webpack compile completed.')
      console.info(`app:build:webpack-compiler ${stats.toString(statsFormat)}`)

      if (jsonStats.errors.length > 0) {
        console.info('app:build:webpack-compiler Webpack compiler encountered errors.')
        console.info(`app:build:webpack-compiler ${jsonStats.errors.join('\n')}`)
        return reject(new Error('Webpack compiler encountered errors'))
      } else if (jsonStats.warnings.length > 0) {
        console.info('app:build:webpack-compiler Webpack compiler encountered warnings.')
        console.info(`app:build:webpack-compiler ${jsonStats.warnings.join('\n')}`)
      } else {
        console.info('app:build:webpack-compiler No errors or warnings encountered.')
      }
      resolve(jsonStats)
    })
  })
}

module.exports = webpackCompiler
