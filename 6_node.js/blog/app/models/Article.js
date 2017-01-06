var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog');

var Article = mongoose.model('Article', {
	title: String, 
	text: String,
	author: String, 
	createdDate: Date,
});