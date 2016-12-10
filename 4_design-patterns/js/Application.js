import { SourceRepository } from './SourceRepository';
import { ArticlesRepository } from './ArticlesRepository';


export class Application{
	 constructor(){
	 	this.sourceRepository = new SourceRepository();
	 	this.articlesRepository = new ArticlesRepository();
	 };


	start(lang){
		debugger;
		this.sourceRepository.getSetOfCategories(lang)
		.then(arr => this.sourceRepository.setDropdowns(arr))
	 	.then(() => this.addClickEventsToCategories());
	 }; 

	getArticles(source){
		home.clearContent("source-filter");
		home.clearContent("news-content");
		this.articlesRepository.setArticles(source)
		.then(data => this.articlesRepository.createDomElements(data))
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

	static getInstance() {
	  if (!Application.instance) {
	   Application.instance = new Application();     
	  } 
	  return Application.instance;  
	};
}