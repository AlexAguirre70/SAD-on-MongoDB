const router = require('express').Router()
const db = require('../models')

const comments =require('../models/comments')
const resources = require('../models/resources')
const topics = require('../models/topics')
const subjects = require('../models/subjects')


router.get('/:id', (req, res) => {
    db.Subjects.findById(req.params.id)
    .then((subjects)=>{
      res.render('topics/show',{subjects})
    })
    .catch(err=>{
      res.render('error404')
    }
    )
})
router.post('/:id/comments', (req, res) => {
    
  res.send('')
})
router.get('/resources/new', (req, res) => {
    
  res.send('')
})
router.get('/resources/:id', (req, res) => {
    
  res.send('')
})
router.get('/resources/:id/edit', (req, res) => {
    
  res.send('')
})
router.put('/resources/:id', (req, res) => {
    
  res.send('')
})
router.delete('/resources/:id', (req, res) => {
    
  res.send('')
})
router.get('/*', (req, res) => { 
  res.render('error404')
})
module.exports = router
