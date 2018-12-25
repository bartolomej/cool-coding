const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('index', {
    sample: [{
      title: 'Intro data science',
      link: '/project/datascience1',
      description: 'Sample intro data science project'
    },{
      title: 'Gravitation',
      link: '/project/gravity',
      description: 'Sample gravitation simulation'
    }]
  });
});

router.get('/project/datascience1', (req, res, next) => {
  res.render('text-analyzer');
});

router.get('/project/gravity1', (req, res, next) => {
  res.render('gravity');
});

module.exports = router;