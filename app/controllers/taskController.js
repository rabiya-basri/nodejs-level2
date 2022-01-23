const Task = require('../modales/task')
const taskController = {}

taskController.list = (req, res) => {
    Task.find()
    .then((task) => {
        res.json(task)
    })
    .catch((err) => {
        res.json(err)
    })
}

taskController.create = (req, res) => {
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
        res.json(err)
    })
}

taskController.show = (req, res) => {
    const id = req.params.id
    Task.findById(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
        res.json(err)
    })
}
module.exports = taskController