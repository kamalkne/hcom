const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: {
        index: './client/bootstrap.ts',
        polyfills: './polyfills.ts'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.css' ]
    },
    devServer: {
        contentBase: './dist',
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
        ]
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin(
            {
                title: 'Hcom App',
                template: 'index.html'
            }
        )
    ],
};
            
module.exports = config;
