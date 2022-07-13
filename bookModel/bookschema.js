const mongoose = require('mongoose')

const bookschema = mongoose.Schema({
    title:{
        type: String,
        required: [true,"TITLE REQUIRED"]
    },
    isbn:{
        type: String,
        required: [true,"ISBN IS REQUIRED"]
    },
    pageCount:{
        type: String,
        required: [true,"PAGE COUNT IS REQUIRED"]
    },
    publishedDate:{
        type: String,
        required: [true,"DATE IS REQUIRED"]
    },
    status:{
        type: String,
        required: [true,"STATUS IS REQUIRED"]
    }
})

module.exports = mongoose.model('books',bookschema)