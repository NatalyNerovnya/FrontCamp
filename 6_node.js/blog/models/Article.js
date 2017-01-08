var mongoose = require('mongoose');

var articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    publishDate: {
        type: Date,
        default: new Date().toLocaleDateString()
    },
    author: {
        type: String
    }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;