const router = require('express').Router()
const db = require('../models')


const subjects=require('../models/subjects')
const topics =require('../models/topics')


//find the topics for each subject into an array
router.get('/:name', (req, res) => {
  var subjectName=req.params.name
   db.Topics.find({topic_subject:req.params.name})
  .then(Topic=>{
     
        res.render('topics/index',{Topic,subjectName})
    })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})
//router.GET On Topic Click render the topic comments, and resources Topics SHOW View
router.get('/:name/:topic/:id',(req,res)=>{
    var subjectName=req.params.name
    var topicName=req.params.topic
    db.Resources.find({resources_topic_id:req.params.id})
    .then(resources=>{
        console.log(resources)
        res.render('topics/show',{resources,subjectName,topicName})
      })
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})


// router.GET  Get the update form
router.get('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
  db.Resources.findOne({resources_id:req.params.rid})
  .then(resource=>{
      res.render('resources/edit',{resource,subjectName,topicName,topicId})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})




//router.POST: On click Add Resource form - add to the database
router.post('/:id/:topicName/resource', (req, res) => {
  db.Resources.create(req.body)
  .then()
  .catch()
})
//router.PUT: render the edit page to edit a specific resource 

//router.DELETE: when the delete button is clicked on the resources 

router.get('/*', (req, res) => { 
  res.render('error404')
})
module.exports = router
