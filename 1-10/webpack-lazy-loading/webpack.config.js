const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: './dist',
        hot: true
    }
};