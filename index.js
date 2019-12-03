const express = require('express')
const routes = require('./routes/route')
const config = require('./config/config')

const PORT = config.app.port
const TOKEN = config.app.token

const app = express()
app.use(function (req, resp, next) {
    if (Buffer.from(TOKEN).toString('base64') !== req.get('token')) {
        resp.status(401)
        resp.json({ error: "Authorization required" })
    }
    next()
});
app.use(express.json());
app.use(routes)

app.listen(PORT, () => {
    console.log('Server has been started')
})