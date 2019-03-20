const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode : 'development',
    entry : './index.js',
    context : path.resolve(__dirname),
    output : {
        filename : '[name].bundle.js',
        path : path.resolve(__dirname, 'dist')
    },
    devtool : 'true',
    devServer : {
        contentBase : path.join(__dirname, 'dist'),
        watchContentBase: true,
        compress : true,
        port : 9000
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './index.html'
        })
    ]
}