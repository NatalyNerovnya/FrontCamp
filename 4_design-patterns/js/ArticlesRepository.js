import { apiWrapper } from './apiWrapper';
import { API } from './variables';
import { paperName as paperNameTemplate} from '../templates/paperName' ;
import { newsContainer as newsContainerTemplate} from '../templates/newsContainer';

export class ArticlesRepository{

	constructor(source){
		self = this;
		self.requestArticlstr = `https://newsapi.org/v1/articles?source=${source}&apiKey=${API}`;
	};

	setArticlesContent(content){
		document.getElementById('news-content').innerHTML = content;
	};

	createDomElements(data){
		for (let {description, title, url, urlToImage} of data) {
	  	newsContentArr = `${newsContentArr} ${newsContainerTemplate(urlToImage, url, title, description)}`;
	    }
	};

	setArticles(){
 	setArticlesContent(''); 	
 	require("../less/news.less");

 	apiWrapper.getData(self.requestArticlstr)
	 .then(data => {
	 	let newsContentArr = paperNameTemplate(data.source);
	 	createDomElements(data.articles);
	    setArticlesContent(newsContentArr);
	 });
 	home.hideDropdownList();
 };

};
