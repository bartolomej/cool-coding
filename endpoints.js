const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('gravity');
  next();
});

router.get('/test', (req, res, next) => {
  res.render('gravity');
  next();
});

module.exports = router;