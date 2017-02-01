var webpack = require('webpack');
//const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
	entry: "./admin/admin.js",
	output: {
		path: __dirname + "/public/dist",
		filename: "build.js",
		library: "home"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
			},
			{
				loader: "style-loader!css-loader!less-loader",
				test: /\.less$/,
			}
			, {
				test: /\.html$/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		// new WebpackBrowserPlugin({url: 'http://localhost'}),
		// new webpack.optimize.UglifyJsPlugin({
		// compress: {
		// 	warnings: false,
		// 	drop_console: true,
		// 	unsafe: true
		// }}),
		//new webpack.DefinePlugin({DEBUG: true, PRODUCTION: false})
	]//,
	// devServer: {
	// 	host: 'localhost',
	// 	port: 9081
	// }
};



