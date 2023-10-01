import mongoose from "mongoose";

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected".cyan.bold);
    }
    catch(err){
        console.error("Error connecting to MongoDB", err.message.red.bold);
        process.exit(1);
    }
}

export default connectDB;