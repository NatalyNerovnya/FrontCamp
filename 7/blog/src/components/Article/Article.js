import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    constructor(props){
        super(props);
        this.id = props.globalState.selectedArticleId;
        this.changeRoute = props.changeRoute;
        this.article = {};
    }
    componentWillMount(){
        debugger;
        fetch('http://localhost:4000/articles/getArticle')
        .then((response) => {
            debugger;
            response.json()})
        .then(data => {
            debugger; 
            this.article = data.article;
            this.changeRoute({route: 'article', selectedArticleId: data._id})
        });
    }
    render() {
        debugger;
        //var article = {title: "ArticleTiastle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212, Unknown", id: 1};
        return (
          <div className="articleBox">
            <span className="articleDate">{this.article.date}</span>
            <h2 className="articleTitle">{this.article.title}</h2>
            <img className="blogImg" src="IMG_10012017_224243.png" role="presentation"/>
            <p>{this.article.text}</p>
            <a className="btn edit" onClick={this.changeRoute.bind({route: "articles"})}>Return to all</a>
          </div>
      );
    }
}

export default Article;
