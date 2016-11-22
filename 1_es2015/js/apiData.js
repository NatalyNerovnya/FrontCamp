let api = "5fb7dea8d7f440b1af9b7cd7cba9640d";

function getData(connectionString){
	return fetch(connectionString, {method: 'GET'}).then(response => response.json());
};

 function getArticles(source){
 	clearNewsContent();
 	let requestArticlstr = `https://newsapi.org/v1/articles?source=${source}&apiKey=${api}`;

 	getData(requestArticlstr)
	 .then(data => {
	 	let newsContentArr = `<h3 id="paperName">${data.source.toUpperCase()}</h3>`;

	    for (let {author, description, publishedAt, title, url, urlToImage} of data.articles) {
	  	newsContentArr = `${newsContentArr} \ <div class="news"> \<img class="news-img"src="${urlToImage}"/>
			<div class="logo news-content"><a href="${url}" target="_blank">${title}</a></div>\
			<p class="news-text">${description}</p> \ </div> <div class="clear"></div>`;}
		document.getElementById("news-content").innerHTML = newsContentArr;
	 })
 	.catch(error => console.log('error: ' + error));

 	var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
 };

  function setSources(){
 	getData(" https://newsapi.org/v1/sources?language=en")
	 .then(data => {
	 	let array = [];

	  	for (let {id} of data.sources) {
	  		array.push(id);}

	  return new Set(array);})
	 .then(arr => { 
	 	var refArr = '';

	 	arr.forEach(c => {
	 		refArr = `${refArr}\ <a href="#" onclick="getArticles('${c}')"id=${c}>${c}</a>`
	 	})

	 	document.getElementById("source-filter").innerHTML = refArr;})
 	.catch(error => console.log('error: ' + error)); 	
 };


function clearNewsContent(){
	let elem = document.getElementById("news-content");
	while (elem.hasChildNodes()) {
    elem.removeChild(elem.lastChild);
}};

setSources();
