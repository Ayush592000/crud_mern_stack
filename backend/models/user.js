const mongoose = require('mongoose')
const schema = mongoose.Schema;

const User = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true,
  },
})

const UserModel = mongoose.model('user', User)
module.exports = UserModel