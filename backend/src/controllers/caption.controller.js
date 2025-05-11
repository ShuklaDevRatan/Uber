import captionModel from "../models/caption.model.js";
import * as captionService from "../services/caption.service.js"
import { validationResult } from "express-validator"
import redis from "../services/redis.service.js";



export const registerCaptionController = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    try {
        const { fullname, email, password, vehicle } = req.body;

        const caption = await captionService.registerCaptionService({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        })
        const token = await caption.genrateAuthToken();
        res.status(201).json({ token, caption });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}



export const loginCaptionController = async (req, res, next) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    try {
        const { email, password } = req.body;
        if (!email || !password) throw new Error("All Fields Are Reqiure");
        const caption = await captionModel.findOne({ email }).select('+password');
        if (!caption) return res.status(400).json({ message: "Invalid Email Or Password" });
        const isMatch = await caption.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid Email Or Password" });
        const token = await caption.genrateAuthToken();
        delete caption._doc.password
        res.status(201).json({ token, caption });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}




export const profileCaptionController = async (req, res, next) => {
    res.status(200).json({caption : req.caption});
}




export const logoutCaptionController = async (req, res, next) => {
    try {
        const time = req.tokenData.exp * 1000 - Date.now();
        await redis.set(`blacklist:${req.tokenData.token}`, true, "EX", Math.floor(time / 1000));
        res.status(200).json({ message: "Logged out successfully " });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}