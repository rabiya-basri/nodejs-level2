const mongoose = require('mongoose')

//creating scema
const schema = mongoose.Schema
const taskSchema=schema 
    ({
        title: {
            type: String,
            required:[true,'title cannot be blank']
    },
        description: {
        type:String
    },
        completed: {
        type:Boolean
    },
        dueDate: {
        type:Date
    },
        createdDate: {
            type: Date,
            default:Date.now
        },
        categoryId: {
            type: schema.Types.ObjectId,
            ref: 'Category',
            require:true
        }
})
//creating model
const Task = mongoose.model('tasks', taskSchema)
module.exports = Task