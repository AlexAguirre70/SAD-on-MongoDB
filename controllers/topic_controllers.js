const router = require('express').Router()
const db = require('../models')
const methodOverride = require('method-override')
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()


const subjects=require('../models/subjects')
const topics =require('../models/topics')
router.use(methodOverride('_method'))

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
router.put('/:name/:topic/:id/resources/:rid',jsonParser,(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id  

  db.Resources.findOneAndUpdate({resources_id:req.params.rid},{$set:{resources_name:'Test4'}})
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
router.post('/:name/:topic/:id/resources',jsonParser,(req,res)=>{
  if(req.body.resources_id<1){
  
    db.Resources.countDocuments({})
      .then((count)=>{
        console.log(count)
        req.body.resources_id=count+1
        return req.body.resources_id
      })
      .catch(err=>{
        console.log(err)
        res.render('error404')
      })
    }
    db.Resources.create(req.body)
    .then(
      res.redirect(`/topics/${subjectName}/${topicName}/${topicId}`)
    )
    .catch(err=>{
      console.log(err)
      res.render('error404')
    })
})

//router.PUT: render the edit page to edit a specific resource 

//router.DELETE: when the delete button is clicked on the resources 
router.delete('/:name/:topic/:id/resources/:rid',(req,res)=>{
  var subjectName=req.params.name
  var topicName=req.params.topic
  var topicId=req.params.id
   db.Resources.findOneAndDelete({resources_id:req.params.rid})
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
