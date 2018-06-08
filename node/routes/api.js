var express = require('express');
var router = express.Router();
var dataCoba = require('../model/test');
// var jwt = require('jsonwebtoken');

router.get('/get', function(req, res) {
  res.send('berhasil get api');
});

router.post('/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post created..',
        authData
      });
    }
  });
});
// router.post('/login', function(req, res) {
//   var user = {
//     id: 1,
//     email: 'g@gmail.com'
//   }
//   jwt.sign({user}, 'secretkey', { expiresIn: '300s'}, (err, token) => {
//     res.json({
//       token
//     });
//   });
// });

// FORMAT TOKEN
// verify token
function verifyToken(req, res, next) {
  var bearerHeader = req.headers['authorization'];
  // CHECK IF BEARER IS UNDEFINED
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    // get token from array
    var bearerToken = bearer[1];
    //set token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    // forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
