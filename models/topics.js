const mongoose = require('mongoose')

let topicsSchema = new mongoose.Schema({
    topic_id: Number,
    topic_subject_id:Number,
    topic_name: String
})

module.exports = mongoose.model('Topics', topicsSchema)