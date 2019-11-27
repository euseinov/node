const { Router } = require('express')
const math = require('../logic/math')
const router = Router()

router.get('/', (req, resp) => {
    resp.render('index')
})

router.get('/api/random', (req, resp) => {
    var min = req.query.min || 0
    var max = req.query.max || 100

    var firstPart = new math(min, max)

    resp.render('part1', {
        title: 'Lession 1',
        min,
        max,
        result: firstPart.average()
    })
}) 

module.exports = router