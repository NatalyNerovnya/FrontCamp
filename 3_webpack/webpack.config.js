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
	}
}