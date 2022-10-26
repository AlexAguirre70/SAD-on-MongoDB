const mongoose = require('mongoose')
const {Schema}=mongoose

const commentSchema = new Schema({
    comment_id:Number,
    comment_text: String,
    comment_topic_id: Number,
    comment_user: {type:String, default:'Anonymous'},
    comment_date: {type:Date, default: Date.now()},
    comment_subject:{type:Schema.Types.ObjectID, ref:'Subjects'}
})

module.exports = mongoose.model('Comments', commentSchema)