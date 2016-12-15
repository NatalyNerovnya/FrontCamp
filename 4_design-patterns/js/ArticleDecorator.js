export class ArticleDecorator{
	constructor(articleTemplate){
		this.articleTemplate = articleTemplate;
	}

	render(){
	return `<div class="news"> 
	 	${this.articleTemplate.render()}
		<div class="clear">
	   </div>`;
	}
}