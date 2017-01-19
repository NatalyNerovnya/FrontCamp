import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    constructor(props) {
        super(props);
        this.id = props.globalState.selectedArticleId;
        this.changeRoute = props.changeRoute;
        this.state = { article: [] };
        this.editArticle = this.editArticle.bind(this);
        this.returnToAll = this.returnToAll.bind(this);
    }

    editArticle(e){
        let { id } = e.target.dataset;
        this.changeRoute({ route: 'editArticle', selectedArticleId: id })
    }
    returnToAll(e){
        this.changeRoute({ route: 'articles'})
    }
    componentDidMount() {
        fetch(`http://localhost:4000/articles/getArticle/${this.id}`)
            .then(response => response.json())
            .then(data => this.setState({ article: data }));
    }
    render() {
        return (
            <div className="articleBox" key={this.state.article._id}>
                <span className="articleDate">{this.state.article.author}, {new Date(this.state.article.publishDate).toDateString()}</span>
                <h2 className="articleTitle">{this.state.article.title}</h2>
                <img className="blogImg" src={`http://localhost:4000/uploads/${this.state.article.imageUrl}`} role="presentation" />
                <p>{this.state.article.text}</p>
                <a className="btn edit" onClick={this.changeRoute.bind({ route: "articles" })}>Return to all</a>
                <a className="btn edit" data-id={this.id} onClick={this.editArticle}>Edit</a>
            </div>
        )
    }
}

export default Article;
