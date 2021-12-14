const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle-[contenthash].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    compress: false,
    port: '80',
    open: {
      target: ['/'],
      app: {
        name: 'firefox'
      },
    },
    historyApiFallback: true,
    hot: true
  }
});