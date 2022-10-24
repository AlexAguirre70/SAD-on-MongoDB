const mongoose = require('mongoose')
const {Schema} = mongoose

const subjectsSchema = new Schema({
    _id: mongoose.ObjectId,
    subject_id: {type: Number, required: true},
    subject_name: {type:String, required: true},
    subject_img_url:{type:String, required: true},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comments'}],
    topics:[{type:mongoose.Schema.Types.ObjectId,ref:'Topics'}],
    resources:[{type:mongoose.Schema.Types.ObjectId,ref:'Resources'}]
    subject_img_url:{type:String, required: true}
})

module.exports = mongoose.model('Subjects', subjectsSchema)
