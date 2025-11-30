const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const vars = require('./vars.js')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
          cacheCompression: false
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[contenthash:8].[ext]',
              esModule: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(vars.rootPath, './src')
    },
    extensions: ['.js', '.ts', '.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(vars.dllOutputPath, './vendor-manifest.json'))
    })
  ]
}
