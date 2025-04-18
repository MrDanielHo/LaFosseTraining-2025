const { Router } = require('express');
const router = Router();
const usersController = require('../controllers/users')
const learningResourcesController = require('../controllers/learningResources')


router.get('/', usersController.index)
router.get('/:id', usersController.show)
router.post('/', usersController.create)
router.patch('/:id', usersController.update)
router.delete('/:id', usersController.destroy)

router.get('/', learningResourcesController.index)
router.get('/:id', learningResourcesController.show)
router.post('/', learningResourcesController.create)
router.patch('/:id', learningResourcesController.update)
router.delete('/:id', learningResourcesController.destroy)

module.exports = router;
