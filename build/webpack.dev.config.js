const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const common = require('./webpack.common.config.js')
const vars = require('./vars.js')

module.exports = merge(common, {
  mode: 'development',
  entry: path.join(vars.rootPath, './src/main.ts'),
  output: {
    path: vars.mainOutputPath,
    filename: 'js/[name].chunk.js',
    chunkFilename: 'js/[name].js'
  },
  devtool: 'source-map',
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'vuebrix'
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(vars.dllOutputPath, './vendor@*.js'),
      outputPath: 'dll',
      publicPath: 'dll'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(vars.rootPath, './public'),
          to: vars.mainOutputPath,
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
})
