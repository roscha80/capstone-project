const mongoose = require('mongoose')

const userSchema = {
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, match: /.+@\w{2,}\.\w{2,}/i },
  department: { type: String, required: true },
  //   skills: { type: [String], required: true },
  skills: { type: Array, required: true },
}

module.exports = mongoose.model('User', userSchema)
