var webpack = require('webpack');

module.exports = {
	mode: 'production',
    entry: __dirname+'/javascripts/entry.js',
    output: {
        path: __dirname+'/javascripts',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/,loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    }
};