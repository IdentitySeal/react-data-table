const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isbn: {
        type: Number,
        require: true
    },
    authors: [
        {
            type: String,
            required: true
        }
    ]
    ,
    pages: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    publisher: {
        type: String,
        required: true,
        trim: true
    },
     released: {
        type: Date,
        default: Date.now
    }    
})
    // .method("toJSON", function () {
    //     const { __v, _id, ...object } = this.toObject();
    //     object.id = _id;
    //     return object;
    // })

const Books = mongoose.model("Books", bookSchema)

module.exports = Books;