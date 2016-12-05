import { apiWrapper } from './apiWrapper';
import { dropdown as dropdownTemplate} from '../templates/dropdown';
import { API } from './variables';
import { paperName as paperNameTemplate} from '../templates/paperName' ;
import { newsContainer as newsContainerTemplate} from '../templates/newsContainer';
exports.getArticles = getArticles;


export class Application{

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

 getArticles(source){
 	home.clearContent("news-content");
 	let requestArticlstr = `https://newsapi.org/v1/articles?source=${source}&apiKey=${API}`;
 	require("../less/news.less");

 	apiWrapper.getData(requestArticlstr)
	 .then(data => {
	 	let newsContentArr = paperNameTemplate(data.source);

	    for (let {description, title, url, urlToImage} of data.articles) {
	  	newsContentArr = `${newsContentArr} ${newsContainerTemplate(urlToImage, url, title, description)}`;
	    }

		document.getElementById("news-content").innerHTML = newsContentArr;
	 });
 	home.hideDropdownList();
 };

}