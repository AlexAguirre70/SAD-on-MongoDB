const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    comment_id:Number,
    comment_text: {type:String, required:true},
    comment_topic_id: Number,
    comment_user: {type:String, default:'Anonymous'},
    comment_date: {type:Date, default: Date.now()},
})

module.exports = mongoose.model('Comments', commentSchema)