var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill','./src/index.js'],

  devtool: 'cheap-module-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Star Wars'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map',
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
    hot: true,
    proxy: {
      '/api': 'https://swapi.co/api/',
    },
  },

  module: {
    rules: [
     { 
       test: /\.css$/, 
       loader: 'style-loader!css-loader',
     },
      {
        test: /\.(png|svg|jpg|gif|)$/,
        loader: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
          test: /\.woff2(\?.*)?$/,
          loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/font-woff2'
      },
      {
          test: /\.ttf(\?.*)?$/,
          loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream'
      },
      {
          test: /\.eot(\?.*)?$/,
          loader: 'file-loader?name=/fonts/[name].[ext]'
      },
      {
          test: /\.otf(\?.*)?$/,
          loader: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
      },
      {
          test: /\.svg(\?.*)?$/,
          loader: 'url-loader?name=/fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
}