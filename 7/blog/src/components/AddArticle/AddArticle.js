import React, { Component } from 'react';
import './AddArticle.css';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.changeRoute = props.changeRoute;
        this.state = {}
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleFileChange(fileInput) { 
        let file = fileInput.currentTarget.files[0];
        this.setState({ picture : file });
       debugger;
    }
    sendData(e) {
        debugger;
        e.preventDefault();
        var formData;
        formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('text', this.state.text);
        formData.append('author', this.state.author);
        formData.append('picture', this.state.picture);
        fetch('http://localhost:4000/articles/addArticle', {
            method: 'POST',
            body: formData
        }).then(() => {
            debugger;
            this.changeRoute({ route: 'articles'})});
    }
    render() {
        return (
            <div className="addForm">
                <h2>Add new Article</h2>
                <form method='POST' onSubmit={this.sendData} encType='multipart/form-data'>
                    <div className="inputName">Title:</div>
                    <div><input type='text' name='title' onChange={this.handleChange} /></div>
                    <div className="inputName">Author:</div>
                    <div><input type='text' name='author' onChange={this.handleChange} /></div>
                    <div className="inputName">Text:</div>
                    <div><textarea type='text' name='text' onChange={this.handleChange} /></div>
                    <div className="inputName">Picture:</div>
                    <div><input type='file' name='picture' onChange={this.handleFileChange} /></div>
                    <button className="btnAdd">Add</button>
                </form>
            </div>
        )
    }
}

export default AddArticle;
