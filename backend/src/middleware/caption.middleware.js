import { body } from "express-validator";
import captionModel from "../models/caption.model.js";
import redis from "../services/redis.service.js";


export const registerCaptionValidation = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
]

export const loginCaptionValidation = [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

export const authCaption = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] || req.cookies.token;
        if (!token) {
           return res.status(401).json({ message: "Unauthorized" });
        }
        const isBlacklisted = await redis.get(`blacklist:${token}`)
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = await captionModel.verifyToken(token);
        if (!decoded) {
            return  res.status(401).json({ message: "Unauthorized" });
        }
        const caption = await captionModel.findById(decoded.id)
        if (!caption) {
            return res.status(400).json({ message: "caption Not Found" });
        }
        delete caption._doc.password;
        req.caption = caption; 
        req.tokenData = { token, ...decoded }
        return next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ message: "Unauthorized" });
    }
}