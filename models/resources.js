const mongoose = require('mongoose')
const {Schema}=mongoose
const resourcesSchema = new Schema({
    resources_id: Number,
    resources_name: String,
    resources_link: String,
    resources_type: {type:String, default: 'Online Guide'},
    resources_topic_id: Number
})

module.exports = mongoose.model('Resources', resourcesSchema)
