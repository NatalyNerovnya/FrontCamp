var express = require('express');
var router = express.Router();
var multer  = require('multer');
var async = require('async');
var articleController = require('../controllers/article');

var upload = multer({ dest: 'public/uploads' });

router.get('/add', function(req, res, next) {
  res.render('article/addArticle', {     
    });
});

router.post('/add', upload.single('picture'), function(req, res, next) {
  articleController.add({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        imageUrl: req.file.filename
  })
  .then(idArticle => res.redirect('/articles/' + idArticle))      
  
});

router.post('/addArticle', upload.single('picture'), function(req, res, next) {
  console.log("I'M HERE");
  console.log(req.body);
  console.log(req.file);
  console.log(req.data);
  articleController.add({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        imageUrl: req.body.filename
  })     
});

router.post('/editArticle', upload.single('picture'), function(req, res, next) {
  articleController.edit({
        title: req.body.title,
        text: req.body.text
  }, req.body.id).then(()=>res.json('success'));
  
});

router.get('/getAll', function(req, res, next) {
  articleController.getAll()
  .then(articles => res.render('article/showAll', {articles}));
});

router.get('/edit/:articleId', function(req, res, next) {
  var renderObject = {};
  articleController.getById(req.params['articleId'])
  .then(article => {
    renderObject['article'] = article;
    res.render('article/editArticle', {renderObject})
  })
});

router.post('/edit/edit',upload.single('picture'), function(req, res, next) {
  articleController.edit({
        title: req.body.title,
        text: req.body.text
  }, req.body.id);

  articleController.getById(req.body.id)
    .then(article => res.render('article/showArticle', {article}))  
});

router.get('/delete/:articleId', function(req, res, next) {
  articleController.remove(req.params['articleId']);

  articleController.getAll()
    .then(articles => res.render('article/showAll', {articles}))  
});

router.get('/getArticle/:articleId', function(req, res, next) {
  return articleController.getById(req.params['articleId'])
  .then(result => res.json(result));
});

router.get('/getArticles', function(req, res, next) {
  return articleController.getAll()
  .then(articles => res.json(articles));
});

router.get('/:articleId', function(req, res, next) {
  articleController.getById(req.params['articleId'])
  .then(article => res.render('article/showArticle', {article}));
});

module.exports = router;