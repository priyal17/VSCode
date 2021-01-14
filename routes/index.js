var express = require('express');
var router = express.Router();

const bodyparser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.statusCode = 200;
  res.setHeader('Content-Type','application/json');
  res.json({ "msg" : "Welcome"});
  
});

module.exports = router;
