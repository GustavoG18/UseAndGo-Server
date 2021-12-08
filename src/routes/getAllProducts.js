const { Router } = require('express');
const router = Router();
const data = require('../data/hats.json')

router.get('/', async (req,res) => {
  const dataMap = data.map(({hats}) => {
    return hats;
  });
  const response = [...dataMap[0],...dataMap[1],...dataMap[2]]
  res.json({category: 'All Products', hats: response});
});

module.exports = router; 