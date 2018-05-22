var express = require('express');
var router = express.Router();
var dataCoba = require('../model/test');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/test1', function(req, res) {
  // res.send({type:'POST'});
      var newPost = new dataCoba({
        percobaan: req.body.percobaan,
      });
      
      dataCoba.createPercobaan(newPost, function(err, success){
        if(err) throw err;
        console.log(success);
        console.log(res.status);
        res.status(200).json({

          message: "berhasil",
          success: success
        });
      });
});


module.exports = router;

// http://mongosejs.com/docs/connection html