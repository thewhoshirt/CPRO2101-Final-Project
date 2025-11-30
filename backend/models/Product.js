const mongoose = require('mongoose');
/**
 * Create the mongodb schema for the product which includes product name and price as their respective
 * datatypes (string and number) and make them both required to add a product to the database
 */
const productSchema = new mongoose.Schema({
    ProductName: {type: String, required: true, unique: true},
    ProductPrice: {type: Number, required: true}
});
module.exports = mongoose.model('Product',productSchema);