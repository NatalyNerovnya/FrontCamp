var Article = require('../models/Article');

module.exports = {
    add: function(articleModel) {
        return new Promise(function (resolve, reject) {
            if (articleModel.author === "")
                articleModel.author = "Unknown";
            var article = new Article
                ({
                    title: articleModel.title,
                    text: articleModel.text,
                    publishDate: articleModel.publishDate || new Date().toLocaleDateString(),
                    author: articleModel.author
                }); 

                article.save(function (err, savedArticle) {
                    if (err) {
                        console.log(err);
                    } 
                    else {
                        resolve(savedArticle._id);
                    }
                });
            });            
    },

    getAll: function() {
        return Article.find({}, function(err, docs){
            if (err) {
                console.log(err);
            }
        });
    },

    getById: function(articleId) {
        return Article.findById(articleId).exec();
    },

    remove: function(articleId) {
        Article.remove({_id: articleId}, function(err) {
            if (err) {
                console.log(err);
            } 
            else {
                console.log('The article is removed');
            }
        })
    },

    edit: function(articleModel, id) {

        var article = {
                    text: articleModel.text
                }; 

        Article.update({"_id" : id},{ $set: article}, function (err, savedArticle) {
            if (err) {
                console.log(err);
            } 
        });
    }

};

