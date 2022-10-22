const router = require('express').Router()
const db = require('../models')

const subjects=require('../models/subjects')
const topics =require('../models/topics')

router.get('/:id', (req, res) => {
    db.Subjects.findById(req.params.id)
    .populate('topics').exec()

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
