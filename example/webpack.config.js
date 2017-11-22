/**
 * Author: Jeffery Hussin.
 * Application: Anonime.
 * Description: A simple web application similar to youtube but just for animes.
 * Version: 1.0.0_alpha
 */

const path = require('path')
const webpack = require('webpack')

module.exports = {
	context: path.resolve(__dirname, ''),
	entry: './main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.vue', '.js'],
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
}