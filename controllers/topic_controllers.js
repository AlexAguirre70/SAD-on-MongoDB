const router = require('express').Router()

router.get('/', (req, res) => {
    
    let topics = [{
        name: 'Magno',
        subtopic1: 'sub-1',
        subtopic2: 'sub-2',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Temper',
        subtopic1: 'sub-3',
        subtopic2: 'sub-4',
        pic: 'http://placekitten.com/250/250'
      }]
      res.render('topics/index', {topics})
})                                                   

module.exports = router
