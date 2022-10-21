const mongoose = require('mongoose')

let resourcesSchema = new mongoose.Schema({
    key: Number,
    name: {type:String, required: true},
    link: {type:String, required: true},
    type: {type:String, default: 'Online Guide'},
})

module.exports = mongoose.model('Resources', resourcesSchema)