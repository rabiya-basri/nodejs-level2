const Category = require('../controllers/categoryController.js')
const categoryController = {}

categoryController.list = (req, res) => {
    Category.find()
        .then((categories) => {
        res.json(categories)
        })
    .catch ((err) => {
        res.json(err) 
    })
}

categoryController.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category) => {
        res.json(category)
        })
        .catch((err) => {
        res.json(err)
    })
}

categoryController.show = (req, res) => {
    const id = req.params.id
    Category.findById(id)
        .then((category) => {
        res.json(category)
        })
        .catch((err) => {
        res.json(err)
    })
}

categoryController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Category.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((category) => {
        res.json(category)
        })
        .catch((err) => {
        res.json(err)
    })
}

categoryController.destroy = (req, res) => {
    const id = req.params.id
    Category.findByIdAndDelete(id)
        .then((category) => {
        res.json(category)
        })
        .catch((err) => {
        res.json(err)
    })
}
module.exports = categoryController