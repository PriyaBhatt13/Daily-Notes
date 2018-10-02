const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        polyfills: './src/polyfills.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new webpack.ProvidePlugin({
           // _: 'lodash',
           join: ['lodash','join']
        })
    ],
    module: {
        rules:[
            {
                test: require.resolve('index.js'),
                use: 'imports-loader?this=window'
            },
            {
                test: require.resolve('global.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ]
    }
};