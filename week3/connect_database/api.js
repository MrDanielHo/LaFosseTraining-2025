const express = require('express')
const cors = require('cors')
const api = express()
const db = require('./database/db')

api.use(express.json())
api.use(cors())

api.get('/', (request, response) => {
    resquest.send('The Wrongs API: track injustice!')
})

api.get('/wrongs', async (request, response) => {
    // This is requesting the below query from the database stored on the cloud
    const data = await db.query("SELECT * FROM wrong;")
    resquest.send(data.rows)
    }
)

api.get('/people/:id'), async (request, response) => {
    const id= parseInt(request.params.id)
    const data = await db.query("SELECT * FROM person WHERE person_id = $1;", [id])
    res.send(data.rows[0])
}

module.exports = api