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

router.post('/add',upload.single('picture'), function(req, res, next) {
  articleCtrl.add({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author
  })
  .then((idArticle) => {
    res.redirect('/articles/' + idArticle);
  })      
  
});

router.get('/getAll', function(req, res, next) {
  articleCtrl.getAll()
  .then((articles) => {
    console.log(articles);
    res.render('article/showAll', {articles});
  });
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    res.render('article/showArticle', {article});
  });
});

router.get('/edit/:articleId', function(req, res, next) {
  var renderObject = {};
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    renderObject['article'] = article;
    res.render('article/editArticle', {renderObject})
  })
});


router.post('/edit/edit',upload.single('picture'), function(req, res, next) {
  articleCtrl.edit({
        title: req.body.title,
        text: req.body.text
  }, req.body.id);

  articleCtrl.getById(req.body.id)
    .then((article) => {
      res.render('article/showArticle', {article});
    });  
  
});

router.get('/:articleId', function(req, res, next) {
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    res.render('article/showArticle', {article});
  });
});

module.exports = router;