const express = require('express')
const routes = require('./routes/route')
const config = require('config')
const auth = require('./services/auth')
const os = require('os')
const cluster = require('cluster')

const PORT = config.get('app.port')

const app = express()
app.use(function (req, resp, next) {
    auth.checkToken(req, resp, next)
});
app.use(express.json());
app.use(routes)

if (cluster.isMaster) {
    let cpus = os.cpus().length
    
    for (let i = 0; i < cpus; i++) cluster.fork()

    cluster.on('exit', (worker, code) => {
        app.listen(PORT, () => {
            console.log('Server has been started')
        })
    })
} else {
    app.listen(PORT, () => {
        console.log(`Worker ${cluster.worker.id} launched`)
    })
}
