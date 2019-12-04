const Router = require('express')
const math = require('../services/math')
const config = require('config');
const router = Router()

router.get('/api/random', (req, resp) => {
    const min = +req.query.min || config.get('random.min')
    const max = +req.query.max || config.get('random.max')   

    const random = math.random(min, max)

    resp.json({ 
        random 
    })
})

router.get('/api/fibonacci/:i', (req, resp) => {
    const index = +req.params.i   

    const fibonacci = math.fibonacci(index)

    resp.json({ 
        "result": fibonacci 
    })
})

router.post('/api/shuffle', (req, resp) => {
    const shuffle = math.shuffle(req.body.array)

    resp.json({
        array: shuffle
    })
}) 

module.exports = router