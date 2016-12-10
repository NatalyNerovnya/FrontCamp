import { clearContent, setContent, hideDropdownList} from './newsContent';
import { clickDropdown } from './events.js';
require("../less/app.less");

exports.clickDropdown = clickDropdown;
exports.clearContent = clearContent;
exports.hideDropdownList = hideDropdownList;
exports.setContent = setContent;

 if(DEBUG){
	console.log("debug mode");
}
if(PRODUCTION){
	console.log("Production");
}
