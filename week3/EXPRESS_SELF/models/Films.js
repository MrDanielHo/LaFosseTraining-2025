const films = require('../films.json')

class Film {
    constructor (film) 
    {
        this.title = film.title,
        this.overview = film.overview,
        this.duration = film.duration,
        this.release_year = film.release_year,
        this.cover_url = film.cover_url,
        this.backdrops_url = film.backdrops_url,
        this.id = film.id
    }
    
    static showAll () {
        return films.map (q => new Film(q))
    }

    static show (title) {
        const film = films.find((film) => film.title.toLowerCase() == title.toLowerCase())
        if (film) {
            return new Film(film)
        } else {
            throw `The film: ${film} does not exist`
        }
    }

    static show (id) {
        const film = films.find((film) => film.id.toLowerCase() == id.toLowerCase())
        if (film) {
            return new Film(film)
        } else {
            throw `The ${id} does not exist`
        }
    }

    static create (data) {
        const newFilm = data
        console.log(newFilm);
        newFilm['id'] = fruits.length +1
        films.push(newFilm)
        return new Film(newFilm)
    }

    update (data) {
        const updateFilm = films.find(film => film.title,toLowerCase() == this.title.toLowerCase())
        if (updateFilm) {
            updateFilm.title = data.title
            updateFilm.release_year = data.release_year
            return new Film (updateFilm)
        } else {
            throw 'film not found'
        }
    }

    destroy ( ) {
        const deletedFilm = films.find(film => film.title.toLowerCase() == this.title.toLowerCase())
        if (deletedFilm) {
            const index = films.indexOf(deletedFilm)
            films.splice(index, 1)
        } else {
            throw 'film not found'
        }
    }
}

module.exports = Film