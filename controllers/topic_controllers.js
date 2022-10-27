const router = require('express').Router()
const express = require('express')

const db = require('../models')
const methodOverride = require('method-override')

const subjects=require('../models/subjects')
const topics =require('../models/topics')
const resources =require('../models/resources')

router.use(methodOverride('_method'))

/*test route to query the database and check the data being returned
router.get('/test', (req,res)=>{
  db.Resources.findOne({resources_topic_id:5}).sort({resources_id:-1})
  .then(result=>{
    console.log(result)
    maxId = result.resources_id+1
    res.send(`this is the result ${result.resources_id} is last resources_Id The next is ${maxId}`)
  })
})
*/
//Subjects - RENDER Topics Index
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

//Topics - RENDER Topic Details
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

//Resources - RENDER - ADD new form
router.get('/:name/:topic/:id/resources/new', (req, res) => {
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
  db.Resources.findOne({resources_topic_id:req.params.id}).sort({resources_id:-1})
  .then(result => {
    maxId = result.resources_id+1
  res.render('resources/new',{maxId,subjectName,topicName,topicId})
  })
})

//Resources - CREATE - Resource on DB
router.post('/:name/:topic/:id/resources',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
  db.Resources.create(req.body)
  .then(insert => {
        insert.save()
        .then(()=>{
            res.redirect(`/topics/${subjectName}/${topicName}/${topicId}`)
          })
      })
   .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})    
      

//Resources - RENDER - EDIT New Form
router.get('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id

  db.Resources.findOne({$and:[{resources_id:req.params.rid},{resources_topic_id:topicId}]})
  .then(resource=>{
      res.render('resources/edit',{resource,subjectName,topicName,topicId})
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

// Resources - UPDATE Database with form data
router.put('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id  
  console.log(req.body)
  db.Resources.findOneAndUpdate({$and:[{resources_id:req.params.rid},{resources_topic_id:topicId}]}, req.body)
   .then(result=>{
   
      res.redirect(`/topics/${subjectName}/${topicName}/${topicId}`)
  })
  .catch(err=>{
    console.log(err)
    res.render('error404')
  })
})

//Resources - DELETE router.DELETE
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
