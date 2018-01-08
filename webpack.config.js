let webpack = require('webpack');
let path = require('path');
let nodeExternals = require('webpack-node-externals');
let copyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let HtmlInjector = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

let SassExtractor = new ExtractTextWebpackPlugin('stylesheets/app.css');

/**
 * Webpack configuration object
 */
module.exports = [{
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        use: SassExtractor.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HtmlInjector,
    SassExtractor
  ]
}, {
  entry: './src/server.js',
  target: 'node',
  node: {
    __dirname: true
  },
  externals: nodeExternals(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new copyWebpackPlugin([{
      from: './src/views',
      to: 'views'
    }])
  ]
}];
