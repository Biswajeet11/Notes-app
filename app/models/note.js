const mongoose = require('mongoose')

//note Schema
const Schema = mongoose.Schema
const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

//note constructor function
const Note = mongoose.model('Note', noteSchema)
module.exports = Note