const config = require('config');

const TOKEN = config.get('app.token')

module.exports = { 
    checkToken: function (req, resp, next) {
        if (Buffer.from(TOKEN).toString('base64') !== req.get('token')) {
            resp.status(401)
            resp.json({ error: "Authorization required" })
            return
        }
        next()
    },
}