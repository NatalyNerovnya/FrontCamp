import { apiWrapper } from './apiData';
import { API } from './variables';
exports.getArticles = getArticles;

export function getArticles(source){
 	home.clearNewsContent();
 	let requestArticlstr = `https://newsapi.org/v1/articles?source=${source}&apiKey=${API}`;

 	require("../css/news.less");

 	apiWrapper.getData(requestArticlstr)
	 .then(data => {
	 	let newsContentArr = `<h3 id="paperName">${data.source.toUpperCase()}</h3>`;

	    for (let {author, description, publishedAt, title, url, urlToImage} of data.articles) {
	  	newsContentArr = `${newsContentArr} \ <div class="news"> \<img class="news-img"src="${urlToImage}"/>
			<div class="logo news-content"><a href="${url}" target="_blank">${title}</a></div>\
			<p class="news-text">${description}</p> \ </div> <div class="clear"></div>`;}
		document.getElementById("news-content").innerHTML = newsContentArr;
	 })
 	.catch(error => console.log('error: ' + error));
 	home.hideDropdownList();
 };

  function setSources(){
 	apiWrapper.getData(" https://newsapi.org/v1/sources?language=en")
	 .then(data => {
	 	let array = [];

	  	for (let {id} of data.sources) {
	  		array.push(id);}

	  return new Set(array);})
	 .then(arr => { 
	 	var refArr = '';

	 	arr.forEach(c => {
	 		refArr = `${refArr}\ <a href="#" id=${c} class="source-href">${c}</a>`
	 	})
	 	document.getElementById("source-filter").innerHTML = refArr;})
	 .then(()=>{
	 	var elements = document.getElementsByClassName('source-href');
	 	for (let i = 0; i < elements.length; i++) {
	 		elements[i].addEventListener('click', () => {
	 			debugger;
				getArticles(elements[i].getAttribute('id'));
	});
	 }})
 	.catch(error => console.log('error: ' + error)); 	
 };

 setSources();


// document.getElementsByClassName('source-href').forEach(s => {
// 	s.addEventListener('click', () => {
// 		getArticles(s.getAttribute('id'));
// 	});
// });
