const webpack = require('webpack')
const  path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
	entry : APP_DIR + '/index.tsx',
	output : {
		path : BUILD_DIR,
		filename : 'bundle.js'
	},
	devtool : 'source-map',
	resolve : {
		extensions : ['.ts', '.tsx', '.js', '.json']
	},
	module : {
		rules : [
			{
				test : /\.tsx?$/,
				loader : 'awesome-typescript-loader'
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : './src/index.html'
		}) 
	]
}

module.exports = config;
