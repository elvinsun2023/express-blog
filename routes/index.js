const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', posts: ['11.jpg', '12.jpg', '11.jpg'], postsBig: ['100.jpg', '110.jpg'] });
});

module.exports = router;
