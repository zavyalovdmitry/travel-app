const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const rootModulePath = './src/';

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  stats: { modules: false },
  entry: {
    DIG: `${rootModulePath}index.jsx`,
  },
  mode: 'development',
  output: {
    filename: './main.js',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  devtool: 'inline-source-map',
  resolve: {
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "destroy": false,
      "etag": false,
      "mime": false,
      "mime-types": false,
      "safe-buffer": false,
      "send": false,
      "serve-static": false,
      "swiper": false
    },  
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};
