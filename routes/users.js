const router = require('express').Router(),
      User = require('../models/user')

// Start GET Section

router.get('/', (req, res) => {
  res.send({message: 'Hi'})
})

router.get('/getAllUsers', (req, res) => {
  User.find({}, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
})

// End GET Section

// Start POST Section

router.post('/newUser', (req, res) => {
  let newUser = User(req.body)
  newUser.save((err) => {
    if (err) throw err
    res.send({message: "new User created"})
  })
})

// End POST Section

module.exports = router
