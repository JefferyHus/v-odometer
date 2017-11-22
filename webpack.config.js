const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
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
				loader: 'vue-loader',
				options:{
					postcss: [require('autoprefixer')({
						browsers: [
							'last 2 versions',
							'last 4 Android versions',
							'last 3 iOS versions'
						]
					})]
				}
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
};

// production configurations
if (process.env.NODE_ENV === 'production')
{
  module.exports.output.filename = '[name].prod.js';

  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ];

}
else
{
  // development configurations
  module.exports.output.filename = 'dist/[name].dev.js';

  module.exports.module.loaders = module.exports.module.loaders.concat([
    {
      test: /\.css$/,
      loader: 'style!css'
    }
  ]);

  module.exports.devServer = {
    contentBase: './'
  };

  module.exports.devtool = '#source-map';
}