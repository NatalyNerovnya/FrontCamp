var Article = require('../models/Article');

module.exports = {
    add: function(articleModel) {
        debugger;
        return new Promise(function (resolve, reject) {

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

    getTopTen: function() {
        
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

    update: function(article) {
        
    }

}

