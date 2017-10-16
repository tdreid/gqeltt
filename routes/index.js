var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GQeltt | A game where you indicate which number is larger to score points' });
});

module.exports = router;
