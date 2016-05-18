const webpack = require('webpack')
module.exports = {
	entry: [
    './src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
	module: {
		loaders: [
            {
            	test: /\.jsx?$/,
            	loader: 'babel',
            	exclude: /node_modules/
            }
		]
	}
}