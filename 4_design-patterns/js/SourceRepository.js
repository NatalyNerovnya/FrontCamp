import { apiWrapper } from './apiWrapper';
import { dropdown as dropdownTemplate} from '../templates/dropdown';


export class SourceRepository{

	getSetOfCategories(lang){
		apiWrapper.getData(`https://newsapi.org/v1/sources?language=${lang}`)
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

	addLinksToCategories(){
		var elements = document.getElementsByClassName('source-href');
		for(let i = 0; i < elements.length; i++){
			elements[i].addEventListener('click', () => {
				getArticles(elements[i].getAttribute('id'))
			});
		}
	};

	setSources(lang){
		getSetOfCategories(lang)
	    .then(arr => setDropdowns(arr);)
	 	.then(() => addLinksToCategories());
	 }; 


}