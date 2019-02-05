const express = require('express');
const router = express.Router();

const keys = require('../../config/keys');

router.get('/', (req, res) => {
  res.json({
    'HTML-CSS': 80,
    'JAVASCRIPT': 70,
    'REACT': 70,
    'NODEJS': 50,
    'MONGODB': 70,
    'SQL': 70,
    'PREMIERE': 70,
    'PHOTOSHOP': 20
  });
});

module.exports = router;
