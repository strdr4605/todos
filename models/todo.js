const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let TodoSchema = new Schema({
  description: String,
  done: Boolean,
  priority: Number,
  userId: {
   type: Schema.Types.ObjectId,
   required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'todos'
})

let Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo
