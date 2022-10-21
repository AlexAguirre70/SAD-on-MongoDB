const router = require('express').Router()


router.get('/', (req, res) => {
    
      res.send('')
})                                                   

router.get('/topics', (req, res) => {
    
  res.send('')
})
router.get('/topics/:id', (req, res) => {
    
  res.send('')
})
router.post('/topics/:id/comments', (req, res) => {
    
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
    
  res.send('')
})
module.exports = router
