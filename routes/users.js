const router = require('express').Router(),
      User = require('../models/user')
      bcrypt = require('bcryptjs')

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
    if (err) return res.send(err)
    res.send({message: "new User created"})
  })
})

router.post('/checkPassword', (req, res) => {
  let userLogin = req.body
  User.findOne({username: userLogin.username}, (err, doc) => {
      bcrypt.compare(userLogin.password, doc.password, (err, result) => {
      if(result) res.send({value: true})
      else res.send({value: false})
    })
  })
})

// End POST Section

module.exports = router
