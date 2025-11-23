const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    ProductName: {type: String, required: true, unique: true},
    ProductPrice: {type: Number, required: true}
});
module.exports = mongoose.model('Product',productSchema);