var express = require('express');
var router = express.Router();
var multer  = require('multer');
var async = require('async');
var articleController = require('../controllers/article');

var upload = multer({ dest: 'public/uploads' });

router.put('/', upload.single('picture'), function(req, res, next) {
  articleController.edit({
        title: req.body.title,
        text: req.body.text
  }, req.body.id);
  res.json("ok!");
});

router.post('/', upload.single('picture'), function(req, res, next) {
  articleController.add({
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        imageUrl: req.file.filename
  })     
  res.json("ok!");
});

router.get('/', function(req, res, next) {
  return articleController.getAll()
  .then(articles => res.json(articles));
});

router.get('/:articleId', function(req, res, next) {
  return articleController.getById(req.params['articleId'])
  .then(result => res.json(result));
});
module.exports = router;