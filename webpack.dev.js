const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const helpers = require('./helpers')


module.exports = {

    entry: './src/client/index.js',

    mode: 'development',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {

            //     test: /\.(css|sass|scss)$/,
            //     use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })

            // },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },

            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                    // test: /\.(css|sass|scss)$/,
                    // use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })

            },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // new ExtractTextPlugin({
        //     filename: 'styles.css'
        // })


    ]
}