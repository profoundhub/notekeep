var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var public_dir = "src/frontend";
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
console.log(path.join(__dirname, 'src/frontend' , 'index.html'));

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'src/frontend' , 'main.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [plugins],
  resolve: {
    root: [path.resolve('./src/frontend/utils'), path.resolve('./src/frontend')],
    extensions: ['', '.js', '.css']
  },

  module: {
    loaders: [loaders]
  }
};
