import React, { Component } from 'react';
import './Article.css';

class Articles extends Component {
    constructor(props){
        super(props);
        this.changeRoute = props.changeRoute;
        this.selectArticle = this.selectArticle.bind(this);
        this.state = {articles: []}
    }

    componentDidMount(){
        debugger;
        fetch('http://localhost:4000/articles/getArticles')
        .then(response => response.json())
        .then(data => this.setState({articles : data}));
    }
    
    selectArticle(e){
        let { id } = e.target.dataset;
        this.changeRoute({route: 'article', selectedArticleId: id})
    }

    render() {
        var articles = [
            {title: "ArticleTiastle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", _id: 1323},
            {title: "ArticladaseTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", _id: 2424},
            {title: "ArticleasdsaTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", _id: 3321},
            {title: "ArticlesdasdTitle", text: "Tslkdflksjlkfjsldkmfldkjlksdjfksdfls", date: "12.12.1212", _id: 123213}
        ];
        debugger;
        return (
            <div>
            {this.state.articles.map(article => 
                <div className="articleBox" key={article._id}>
                    <span className="articleDate">{article.date}</span>
                    <h2 className="articleTitle" data-id={article._id} onClick={this.selectArticle}>{article.title}</h2>
                    <img className="blogImg" src="IMG_10012017_224243.png" role="presentation"/>
                </div>
          )
        }
        </div>
      
    );
        }
}

export default Articles;
