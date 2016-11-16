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
  }).sort({createdAt: -1})
})

router.get('/findByDescription', (req, res) => {
  let likeDesc = req.query.desc
  Todo.find({description: {$regex : ".*" + likeDesc + ".*" , $options: "i"} }, (err, todos) => {
    if (err) {
      res.json(err)
    } else {
      res.json(todos)
    }
  })
})

// End GET Section

// Start POST Section

router.post('/newTodo/:username', (req, res) => {
  let username = req.params.username
  User.findOne({username: username}, (err, user) => {
    if (err) res.send(err)
    let reqTodo = req.body
    reqTodo.userId = user._id
    let newTodo = Todo(reqTodo)
    newTodo.save((err) => {
      if (err) res.send(err)
      res.send({message: "new Todo created"})
    })
  })
})

router.post('/updateTodo/:todoId', (req, res) => {
  let todoId = req.params.todoId
  // let updatedTodo = req.body
  let updatedTodo = req.body
  Todo.update(
    {_id: todoId},
    {$set: {description: updatedTodo.description, done: updatedTodo.done, priority: updatedTodo.priority}},
    (err, numAffected) => {
      if (err) res.send(err)
      console.log(numAffected)
      res.send(numAffected)
  })
})

// End POST Section

module.exports = router
