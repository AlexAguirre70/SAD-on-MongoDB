const router = require('express').Router()
const db = require('../models')

const subjects=require('../models/subjects')
const topics =require('../models/topics')

var subjectTopics=[]
var subjectCommnets=[]
var sujectResources= []

router.get('/:id', (req, res) => {
    db.Subjects.findById(req.params.id)
      .then((subject)=>{
      res.render('topics/show',{subject})
    }   
    )
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
router.put('/:id/resources/:rid', (req, res) => {
    
  res.send(`Update PUT Route for the Resource for ID ${req.params.id}`)
})
router.delete('/:id/resources/:rid', (req, res) => {
    
  res.send(`Delete Resource Route for ID ${req.params.id}`)
})
router.get('/*', (req, res) => { 
  res.render('error404')
})
module.exports = router
