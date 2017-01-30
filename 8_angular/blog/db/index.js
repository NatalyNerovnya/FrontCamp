var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://Nataly:password@ds157278.mlab.com:57278/blog');
module.exports = connection;
