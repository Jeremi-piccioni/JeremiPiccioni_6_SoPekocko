const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

//MiddleWare Parser
app.use(cors())
app.use(bodyParser.json())

//Import Routes
const postsRoute = require('./routes/posts')
app.use('/api/auth/signup', postsRoute )

//Routes
app.get('/', (req,res) => {
    res.send('we are on saved')
})

//Connect to Data Base
mongoose.connect(process.env.DB_CONNECTION_PW, { useNewUrlParser: true, useUnifiedTopology: true })

//Listening port
app.listen(3000)