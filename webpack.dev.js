const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true,
        open: true,
        port: 3000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
