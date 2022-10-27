const mongoose = require('mongoose')
const {Schema} = mongoose

const topicsSchema = new Schema({
    topic_id: Number,
    topic_subject: String,
    topic_subject_id:Number,
    topic_name: String,
    topic_subjects:{type:Schema.Types.ObjectID, ref:'Subjects'}
})


module.exports=mongoose.model('Topics', topicsSchema)
