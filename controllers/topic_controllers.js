const router = require('express').Router()
const db = require('../models')

const subjects=require('../models/subjects')
const topics =require('../models/topics')

var subjectId=0
var subjectName=''
var subjectTopics=[]
var subjectCommnents=[]
var subjectResources= []

router.get('/:id', (req, res) => {
   return db.Subjects.findById(req.params.id)
      .then((res)=>{
       subjectId=res.subject_id
       subjectName=res.subject_name
       console.log(subjectId,subjectName)
      /*res.render('topics/show',{subjectId,subjectName})*/
       return db.Topics.find({topic_subject_id: subject_id})
    })
    .then(res=>{
       subjectTopics=res.body
       console.log(subjectTopics)
       return db.Resources.find({resources_subect_id:topic_subject_id})
   })
    .then(res=>{
       subjectResources=res.body
       console.log(subjectResources)
       return db.Comments.find({comments_subect_id:resources_subject_id})
   })
    .then(res=>{
       subjectComments=res.body
       console.log(subjectComments)
       res.render('topics/show',{subjectId,subjectName,subjectTopics,subjectResources,subjectComments}     
   })
      .catch(err=>{
      res.render('error404')
    }
    )
})
router.post('/:id/comments', (req, res) => {
    
  res.send(`Topics Comments PostPage for ID ${id}`)

})
router.get('/:id/resources/:rid', (req, res) => {
    
  res.send(`Get Show all Resources for ${req.params.id}`)
})  
router.get('/:id/resources/new', (req, res) => {
    
    res.send(`Get Add New Resource form`)
})    

router.get('/:id/resources/:rid/edit', (req, res) => {
    
    res.send(`Get Path to Edie the resources for id ${req.params.id}`)
})    
router.delete('/:id/resources/:rid', (req, res) => {
    
  res.send(`Delete Resource Route for ID ${req.params.id}`)
})
router.get('/*', (req, res) => { 
  res.render('error404')
})
module.exports = router
