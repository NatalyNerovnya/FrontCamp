import { paperName as paperNameTemplate } from '../templates/paperName' ;
import { ArticleTemplateRender } from './ArticleTemplateRender';
import { ArticleDecorator } from './ArticleDecorator' ;

export class ArticlesRender{
	constructor(){};

	createDomElements(data){

		var newsContentArr = paperNameTemplate(data.source);
		for (let {description, title, url, urlToImage} of data.articles) {
			let article = new ArticleTemplateRender(urlToImage, url, title, description);
			let decorator = new ArticleDecorator(article)
	  		newsContentArr = `${newsContentArr} ${decorator.render()}`;
	    }
    	return newsContentArr;
	};
}