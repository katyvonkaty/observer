var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('aboutme', { title: 'This is cool tho' });
});

module.exports = router;
