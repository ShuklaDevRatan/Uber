import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from '../config/config.js'
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            require: true,
            trim: true,
            minLength: [5, "username should be atleast 5 character long"],
            maxLength: [20, "username exceeds 20 character limit"],
        },
        lastname: {
            type: String,
            require: true,
            minLength: [5, "username should be atleast 5 character long"],
        }
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minLength: [10, "username should be atleast 10 character long"],
        maxLength: [50, "username exceeds 50 character limit"],
    },
    password: {
        require: true,
        type: String,
        select: false,
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.genrateAuthToken = async function () {
    return await jwt.sign({ _id: this.id }, config.JWT_SECRET , {expiresIn:config.JWT_EXPIRES_IN})
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

userSchema.statics.verifyToken = async function (token) {
    return await jwt.verify(token, config.JWT_SECRET)
}
const userModel = mongoose.model('user', userSchema);
export default userModel;