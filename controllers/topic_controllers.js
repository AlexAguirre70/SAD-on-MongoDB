const router = require('express').Router()
const express = require('express')

const db = require('../models')
const methodOverride = require('method-override')

const subjects=require('../models/subjects')
const topics =require('../models/topics')
const resources =require('../models/resources')

router.use(methodOverride('_method'))
//test new form
router.get('/:name/:topic/:id/resources/new', (req, res) => {
    var subjectName=req.params.name
    var topicName=req.params.topic
    var topicId=req.params.id
    db.Resources.countDocuments({resources_topic_id:req.params.id})
    .then(maxId => {
    res.render('resources/new',{maxId,subjectName,topicName,topicId})
    })
  })

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
// router.Put this will update the record in MongoDB
router.put('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id  

  db.Resources.findOneAndUpdate({$and:[{resources_id:req.params.rid},{resources_topic_id:topicName}]}, req.body)
   .save()
   .then(result=>{
   
      res.redirect(`/topics/${subjectName}/${topicName}/${topicId}`)
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
    var topicId=req.params.id
    db.Resources.find({resources_topic_id:req.params.id})
    .then(resources=>{
     
        res.render('topics/show',{resources,subjectName,topicName,topicId})
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
  
  console.log(req.params.rid)

  db.Resources.findOne({$and:[{resources_id:req.params.rid},{resources_topic_id:topicId}]})
  .then(resource=>{
      res.render('resources/edit',{resource,subjectName,topicName,topicId})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

//router.POST: On click Add Resource form - add to the database
router.post('/:name/:topic/:id/resources',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
    
   res.send(`this is the PUT ROUTE and data being passed ${req.body.resources_id}` )
})

//router.DELETE: when the delete button is clicked on the resources 
router.delete('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
   db.Resources.findOneAndDelete({$and:[{resources_id:req.params.rid},{resources_topic_id:topicId}]})
   .then(
      res.redirect(`/topics/${subjectName}/${topicName}/${topicId}`)
   )
   .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

router.get('/*', (req, res) => { 
  res.render('error404')
})
module.exports = router
