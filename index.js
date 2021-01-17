const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb://taeri:asd153zz@boilerplate-shard-00-00.xglo6.mongodb.net:27017,boilerplate-shard-00-01.xglo6.mongodb.net:27017,boilerplate-shard-00-02.xglo6.mongodb.net:27017/boilerplate?ssl=true&replicaSet=atlas-2dxgt2-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected'))
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안뇽')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})