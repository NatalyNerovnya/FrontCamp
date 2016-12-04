import {clearContent, hideDropdownList} from './newsContent';
import {clickDropdown} from './events.js';
exports.clickDropdown = clickDropdown;
exports.clearContent = clearContent;
exports.hideDropdownList = hideDropdownList;


require("../less/app.less");

 if(DEBUG){
	alert("debug mode");
}
if(PRODUCTION){
	console.log("Production");
}
