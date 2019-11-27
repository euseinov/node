const { Router } = require('express')
const math = require('../controllers/math')
const config = require('../config/config');
const router = Router()

router.get('/', (req, resp) => {
    resp.render('index')
})

router.get('/api/random', (req, resp) => {
    //console.log(config);
    var min = req.query.min || config.random.min
    var max = req.query.max || config.random.max

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



module.exports = router