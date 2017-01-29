var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/users');

router.delete('/', function(req, res, next) {
  var id = req.body.id

  UserData.remove(
  {_id: id},
    function (err, result) {
      console.log(result)
    })
  res.redirect('/data')

})


module.exports = router
