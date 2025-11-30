const Product = require('../models/Product'); // get the prodcut model
/**
 * Function to get all the products from the database
 * @param {*} req 
 * @param {*} res 
 */
exports.getProducts = async (req, res) => {
  /**
   * Try to get the products from the database using the Find() function with no parameters
   * to get every product, then return that as json to the browser
   * If there is an error, return an error to the browser with the specified message
   */
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

