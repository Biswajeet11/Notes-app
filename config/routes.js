const express = require('express')
const router = express.Router()

const notesController = require('../app/controllers/notes-controller')
const categoryController = require('../app/controllers/categories-controller')

router.get('/notes', notesController.list)
router.post('/notes', notesController.create)
router.get('/notes/:id', notesController.show)
router.get('/categories', categoryController.list)
router.post('/categories', categoryController.create)
router.get('/categories/:id', categoryController.show)
router.put('/categories/:id', categoryController.update)
router.delete('/categories/:id', categoryController.destroy)

module.exports = router