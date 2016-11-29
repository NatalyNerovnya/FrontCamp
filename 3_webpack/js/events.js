export let clickDropdown = id => document.getElementById(id).classList.toggle("show");


window.onload= function(){document.getElementsByClassName('dropbtn')[0].addEventListener('click',() => {
	require("./newsScript.js");
    // require.ensure(['./newsScript'], function(require) {
    //     let App = require('./newsScript').default;
    //     (new App()).showSources();
    // })
});
}