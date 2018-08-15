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
    test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?[\s\S]+)?$/,
    include: [path.resolve('node_modules/font-awesome/fonts')],
    use: {
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[ext]'
      }
    }
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

let clientStyleLoader = {
  test: /\.(sass|scss)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'style-loader'
  },{
    loader: 'css-loader'
  }, {
    loader: 'sass-loader'
  }]
};

let universalStyleLoader = Object.assign({}, clientStyleLoader);
universalStyleLoader.use = [{
  loader: 'css-loader'
}, {
  loader: 'sass-loader'
}];

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
    rules: commonLoaders.concat(clientStyleLoader)
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
    rules: commonLoaders.concat(universalStyleLoader)
  },
  plugins: [
    new copyWebpackPlugin([{
      from: './src/views',
      to: 'views'
    }])
  ]
}];
