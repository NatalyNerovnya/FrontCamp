import { apiWrapper } from './apiWrapper';
import { dropdown as dropdownTemplate} from '../templates/dropdown';


export class SourceRepository{

	constructor(){
		this.requestStr = 'https://newsapi.org/v1/sources?language=';
	};

	getSetOfCategories(lang){
		return apiWrapper.getData(this.requestStr + lang)
	 	.then(data => {
	 	let array = [];
	  	for (let {id} of data.sources) {
	  		array.push(id);}
	  	return new Set(array);})
	};

	setDropdowns(arr){
		var refArr = '';
	 	arr.forEach(c => {
	 		refArr = `${refArr} ${ dropdownTemplate(c)}`;
	 	})
	 	document.getElementById("source-filter").innerHTML = refArr;
	};

};