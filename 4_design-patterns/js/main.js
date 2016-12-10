export  function clearContent(id){
	home.setContent(id,'');
};

export  function setContent(id, content){
  let elem = document.getElementById(id);
  elem.innerHTML = content;
};

export function hideDropdownList(){
	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
};

 export let clickDropdown = id => document.getElementById(id).classList.toggle("show");

window.onload = function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require.ensure(['./Application.js'],() => {	
		let src = require('./Application.js');
		let app = src.Application.getInstance();		
		var lang = document.querySelector('input[name="lang"]:checked').value;	
		app.start(lang);			
	});
});
};