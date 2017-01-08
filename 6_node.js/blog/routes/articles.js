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
    //res.redirect('/articles/getAll');
    res.redirect('/articles/' + idArticle);
  })      
  
});

router.get('/getAll', function(req, res, next) {
  console.log("now it's ok");
  articleCtrl.getAll()
  .then((articles) => {
    res.render('article/showAll', {articles});
  });
});

router.get('/:articleId', function(req, res, next) {
console.log("not bad");
  articleCtrl.getById("587206e71647491c0c161ba1")
  .then((article) => {
    console.log(article);
    alert(article);
    res.render('article/showArticle', {article});
  });
});

router.get('/edit/:articleId', function(req, res, next) {
  var renderObject = {};
  articleCtrl.getById(req.params['articleId'])
  .then((article) => {
    renderObject['article'] = article;
  })
});


router.post('/edit', function(req, res, next) {
});

module.exports = router;