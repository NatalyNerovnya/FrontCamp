import { SourceRepository } from './SourceRepository';
import { ArticlesRepository } from './ArticlesRepository';

export class Application{
	 constructor(){
	 	this.sourceRepository = new SourceRepository();
	 	this.articlesRepository = new ArticlesRepository('bbc-news');
	 };


	setSources(lang){
		this.sourceRepository.getSetOfCategories(lang)
		.then(arr => this.sourceRepository.setDropdowns(arr))
	 	.then(() => this.addClickEventsToCategories());
	 }; 

	addClickEventsToCategories(){
		var elements = document.getElementsByClassName('source-href');
		for(let i = 0; i < elements.length; i++){
			elements[i].addEventListener('click', () => {
				articlesRepository.getArticles(elements[i].getAttribute('id'))
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