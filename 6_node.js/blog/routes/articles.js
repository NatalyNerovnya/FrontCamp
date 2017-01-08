var express = require('express');
var router = express.Router();
var multer  = require('multer');
var async = require('async');
var articleCtrl = require('../controllers/article');

var upload = multer({ dest: 'public/uploads' });

router.get('/add', function(req, res, next) {
  res.render('article/addArticle', {
      
    });
});

router.post('/add', function(req, res, next) {
  articleCtrl.add({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author
  })
  .then((idArticle) => {
    res.redirect('/articles/' + idArticle);
  })      
  
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    console.log(article);
    res.render('article/showArticle', {article});
  });
});



module.exports = router;