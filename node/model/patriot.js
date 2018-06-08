var mongoose = require('mongoose');

var patriotSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: /[a-z0-9]?/
    },
    password: { 
        type: String, 
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthdate: { 
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Patriot', patriotSchema);