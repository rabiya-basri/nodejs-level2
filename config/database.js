const mongoose = require('mongoose')

const configureDb = () => {
    mongoose.connect('mongodb://localhost:27017/practice1')
    .then(() => {
        console.log('connected to db')
    })
    .catch((err) => {
        console.log('not connect',err)
    })
}
module.exports = configureDb