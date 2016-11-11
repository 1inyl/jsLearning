var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs', {title: '首页'});
});
router.get('/introduce', function(req, res, next) {
  res.render('introduce.ejs', {title: '简介'});
});
router.get('/Contact_information', function(req, res, next) {
  res.render('Contact_information.ejs', {title: '联系方式'});
});
router.get('/history', function(req, res, next) {
  res.render('history.ejs', {title: '历程'});
});
router.get('/position', function(req, res, next) {
  res.render('position.ejs', {title: '定位'});
});
module.exports = router;
