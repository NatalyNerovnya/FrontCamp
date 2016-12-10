import { apiWrapper } from './apiWrapper';
import { API } from './variables';

export class ArticlesRepository{

	constructor(){
		self = this;
		self.requestArticlstr = `https://newsapi.org/v1/articles?apiKey=${API}&source=`;
	};

	setArticles(source){	
 	require("../less/news.less");
 	return apiWrapper.getData(self.requestArticlstr + source)
 };

};
