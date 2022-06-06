const mongoose = require('mongoose')

const phoneSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

module.exports = mongoose.model('phones', phoneSchema)