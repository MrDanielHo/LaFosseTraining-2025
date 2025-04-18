const express       = require('express')
const cors          = require('cors')
const logger        = require('./logger')
const snackRouter   = require('./routers/snacks')
const app           = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger)

// Router
app.use('/snacks', snackRouter)

app.get('/', (req, res) => {
    res.send({
      message: "Welcome Monia to:",
      description: "SNACKS API",
      endpoints: [
        "GET    /               200",
        "GET    /snacks         200",
        "POST   /snacks         201",
        "GET    /snacks/:top    200",
        "GET    /snacks/:id     200",
        "PATCH  /snacks/:id     200",
        "DELETE /snacks/:id     204",
      ]
    })
  })

app.post('/', (req, res) => {
res.status(405).send('Not allowed!')
});

module.exports  = app