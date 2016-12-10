import { apiWrapper } from './apiWrapper';

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

};