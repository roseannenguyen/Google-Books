const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors:{ 
        type: String, 
        required: true 
    },
    description:{ 
        type: String, 
        required: true 
    },
    image:{ 
        type: String, 
        required: true 
    },
    link:{ 
        type: String, 
        required: true 
    },
    id: {
        type: Number,
        default: Number
    }
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;