export class ArticleTemplateRender{
	constructor(urlToImage, url, title, description){
		this.image = urlToImage;
		this.url = url;
		this.title = title;
		this.description = description;
	}

	render(){
	return `
	 	<img class="news-img"src="${this.image}"/>
		<div class="logo news-content">
			<a href="${this.url}" target="_blank">${this.title}</a>
		</div>
		<p class="news-text">${this.description}</p> 
		</div>`
	}
}