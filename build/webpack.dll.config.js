const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const vars = require('./vars.js')

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'vue',
      'vue-router',
      'vuex',
      'axios',
      'lodash',
      'moment',
      'ant-design-vue',
      'ant-design-vue/dist/antd.css'
    ]
  },
  output: {
    path: vars.dllOutputPath,
    filename: '[name]@[contenthash:8].js',
    library: '[name]_library'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(vars.rootPath, './dist/dll/[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
