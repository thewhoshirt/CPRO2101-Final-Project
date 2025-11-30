const express = require('express');
const router = express.Router(); // use the express router for easier management
const productController = require('../controllers/productController');
router.get('/products',productController.getProducts); // call the getProducts() function to get all the products and put the result on the /products page
module.exports = router;