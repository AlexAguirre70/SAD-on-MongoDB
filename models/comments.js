const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    key: Number,
    user: {type:String, default:'Anonymous'},
    text: {type:String, required: true},
    date: {        
        type:Number,
        min: [2000],
        max: [new Date().getFullYear(), " Please utilize a current year!"]
          },
})

module.exports = mongoose.model('Comments', commentSchema)