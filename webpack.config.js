var path = require('path');

module.exports = {
    entry: './assets/js/react/app.js',
    output: {
        filename: './assets/js/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ],
    } 
};