export let clickDropdown = id => document.getElementById(id).classList.toggle("show");


window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	if(DEBUG){
			require.ensure(['./newsSources'],() => {			
			let src = require("./newsSources.js");
			src.setSources();
	});
		} else{
			let src = require("./newsSources.js");
			src.setSources();
		}
});
}
