import mongoose from "mongoose";
import config from '../config/config.js';

const connectToDb = async()=>{
        await mongoose.connect(config.MONGODB_URL)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.log(err);
        })
}

export default connectToDb;