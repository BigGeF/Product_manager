const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name!"]
    },

    qty: {
        type: Number,
        required: [true, "Please provide a qty!"],
        validate: [
            age => age != undefined && age > 0, 'Please enter an Qty greater than 0.'
        ]
    },

    price: {
        type: Number,
        required: [true, "Please provide a price!"],
        validate: [
            age => age != undefined && age > 0, 'Please enter an price greater than 0.'
        ]
    }
}, { timestamps: true });

mongoose.model('Author', AuthorSchema);