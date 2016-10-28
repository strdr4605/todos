const router = require('express').Router(),
      Todos = require('../models/todos')

router.get('/', (req, res) => {
  res.send({message: 'Hi'});
})

module.exports = router
