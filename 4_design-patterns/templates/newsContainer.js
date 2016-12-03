export const newsContainer = (urlToImage, url, title, description) => 
`<div class="news"> 
 	<img class="news-img"src="${urlToImage}"/>
	<div class="logo news-content">
		<a href="${url}" target="_blank">${title}</a>
	</div>
	<p class="news-text">${description}</p> 
	</div>
	<div class="clear">
 </div>`;