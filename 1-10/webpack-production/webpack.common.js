const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app: './src/index.js'
    },
    output: {
        filename: [name].bundle.js,
        path: path.resolve(__dirname,'dist')
    },
    plugin:[
        new CleanWebpackPlugin(['dist']),
        new HTMLWebpackPlugin({
            title: 'production'
        })
    ]
}