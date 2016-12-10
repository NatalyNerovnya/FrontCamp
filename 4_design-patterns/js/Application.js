import { SourceRepository } from './SourceRepository';
import { ArticlesRepository } from './ArticlesRepository';
import { ArticlesRender } from './ArticlesRender';
import { SourceRender } from './SourceRender';


export class Application{
	 constructor(){
	 	this.sourceRepository = new SourceRepository();
	 	this.sourceRender = new SourceRender();
	 	this.articlesRepository = new ArticlesRepository();
	 	this.articlesRender = new ArticlesRender();
	 };

	static getInstance() {
	  if (!Application.instance) {
	   Application.instance = new Application();     
	  } 
	  return Application.instance;  
	};

	start(lang){
		debugger;
		this.sourceRepository.getSetOfCategories(lang)
		.then(arr => this.sourceRender.setDropdowns(arr))
	 	.then(() => this.addClickEventsToCategories());
	 }; 

	getArticles(source){
		home.clearContent("source-filter");
		home.clearContent("news-content");
		this.articlesRepository.setArticles(source)
		.then(data => this.articlesRender.createDomElements(data))
		.then(content => home.setContent('news-content', content))
	};

	addClickEventsToCategories(){
		var elements = document.getElementsByClassName('source-href');
		for(let i = 0; i < elements.length; i++){
			elements[i].addEventListener('click', () => {
				Application.instance.getArticles(elements[i].getAttribute('id'))
			});
		}
	};
}