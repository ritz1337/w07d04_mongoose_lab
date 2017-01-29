var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var UserData = require('../models/users');

router.post('/viewall/:postID', function(req, res, next) {
  var id = req.params.postID;

  UserData.findById(id, (err, data) => {
    var comments = data.comments
    res.render('comments', {comments: comments})
  })


})



router.post('/:postID', function(req, res, next) {
  var id = req.params.postID;
  console.log(id);
  var comment = req.body.comment;
  console.log(comment);
  UserData.findById(id, (err, data) => {
    data.comments.push(
      {
        content: comment
      }
    )
    data.save();
  res.redirect('/data');
  })
})
module.exports = router
