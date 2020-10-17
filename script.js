const webpack = require('webpack')

const webpackConfig = require('./webpack.config')
const babelServerConfig = require('./.babelrc.server.json')

webpackConfig[0].mode = 'development'

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }

  console.log()

  console.log('\x1b[38;2;255;200;0mStarting the developemnt server\x1b[0m')

  console.log()

  require('@babel/register')(babelServerConfig)

  require('./src/server')
})
