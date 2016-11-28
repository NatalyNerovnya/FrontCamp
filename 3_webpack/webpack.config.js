var webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');

module.exports = {
    entry: "./js/sources",
    output: {
        path: __dirname + "/dist",
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
			  test: /\.less$/
			  }
	  ]
	},
	plugins: [ 
		new WebpackBrowserPlugin(),
		new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false,
			drop_console: true,
			unsafe: true
		}}),
		new webpack.DefinePlugin({DEBUG: true, PRODUCTION: false})
		],
	devServer: {
		host: 'localhost',
		port: 9081
	}
};



