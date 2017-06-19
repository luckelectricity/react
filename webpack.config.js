var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./demo2/index.js",
    module: {
        loaders:[{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path: __dirname,
        filename: "./demo2/bundle.js"
    }

}