export let clickDropdown = id => document.getElementById(id).classList.toggle("show");


window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require.ensure(['./newsSources.js'],() => {			
			let src = require("./newsSources.js");
			src.setSources();
	});

});
}
