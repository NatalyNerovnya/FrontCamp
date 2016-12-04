import { apiWrapper } from './apiWrapper';
import { API } from './variables';
import { paperName as paperNameTemplate} from '../templates/paperName' ;
import { newsContainer as newsContainerTemplate} from '../templates/newsContainer';
exports.getArticles = getArticles;

export function getArticles(source){
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