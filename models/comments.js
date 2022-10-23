const mongoose = require('mongoose')
const {Schema}=mongoose

const commentSchema = new Schema({
    comment_id:Number,
    comment_text: {type:String, required:true},
    comment_topic_id: Number,
    comment_user: {type:String, default:'Anonymous'},
    comment_date: {type:Date, default: Date.now()},
})
const Comments=mongoose.model('Comments', subjectsSchema)
module.exports = Comments
