const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: {
      main: './src/index',
    },
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].[hash].js',
    },
    mode: argv.mode,
    devtool: isDevelopment ? '#eval-source-map' : 'source-map',
    devServer: {
      stats: {
        children: false,
        maxModules: 0,
      },
      port: 3000,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new CopyPlugin({ patterns: [ { from: 'assets', to: '.' } ]})
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  };
};
