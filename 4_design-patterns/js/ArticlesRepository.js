import { apiWrapper } from './apiWrapper';
import { API } from './variables';
import { newsContainer as newsContainerTemplate} from '../templates/newsContainer';
import { paperName as paperNameTemplate} from '../templates/paperName' ;

export class ArticlesRepository{

	constructor(){
		self = this;
		self.requestArticlstr = `https://newsapi.org/v1/articles?apiKey=${API}&source=`;
	};

	createDomElements(data){
		var newsContentArr = paperNameTemplate(data.source);
		for (let {description, title, url, urlToImage} of data.articles) {
	  	newsContentArr = `${newsContentArr} ${newsContainerTemplate(urlToImage, url, title, description)}`;
	    }
	    return newsContentArr;
	};

	setArticles(source){	
 	require("../less/news.less");
 	return apiWrapper.getData(self.requestArticlstr + source)
 };

};
