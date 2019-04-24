const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.woff2$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 50000,
                        mimetype: "application/font-woff",
                        name: "./assets/fonts/[name].[ext]",
                        publicPath: "../",
                    },
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
