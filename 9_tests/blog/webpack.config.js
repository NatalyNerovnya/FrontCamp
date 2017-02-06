var webpack = require('webpack');

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
	plugins: []
};



