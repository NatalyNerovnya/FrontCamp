export  function clearNewsContent(){
	let elem = document.getElementById("news-content");
	elem.innerHTML = '';
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
}