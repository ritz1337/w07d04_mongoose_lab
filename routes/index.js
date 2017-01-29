var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/w7d4crudlab');

var UserData = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

module.exports = router;
