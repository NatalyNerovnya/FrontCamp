import React, { Component } from 'react';
import './EditArticle.css';

class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.id = props.globalState.selectedArticleId;
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
        this.changeRoute = props.changeRoute;
        this.state = {
            article: {
                title: '',
                text: ''
            }
        }
    }
    componentDidMount() {
        fetch(`http://localhost:4000/articles/getArticle/${this.id}`)
            .then(response => response.json())
            .then(data => this.setState({ article: data }));
    }
    handleChange(e) {
        if (e.target.name === "title")
            this.setState({ article: { title: e.target.value, text: this.state.article.text } });
        else if (e.target.name === "text")
            this.setState({ article: { text: e.target.value, title: this.state.article.title } });
    }
    deleteArticle(e) {
        debugger;
        fetch('http://localhost:4000/articles/deleteArticle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: this.id })
        }).then(() => {
            debugger;
            this.changeRoute({ route: 'articles'})});
    }
    sendData(e) {
        e.preventDefault();
        fetch('http://localhost:4000/articles/editArticle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.state.article.title,
                text: this.state.article.text,
                id: this.id
            })
        }).then(() => this.changeRoute({ route: 'article', selectedArticleId: this.id }));

    }
    render() {
        return (
            <div className="addForm">
                <h2>Edit Article</h2>
                <form method='POST' encType='multipart/form-data'>
                    <div className="inputName">Title:</div>
                    <div><input type='text' name='title' value={this.state.article.title} onChange={this.handleChange} /></div>
                    <div className="inputName">Text:</div>
                    <div><textarea type='text' name='text' value={this.state.article.text} onChange={this.handleChange} /></div>
                    <button className="btnAdd" onClick={this.sendData}>Save</button>
                </form>
                <a className="btn delete" onClick={this.deleteArticle}>Delete</a>
            </div>
        )
    }
}

export default EditArticle;
