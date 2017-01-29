var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/users');

router.post('/', function(req, res, next) {
  var content = req.body.content
  var author = req.body.author
  var id = req.body.id

UserData.update(
  {_id: id},
  { $set:
    {
      content: content,
      author: author
    }
  },

    function(err, result) {
      console.log(result)
    }
)
res.redirect('/data')
})


module.exports = router
