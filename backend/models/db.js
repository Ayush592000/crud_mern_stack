const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_DB
mongoose.connect(mongoUrl)
  .then(() => {
    console.log("MongoDB connection sucessfully connected...")
  }).catch((err) => {
    console.log("MongoDB connection lost...", err)
  })