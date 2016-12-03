import {clearNewsContent, hideDropdownList} from './newsContent';
import {clickDropdown} from './events.js';
exports.clickDropdown = clickDropdown;
exports.clearNewsContent = clearNewsContent;
exports.hideDropdownList = hideDropdownList;

require("../css/app.less");

 if(DEBUG){
	alert("debug mode");
}
if(PRODUCTION){
	console.log("Production");
}
