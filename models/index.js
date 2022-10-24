require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
module.exports.Resources = require('./resources')
module.exports.Comments = require('./comments')
module.exports.Topics = require('./topics')
module.exports.Subjects = require('./subjects')