const router = require('express').Router()


router.get('/:id', (req, res) => {
    
  res.send(`This is the specific topic for ID ${req.params.id}`)
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
    
  res.send('')
})
module.exports = router
