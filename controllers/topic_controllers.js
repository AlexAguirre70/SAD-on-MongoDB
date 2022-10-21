const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Here we are gone a GET /topics')
})

module.exports = router
