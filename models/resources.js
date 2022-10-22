const mongoose = require('mongoose')

let resourcesSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    resources_id: {type: Number, required: true},
    resources_name: {type:String, required: true},
    resources_link: {type:String, required: true},
    resources_type: {type:String, default: 'Online Guide'},
})

module.exports = mongoose.model('Resources', resourcesSchema)