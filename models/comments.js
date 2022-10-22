const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    comment_user: {type:String, default:'Anonymous'},
    comment_text: {type:String, required: true},
    comment_topic_id: {type: Number, required: true},
    comment_date: {        
        type: Number,
        min: [2000],
        max: [new Date().getFullYear(), " Please utilize a current year!"]
          },
})

module.exports = mongoose.model('Comments', commentSchema)