const dotenv = require('dotenv');
dotenv.config(); // use the .env file
/**
 * Import the databaase connection setting and the product modle and route
 */
const connectDB = require('../config/db');
const Product = require('../models/Product');
const products = require('./products');
/**
 * Function to clear and populate the database everytime the backend is run to avoid
 * having continuity errors between runs of the program
 */
const seedDatabase = async () => {
  /**
   * Try to connect to the database and then clear and insert the product data then log how mnay items were added
   * otherwise log the error along with the specified message
   */
  try {
    await connectDB();
    await Product.deleteMany();
    const created = await Product.insertMany(products);
    console.log(`Inserted ${created.length} products`);
  } catch (err) {
    console.error('Seeding failed:', err);
  } 
};
/**
 * Run the seedDatabase() function when the node server is started
 */
if (require.main === module) {
  seedDatabase();
}
module.exports = { seedDatabase };
