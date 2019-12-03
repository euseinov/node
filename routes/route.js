const Router = require('express')
const math = require('../services/math')
const config = require('../config/config');
const router = Router()

router.get('/api/random', (req, resp) => {
    const min = +req.query.min || config.random.min
    const max = +req.query.max || config.random.max    

    const random = math.random(min, max)

    resp.json({ 
        random 
    })
})

router.post('/api/shuffle', (req, resp) => {
    const shuffle = math.shuffle(req.body.array)

    resp.json({
        array: shuffle
    })
}) 

module.exports = router