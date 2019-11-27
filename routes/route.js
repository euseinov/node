const { Router } = require('express')
const math = require('../controllers/math')
const router = Router()

router.get('/', (req, resp) => {
    resp.render('index')
})

router.get('/api/random', (req, resp) => {
    var min = req.query.min || 0
    var max = req.query.max || 100

    var firstPart = new math(min, max)

    resp.render('random', {
        title: 'random',
        min,
        max,
        result: firstPart.average()
    })
})

router.get('/api/shuffle', (req, resp) => {
    resp.render('shuffle', {
        title: 'shuffle',
    })
}) 

router.post('/api/shuffle', (req, resp) => {
    resp.render('shuffle', {
        title: 'shuffle',
    })
}) 

module.exports = router