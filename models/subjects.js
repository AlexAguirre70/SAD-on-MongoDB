const mongoose = require('mongoose')
const {Schema} = mongoose

const subjectsSchema = new Schema({
    _id: mongoose.ObjectId,
    subject_id: Number,
    subject_name: {type:String, required: true},
    subject_img_url:{type:String, required: true}
})
const Subjects=mongoose.model('Subjects', subjectsSchema)
module.exports = Subjects
