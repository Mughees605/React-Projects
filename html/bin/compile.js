import fs from 'fs-extra'
import webpackCompiler from '../build/webpack-compiler'
import webpackConfig from '../build/webpack.config'
import config from '../config'

const paths = config.utils_paths

  ;(async function () {
  try {
    console.info('app:bin:compile Run compiler')
    const stats = await webpackCompiler(webpackConfig)
    if (stats.warnings.length && config.compiler_fail_on_warning) {
      console.info('app:bin:compile Config set to fail on warning, exiting with status code "1".')
      process.exit(1)
    }
    console.info('app:bin:compile Copy static assets to dist folder.')
    fs.copySync(paths.client('static'), paths.dist())
  } catch (e) {
    console.info('app:bin:compile Compiler encountered an error.', e)
    process.exit(1)
  }
})()
