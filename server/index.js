const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require('./config/key');
const cookieParser = require('cookie-parser')
const userRouter = require('./routes/users')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser());


mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongoDB Connected'))
.catch((err) => console.log(err))

app.use('/api/users', userRouter)



const port = 5000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})