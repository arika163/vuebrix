const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const common = require('./webpack.common.config.js')
const vars = require('./vars.js')

module.exports = merge(common, {
  mode: 'production',
  entry: path.join(vars.rootPath, './src/main.ts'),
  output: {
    path: vars.mainOutputPath,
    filename: 'js/[name]@[contenthash:8].js',
    chunkFilename: 'js/[name]@[contenthash:8].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]@[contenthash:8].css',
      chunkFilename: 'css/[name]@[contenthash:8].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'Vuebrix'
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
        },
        {
          from: path.resolve(vars.rootPath, './dist/child'),
          to: path.resolve(vars.mainOutputPath, './child')
        },
        {
          from: path.resolve(vars.rootPath, './src/appList.json'),
          to: path.resolve(vars.mainOutputPath, './child/appList.json')
        }
      ]
    })
  ]
})
