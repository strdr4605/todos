const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let TodosSchema = new Schema({
  description: String,
  status: Boolean,
  priority: Number,
  usedID: String,
  createdAt: Date
}, {
  collection: 'todos'
})

let Todos = mongoose.model('Todos', TodosSchema)

module.exports = Todos
