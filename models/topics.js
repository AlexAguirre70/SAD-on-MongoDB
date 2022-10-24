const mongoose = require('mongoose')
const {Schema} = mongoose

let topicsSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    topic_id: {type: Number, required: true},
    topic_subject_id: {type: Number, required: true},
    topic_name: {type: String}
const topicsSchema = new Schema({
    topic_id: Number,
    topic_subject: String,
    topic_subject_id:Number,
    topic_name: String,
    topic_subjects:{type:Schema.Types.ObjectID, ref:'Subjects'}
})


module.exports=mongoose.model('Topics', topicsSchema)
