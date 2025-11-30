const merge = require('webpack-merge')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common.config.js')
const vars = require('./vars.js')

module.exports = (env = {}) =>
  merge(common, {
    mode: 'production',
    entry: {
      [env.child]: path.resolve(vars.rootPath, `./src/apps/${env.child}/index.ts`)
    },
    output: {
      path: path.resolve(vars.childOutputPath, `./${env.child}`),
      filename: `main.js`,
      chunkFilename: `[name]@[contenthash:8]chunk.js`,
      library: '[name]_library',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: ['vue-style-loader', 'css-loader', 'less-loader']
        }
      ]
    },
    plugins: [new CleanWebpackPlugin()]
  })
