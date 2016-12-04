export let clickDropdown = id => document.getElementById(id).classList.toggle("show");


window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require.ensure(['./newsSources.js', './newSourcesDe.js'],() => {		
			var lang = document.querySelector('input[name="lang"]:checked').value;	
			var sources;
			home.clearContent("source-filter");
			if(lang === "en"){	
				let src = require("./newsSources.js");
				sources = new src.newsSources();
			} 
			else if(lang === "de"){
				let src = require("./newSourcesDe.js");
				sources = new src.newSourcesDe();
			}

			sources.setSources();
			
	});

});
}
