const mongoose = require('mongoose')

let topicsSchema = new mongoose.Schema({
    key: Number,
    name: {type:String, required: true},
})

module.exports = mongoose.model('Topics', topicsSchema)