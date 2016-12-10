export let clickDropdown = id => document.getElementById(id).classList.toggle("show");

window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require.ensure(['./Application.js'],() => {	
		let src = require('./Application.js');
		let app = src.Application.getInstance();
		debugger;	
		
		var lang = document.querySelector('input[name="lang"]:checked').value;	
		app.setSources(lang)
		home.clearContent("source-filter");
		// let src = require("./newsSources.js");
		// let	sources = new src.newsSources();
		// sources.setSources(lang);
			
	});

});
}
