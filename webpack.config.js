let webpack = require('webpack');
let path = require('path');
let nodeExternals = require('webpack-node-externals');
let copyWebpackPlugin = require('copy-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let HtmlInjector = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

let commonLoaders = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader'
  },
  {
    test: /\.(sass|scss)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'style-loader'
    },{
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }]
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
];

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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: commonLoaders
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    HtmlInjector
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: commonLoaders
  },
  plugins: [
    new copyWebpackPlugin([{
      from: './src/views',
      to: 'views'
    }])
  ]
}];
