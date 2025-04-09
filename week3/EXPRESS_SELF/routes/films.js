const express = require('express')
const router = express.Router()
const films = require('../controllers/films')

router.get('/', films.index)
router.get('/:title', films.show)
router.post('/', films.create)
router.patch('/:title', films.update)
router.delete('/:title', films.destroy)

module.exports = router