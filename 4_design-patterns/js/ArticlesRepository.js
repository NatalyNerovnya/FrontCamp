import { apiWrapper } from './apiWrapper';
import { API } from './variables';
//import { newsContainer as newsContainerTemplate } from '../templates/newsContainer';
import { paperName as paperNameTemplate } from '../templates/paperName' ;
import { ArticleDecorator } from './ArticleDecorator' ;

export class ArticlesRepository{

	constructor(){
		self = this;
		self.requestArticlstr = `https://newsapi.org/v1/articles?apiKey=${API}&source=`;
	};

	createDomElements(data){
		var newsContentArr = paperNameTemplate(data.source);
		for (let {description, title, url, urlToImage} of data.articles) {
			let decorator = new ArticleDecorator(urlToImage, url, title, description);
	  		newsContentArr = `${newsContentArr} ${decorator.render()}`;
	    }
	    return newsContentArr;
	};

	setArticles(source){	
 	require("../less/news.less");
 	return apiWrapper.getData(self.requestArticlstr + source)
 };

};
