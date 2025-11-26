const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { seedDatabase } = require('./seeder/seed');
dotenv.config();
const app = express();
app.use(express.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
const PORT = process.env.PORT || 5000;
const productRoutes = require('./routes/productRoutes');
app.use('/api',productRoutes);
const start = async () => {
	try {
		await connectDB();
		await seedDatabase();
		app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
start();