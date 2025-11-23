const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('../config/db');
const Product = require('../models/Product');
const products = require('./products');
const seedDatabase = async () => {
  try {
    await connectDB();
    await Product.deleteMany();
    const created = await Product.insertMany(products);
    console.log(`Inserted ${created.length} products`);
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    process.exit();
  }
};
if (require.main === module) {
  seedDatabase();
}
module.exports = { seedDatabase };
