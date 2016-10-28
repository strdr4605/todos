const router = require('express').Router(),
      Todo = require('../models/todo')
      User = require('../models/user')

// Start GET Section

router.get('/', (req, res) => {
  res.send({message: 'Hi'})
})

router.get('/getAllTodos', (req, res) => {
  Todo.find({}, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
})

// End GET Section

// Start POST Section

router.post('/newTodo/:username', (req, res) => {
  let username = req.params.username
  User.findOne({username: username}, (err, user) => {
    if (err) throw err
    let reqTodo = req.body
    reqTodo.userId = user._id
    let newTodo = Todo(reqTodo)
    newTodo.save((err) => {
      if (err) throw err
      res.send({message: "new Todo created"})
    })
  })
})

// End POST Section

module.exports = router
