const mongoose = require('mongoose')

let subjectsSchema = new mongoose.Schema({
    _id: mongoose.ObjectId,
    subject_id: Number,
    subject_name: {type:String, required: true},
    subject_img_url:{type:String, required: true},
    comments:[{type:mongoose.Schema.Types.ObjectId,ref:'Comments'}],
    topics:[{type:mongoose.Schema.Types.ObjectId,ref:'Topics'}],
    resources:[{type:mongoose.Schema.Types.ObjectId,ref:'Resources'}]

})

module.exports = mongoose.model('Subjects', subjectsSchema)