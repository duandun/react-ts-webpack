const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'static/js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8020,
    compress: true,
    open: true
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: false,
    }),
  ],
});
