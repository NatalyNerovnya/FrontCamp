export let clickDropdown = id => document.getElementById(id).classList.toggle("show");

window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require.ensure(['./Application.js'],() => {	
		let src = require('./Application.js');
		let app = src.Application.getInstance();		
		var lang = document.querySelector('input[name="lang"]:checked').value;	
		app.start(lang);			
	});

});
}
