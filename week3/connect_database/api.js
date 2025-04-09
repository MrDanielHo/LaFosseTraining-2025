const express = require('express')
const cors = require('cors')
const api = express()
const db = require('./database/db')

api.use(express.json())
api.use(cors())

api.get('/', (request, response) => {
    resquest.send('The Wrongs API: track injustice!')
})

api.get('/wrong', async (request, response) => {
    // This is requesting the below query from the database stored on the cloud
    const data = await db.query("SELECT * FROM wrong;")
    response.send(data.rows)
    }
)

api.get('/people/:id'), async (request, response) => {
    const id= parseInt(request.params.id)
    const data = await db.query("SELECT * FROM person WHERE person_id = $1;", [id])
    response.send(data.rows[0])
}

// POST
api.post('/people/'), async (request, response) => {
    const person = request.body.name;
    try {
        await db.query("INSERT INTO person(person_name) VALUES ($1);", [person]);
        response.status(201).send({mesage: `Person ${person} added successfully`});
    } catch (error) {
        response.sendStatus (500)
    }
}

// PATCH
api.patch('/people/:id'), async (request, response) => {
    const id = parseInt(request.params.id)
    const setName = request.body.name
    try {
        const data = await db.query("UPDATE people SET person_name = $1 WHERE person_name = $2;", [setName, id])
    } catch (error) {
        response.sendStatus (500)
    }
}

// DELETE
api.delete('/people/:id'), async (request, response) => {
    const id = parseInt (request.params.id)
    try {
        const result = await db.query("DELETE FROM people WHERE id = $1;", [id])
    } catch (error) {
        response.sendStatus (500)
    }
}

module.exports = api