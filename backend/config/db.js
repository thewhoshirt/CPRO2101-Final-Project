const mongoose = require('mongoose');
/**
 * Function that connects to the mongodb local database
 */
const connectDB = async () => {
    /**
     * Try to connect to the database using the parameters in the env file and log the success
     * or catch the error and print that to the console before exiting
     */
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB connected");
    }
    catch(err){
        console.error("Database connection failed:",err);
        process.exit(1);
    }
}
module.exports = connectDB