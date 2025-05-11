import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import config from "../config/config.js";

const captionSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: [3, 'firstname must be atleast 3 character long']
        },
        lastname: {
            type: String,
            minLength: [3, 'firstname must be atleast 3 character long']

        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, 'please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: "inactive"
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, 'coloe must be atleast 3 character long']
        },
        plate: {
            type: String,
            required: true,
            minLength: [7, 'plate must be atleast 7 character long']
        },
        capacity: {
            type: Number,
            required: true,
            minLength: [1, "capacity atlest be 1"]
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motercycle', 'auto']
        }
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number
        }
    }
})

captionSchema.methods.genrateAuthToken = async function () {
    return await jwt.sign({ id: this._id }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRES_IN })
}

captionSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captionSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
captionSchema.statics.verifyToken = async function (token) {
    return await jwt.verify(token, config.JWT_SECRET)
}

const captionModel = mongoose.model('caption', captionSchema);
export default captionModel;