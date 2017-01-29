var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var UserData = require('../models/users');

// '/' signifies /data
router.get('/', function(req, res, next) {
  UserData.find()
  .then(function(data) {
    res.render('data', {items: data})
  })
})

module.exports = router
