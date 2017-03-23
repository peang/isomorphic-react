var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src/web',
        port: 3000
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './src/web/client.js',
    module: {
        loaders: [{
            test: path.join(__dirname, 'src'),
            loader: ['babel'],
            query: {
                cacheDirectory: 'babel_cache',
                presets: ['react', 'es2015']
            }
        }]
    },
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.BROWSER': JSON.stringify(true)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};