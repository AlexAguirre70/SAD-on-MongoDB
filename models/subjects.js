const mongoose = require('mongoose')
const {Schema} = mongoose

const subjectsSchema = new Schema({
    _id: mongoose.ObjectId,
    subject_id: Number,
    subject_name: {type:String, required: true},
    subject_img_url:{type:String, required: true},
    comments:[{type:Schema.Types.ObjectId,ref:'Comments'}],
    topics:[{type:Schema.Types.ObjectId,ref:'Topics'}],
    resources:[{type:Schema.Types.ObjectId,ref:'Resources'}]

})
const Subjects=mongoose.model('Subjects', subjectsSchema)
module.exports = Subjects
