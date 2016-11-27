"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearNewsContent = clearNewsContent;
exports.hideDropdownList = hideDropdownList;
function clearNewsContent() {
  var elem = document.getElementById("news-content");
  elem.innerHTML = '';
};

function hideDropdownList() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];

    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}