const express = require('express');
const router = express.Router();

// Home page or splash page
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: './frontend' });
});

// Login page
router.get('/login', function(req, res, next) {
  res.sendFile('login.html', { root: './frontend' });
});

// User page
router.get('/user/:id', function(req, res, next) {
  res.sendFile('user.html', { root: './frontend' });
});

// 404 page
router.use(function(req, res) {
  res.status(404).sendFile('404.html', { root: './frontend' });
});

module.exports = router;
