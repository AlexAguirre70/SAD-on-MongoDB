const mongoose = require('mongoose')
const {Schema} = mongoose

const topicsSchema = new Schema({
    topic_id: Number,
    topic_subject_id:Number,
    topic_name: String
})

const Topics=mongoose.model('Topics', topicsSchema)
module.exports = Topics
