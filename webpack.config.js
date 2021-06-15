const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        a: './src/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './public/a.html',
            filename: 'a.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: {
                    name: 'common',
                    chunks: 'initial',
                    minChunks: 2,
                    priority: -20
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10
                }
            }
        }
    }
}