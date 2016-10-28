const express = require('express'),
      app = express(),
      config = require('./config'),
      mongoose = require('mongoose'),
      todoRoutes = require('./routes/todos')

mongoose.connect(config.database, (err) => {
  console.log('Successfuly connected to ' + config.database)
})

app.listen(config.port, () => {
  console.log('Application is running on port ' + config.port)
})

app.use('/api/v1/todos', todoRoutes)
