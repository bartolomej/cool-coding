const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/', (req, res, next) => {
  res.render('index', {
    domain: [{
      title: 'Data Structures',
      project: [{
        title: 'Hash table',
        link: '/project/data-structures/hash-table',
        img: '/images/data-structures.png',
        description: 'Simple JavaScript HashTable data structure demo.'
      },{
        title: 'Stack',
        link: '/project/data-structures/stack',
        img: '/images/data-structures.png',
        description: 'Simple JavaScript Stack data structure'
      },{
        title: 'Queue',
        link: '/project/data-structures/queue',
        img: '/images/data-structures.png',
        description: 'Simple JavaScript Queue data structure'
      }]
    },{
      title: 'Algorithms',
      project: [{
        title: 'Recursive fractal tree',
        link: '/project/algorithms/recursive-tree',
        img: '/images/recursive-tree.png',
        description: 'Recursive self similar fractal tree'
      }, {
        title: 'Recursive three branch tree',
        link: '/project/algorithms/recursive-three-branch',
        img: '/images/recursive-tree.png',
        description: 'Recursive three branch tree'
      }, {
        title: 'Recursive fractal circle',
        link: '/project/algorithms/recursive-circle',
        img: '/images/recursive-tree.png',
        description: 'Recursive self similar fractal circle pattern'
      }]
    },{
      title: 'Data Science',
      project: [{
        title: 'Text analyzer',
        link: '/project/data-science/text-analyzer',
        img: '/images/data-science.png',
        description: 'Simple text analyzer with graphic representation of data'
      }]
    }, {
      title: 'Mathematics',
      project: [{
        title: 'Sine waves',
        link: '/project/math/sine-waves',
        img: '',
        description: 'Fourier series sine wave'
      }]
    }]
  });
});

router.get('/project/data-structures/queue', (req, res, next) => {
  res.render('queue');
});

router.get('/project/data-structures/stack', (req, res, next) => {
  res.render('stack');
});

router.get('/project/data-structures/hash-table', (req, res, next) => {
  res.render('hashtable');
});

router.get('/project/algorithms/recursive-tree', (req, res, next) => {
  res.render('tree-recursion');
});

router.get('/project/algorithms/recursive-three-branch', (req, res, next) => {
  res.render('three-branch-tree');
});

router.get('/project/algorithms/recursive-circle', (req, res, next) => {
  res.render('circle-recursion');
});

router.get('/project/data-science/text-analyzer', (req, res, next) => {
  res.render('text-analyzer');
});

router.get('/project/math/sine-waves', (req, res, next) => {
  res.render('fourier');
});

module.exports = router;