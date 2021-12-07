const { Router } = require('express');
const router = Router();
const data = require('../data/hats.json')

router.get('/', async (req,res) => {
  res.json(data);
});

module.exports = router; 