const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('topics/index', {topics})
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
})                                                   

module.exports = router
