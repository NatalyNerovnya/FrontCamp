var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');

var Article = mongoose.model('Article', {title: String, text: String, author: String});