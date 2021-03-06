const express = require('express'),
      app = express(),
      config = require('./config'),
      mongoose = require('mongoose'),
      todoRoutes = require('./routes/todos'),
      userRoutes = require('./routes/users')
      bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

mongoose.connect(config.database, (err) => {
  console.log('Successfuly connected to ' + config.database)
})
mongoose.Promise = global.Promise

app.use('/api/v1/todo', todoRoutes)
app.use('/api/v1/user', userRoutes)

app.listen(config.port, () => {
  console.log('Application is running on port ' + config.port)
})
