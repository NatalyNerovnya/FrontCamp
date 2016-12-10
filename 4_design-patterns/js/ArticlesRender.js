import { paperName as paperNameTemplate } from '../templates/paperName' ;
import { ArticleDecorator } from './ArticleDecorator' ;

export class ArticlesRender{
	constructor(){};

	createDomElements(data){
		var newsContentArr = paperNameTemplate(data.source);
		for (let {description, title, url, urlToImage} of data.articles) {
			let decorator = new ArticleDecorator(urlToImage, url, title, description);
	  		newsContentArr = `${newsContentArr} ${decorator.render()}`;
	    }
    	return newsContentArr;
	};
}