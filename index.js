const express = require('express')
const app = express()

//Import Routes
const authRoute = require('./routes/auth')

app.listen(4200)