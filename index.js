const express = require('express')
const routes = require('./routes/route')
const config = require('./config/config')

const PORT = config.app.port

const app = express()

app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log('Server has been started')
})
    