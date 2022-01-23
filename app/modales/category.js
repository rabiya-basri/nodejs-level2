const mongoose = require('mongoose')
const schema = mongoose.Schema

//creating category schema
const categorySchema = new schema({
    name: {
        type: String,
        require:true
    }
})

//creating modal
const Category = mongoose.model('Category', categorySchema)

module.exports = Category