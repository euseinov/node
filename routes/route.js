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
    console.log(random);
})

router.post('/api/shuffle', (req, resp) => {
    console.log(req.body);
}) 

module.exports = router