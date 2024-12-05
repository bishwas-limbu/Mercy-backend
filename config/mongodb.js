import mongoose from "mongoose";
//import 'dotenv/config'

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => console.log("Database Connected"))
//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)

// }



// Do not use '@' symbol in your databse user's password else it will show an error.

export const connectDB = async () => {
    if (!process.env.MONGODB_URI) {
        console.error('MONGO_URI is not defined in the environment variables.');
        return;
    }

    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected:',connection.connection.host);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

export default connectDB;