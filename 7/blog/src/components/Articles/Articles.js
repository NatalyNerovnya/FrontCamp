import React, { Component } from 'react';
import './Article.css';

class Articles extends Component {
    constructor(props){
        super(props);
        this.changeRoute = props.changeRoute;
        this.selectArticle = this.selectArticle.bind(this);
    }
    
    selectArticle(e){
        const { id } = e.target.dataset;
        this.changeRoute({route: 'article', selectArticleId: id})
    }

    render() {
        var articles = [
            {title: "ArticleTiastle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", id: 1323},
            {title: "ArticladaseTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", id: 2424},
            {title: "ArticleasdsaTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", id: 3321},
            {title: "ArticlesdasdTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", id: 123213}
        ];

        return (
            <div>
            {articles.map(article => 
                <div className="articleBox" key={article.id}>
                    <span className="articleDate">{article.date}</span>
                    <h2 className="articleTitle" data-id={article.id} onClick={this.selectArticle}>{article.title}</h2>
                    <img className="blogImg" src="IMG_10012017_224243.png" role="presentation"/>
                </div>
          )
        }
        </div>
      
    );
        }
}

export default Articles;
