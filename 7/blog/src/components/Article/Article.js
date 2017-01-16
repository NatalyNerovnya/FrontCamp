import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    constructor(props) {
        super(props);
        this.id = props.globalState.selectedArticleId;
        this.changeRoute = props.changeRoute;
        this.state = { article: [] };
    }
    componentDidMount() {
        debugger;
        fetch(`http://localhost:4000/articles/getArticle/${this.id}`)
            .then(response => response.json())
            .then(data => this.setState({ article: data }));
    }
    render() {
        return (
            <div className="articleBox" key={this.state.article._id}>
                <span className="articleDate">{this.state.article.author}, {this.state.article.publishDate}</span>
                <h2 className="articleTitle">{this.state.article.title}</h2>
                <img className="blogImg" src="IMG_10012017_224243.png" role="presentation" />
                <p>{this.state.article.text}</p>
                <a className="btn edit" onClick={this.changeRoute.bind({ route: "articles" })}>Return to all</a>
            </div>
        )
    }
}

export default Article;
