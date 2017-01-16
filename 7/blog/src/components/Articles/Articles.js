import React, { Component } from 'react';
import './Article.css';

class Articles extends Component {
    constructor(props) {
        super(props);
        this.changeRoute = props.changeRoute;
        this.selectArticle = this.selectArticle.bind(this);
        this.state = { articles: [] }
    }

    componentDidMount() {
        debugger;
        fetch('http://localhost:4000/articles/getArticles')
            .then(response => response.json())
            .then(data => this.setState({ articles: data }));
    }

    selectArticle(e) {
        let { id } = e.target.dataset;
        this.changeRoute({ route: 'article', selectedArticleId: id })
    }

    render() {
        return (
            <div>
                {this.state.articles.map(article =>
                    <div className="articleBox" key={article._id}>
                        <span className="articleDate">{article.publishDate}, {article.author}</span>
                        <h2 className="articleTitle" data-id={article._id} onClick={this.selectArticle}>{article.title}</h2>
                        <img className="blogImg" src="IMG_10012017_224243.png" role="presentation" />
                    </div>
                )
                }
            </div>
        );
    }
}

export default Articles;
