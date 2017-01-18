import React, { Component } from 'react';
import './AddArticle.css';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.sendData = this.sendData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.state = {}
        this.formData = new FormData();
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleFileChange(fileInput) {
       var file = fileInput.currentTarget.files[0];
       this.formData.append('picture', fileInput.currentTarget.files[0], 'file');
       debugger;
    }
    sendData(e) {
        debugger;
        e.preventDefault();
        fetch('http://localhost:4000/articles/addArticle', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: this.formData,
            body: JSON.stringify({
                title: this.state.title,
                text: this.state.text,
                author: this.state.author,
                filename: this.state.picture,
            })
        })
        debugger;
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
