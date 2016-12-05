import { apiWrapper } from './apiWrapper';
import { dropdown as dropdownTemplate} from '../templates/dropdown';
import {getArticles} from './getArticles';

export class newsSources{
   setSources(lang){
 	apiWrapper.getData(`https://newsapi.org/v1/sources?language=${lang}`)
	 .then(data => {
	 	let array = [];

	  	for (let {id} of data.sources) {
	  		array.push(id);}

	  return new Set(array);})
	 .then(arr => { 
	 	var refArr = '';

	 	arr.forEach(c => {
	 		refArr = `${refArr} ${ dropdownTemplate(c)}`;
	 	})
	 	document.getElementById("source-filter").innerHTML = refArr;})
	 .then(()=>{
	 	var elements = document.getElementsByClassName('source-href');
	 	for (let i = 0; i < elements.length; i++) {
	 		elements[i].addEventListener('click', () => {
				getArticles(elements[i].getAttribute('id'));
	});
	 }}); 	
 };
}