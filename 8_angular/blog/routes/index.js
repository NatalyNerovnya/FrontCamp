var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function(req, res, next) {
  res.render('adminIndex', { title: 'Admin with Angular' });
});

router.get('/admin/*', function(req, res, next) {
  res.render('adminIndex', { title: 'Admin with Angular' });
});
module.exports = router;
