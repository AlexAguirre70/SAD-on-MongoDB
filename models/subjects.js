const mongoose = require('mongoose')

let subjectsSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    subject_id: Number,
    subject_name: {type:String, required: true},
    subject_img_url:{type:String, required: true}
})

module.exports = mongoose.model('Subjects', subjectsSchema)
