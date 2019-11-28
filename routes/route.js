const { Router } = require('express')
const math = require('../controllers/math')
const config = require('../config/config');
const router = Router()

router.get('/', (req, resp) => {
    console.log('index');
})

router.get('/api/random', (req, resp) => {
    var min = req.query.min || config.random.min
    var max = req.query.max || config.random.max    

    var random = math.random(min, max)

    resp.json(random)
})

router.post('/api/shuffle', (req, resp) => {
    var shuffle = math.shuffle(req.body.array)

    resp.send({"array": JSON.stringify(shuffle)})
}) 

module.exports = router