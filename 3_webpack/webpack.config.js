module.exports = {
    entry: ["./js/events", "./js/sources"],
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
		  }
	  ]
	}
}