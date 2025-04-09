const Films = require('../models/Films')

const index = async (req, res) => {
    try {
        const films = await Films.showAll()
        res.status(200).send(films)
    } catch (err) {
        res.status(500).send({error: 'Server error'})
    }
}

const show = async (req, res) => {
    const title = req.params.title.toLowerCase()
    try {
        const film = await Films.show(title)
        res.status(200).send(film)
    } catch (err) {
        res.status(400).send ( {error: err} )
    }
}

const create = async (req, res) => {
    try {
        const newFilm = await Film.create(req.body)
        res.status(201).send(newFilm)
    } catch (err) {
        res.status(409).send({error: err})
    }
}

const update = async (req, res) => {
    const title = req.params.title.toLowerCase()
    try {
        const film = await Film.show(title)
        const result = await film.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send({error: err})
    }
}

const destroy = async (req, res) => {
    const title = req.params.title.toLowerCase()
    try {
        const film = await Film.show(title)
        const result = await film.destroy()
        res.sendStatus(204)
    } catch (err) {
        res.status(404).send({error: err})
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}