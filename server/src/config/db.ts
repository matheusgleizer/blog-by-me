import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const MONGO_URI: any = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
