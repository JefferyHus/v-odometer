/**
 * Author: Jeffery Hussin.
 * Application: v-odometer example.
 * Description: A simple example of how to use this component.
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