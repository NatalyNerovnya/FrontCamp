import { apiWrapper } from './apiData';
import { API } from './variables';
import {clearNewsContent, hideDropdownList} from './newsContent';
import {clickDropdown} from './events.js';
exports.clickDropdown = clickDropdown;
exports.getArticles = getArticles;

function getArticles(source){
 	clearNewsContent();
 	let requestArticlstr = `https://newsapi.org/v1/articles?source=${source}&apiKey=${API}`;

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
 	hideDropdownList();
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
	 		refArr = `${refArr}\ <a href="#" onclick="home.getArticles('${c}')"id=${c}>${c}</a>`
	 	})

	 	document.getElementById("source-filter").innerHTML = refArr;})
 	.catch(error => console.log('error: ' + error)); 	
 };

 setSources();