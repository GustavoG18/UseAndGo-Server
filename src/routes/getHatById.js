const { Router } = require('express');
const router = Router();
const data = require('../data/hats.json')

/// I need to search the best mode to do this.
router.get('/:string', async (req,res) => {
  res.json(data.filter(({hats}) => {
    return hats.findIndex(({id}) => req.params['string'] === id) !== -1;
  })[0].hats.filter(({id}) => req.params['string'] === id)[0]);
});

module.exports = router;