import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose.set('strictQuery', false);
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI);

        console.log(`Database connected: ${conn.connection.host}`);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

export default connectDB;