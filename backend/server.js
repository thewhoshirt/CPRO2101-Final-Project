/**
 * Import express, dotenv, and the custom functions/routes required for the backend to work
 */
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { seedDatabase } = require('./seeder/seed');
const app = express(); // tell the program to use express
const PORT = process.env.PORT || 5000; // use the port specified in our env file otherwise use port 5000
const productRoutes = require('./routes/productRoutes');
dotenv.config(); // tell the program to use the env file
app.use(express.json()); // allow the program to send data as json
/**
 * Allow cross-site request origins so that the google maps API works
 */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use('/api',productRoutes); // put the gathered database info at the /api/products endpoint
/**
 * Function that runs when the backend program is started, this function tries to connect to the database
 * then it seeds the database and tells the user what port the program is listening on.
 * Otherwise the program will log the error and exit
 */
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
start(); // run the start() function when the backend is started