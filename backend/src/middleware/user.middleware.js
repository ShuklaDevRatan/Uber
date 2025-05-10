import { body } from "express-validator";
import userModel from "../models/user.model.js";
import redis from "../services/redis.service.js";

export const registerUserValidation = [
    body("email").isEmail().withMessage("invalid email"),
    body("fullname.firstname").isLength({ min: 3 }).withMessage('Fisrtname must be 3 charracter long'),
    body('password').isLength({ min: 6 }).withMessage('passwod must be 6 charracter long')
]

export const loginUserValidation = [
    body("email").isEmail().withMessage("invalid email"),
    body('password').isLength({ min: 4 }).withMessage('passwod must be 4 charracter long')
]

export const authUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] || req.cookies.token;
        if (!token) {
           return res.status(401).json({ message: "Unauthorized" });
        }
        const isBlacklisted = await redis.get(`blacklist:${token}`)
        if (isBlacklisted) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const decoded = await userModel.verifyToken(token);
        if (!decoded) {
            return  res.status(401).json({ message: "Unauthorized" });
        }
        const user = await userModel.findById(decoded._id)
        if (!user) {
            return res.status(400).json({ message: "User Not Found" });
        }
        delete user._doc.password;
        req.user = user;
        req.tokenData = { token, ...decoded }
        return next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
}