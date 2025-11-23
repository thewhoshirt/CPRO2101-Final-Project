const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    ProductName: {type: String, required: true, unique: true},
    ProductPrice: {type: Float, required: true}
});
module.exports = mongoose.model('Product',productSchema);