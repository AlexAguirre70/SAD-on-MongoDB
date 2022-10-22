const mongoose = require('mongoose')

let topicsSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    topic_id: {type: Number, required: true},
    topic_subject_id: {type: Number, required: true},
    topic_name: {type: String}
})

module.exports = mongoose.model('Topics', topicsSchema)