const express = require('express');
const router = express.Router();

/*
  These routes are placeholders. You can totally change this file
  if you rearrange / replace any of the .html files they are linked to.
*/


// Splash page
router.get('/', function(req, res, next) {
  res.sendFile('splash.html', { root: './frontend' });
});

// Login page
router.get('/login', function(req, res, next) {
  res.sendFile('login.html', { root: './frontend' });
});

// User page
router.get('/user/:id', function(req, res, next) {
  res.sendFile('user.html', { root: './frontend' });
});

// Character Details
router.use(function(req, res) {
  res.sendFile('characterDetails.html', { root: './frontend' });
});

// Non Player Character Details
router.use(function(req, res) {
  res.sendFile('npcDetails.html', { root: './frontend' });
});

// Location Details
router.use(function(req, res) {
  res.sendFile('locationDetails.html', { root: './frontend' });
});

// Quest Details
router.use(function(req, res) {
  res.sendFile('questDetails.html', { root: './frontend' });
});

// 404 page
router.use(function(req, res) {
  res.status(404).sendFile('404.html', { root: './frontend' });
});

module.exports = router;
