const express = require('express')
const router = express.Router()
const taskController = require('../app/controllers/taskController')
const categoryController = require('../app/controllers/categoryController')

router.get('/api/tasks', taskController.list)
router.post('/api/tasks', taskController.create)
router.get('/api/tasks/:id', taskController.show)

router.get('/api/categories', categoryController.list)
router.post('/api/categories',categoryController.create)
router.get('/api/categories/:id', categoryController.show)
router.put('/api/categories/:id', categoryController.update)
router.delete('/api/categories/:id', categoryController.destroy)

module.exports = router