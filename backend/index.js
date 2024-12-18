const express = require('express')
const app = express()
require('dotenv').config()
require('./models/db')
const UserRouter = require('./routes/User')
const cors = require('cors')
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use('/user', UserRouter)
app.listen(PORT, (req, res) => {
  console.log(`server working on PORT ${PORT}`)
})
