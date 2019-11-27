const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/route')
const config = require('./config');

const app = express()

app.use(express.urlencoded({ extended: true }))

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(routes)

app.listen(config.app.PORT, () => {
    console.log('Server has been started')
})
    