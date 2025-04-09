const express = require('express')
const app = express()
const films = require('./routes/films')

app.get('/', (req, res) => {
    res.send('Welcome to film club')
})

app.use(express.json())
app.use('/films', films)

module.exports = app