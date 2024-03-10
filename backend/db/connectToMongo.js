import mongoose from "mongoose";


 export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('connect DB');
    } catch (error) {
        console.log('Error connect DB', error)
    }
}