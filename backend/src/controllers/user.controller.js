import userModel from "../models/user.model.js";
import * as userServices from '../services/user.service.js'
import { validationResult } from "express-validator"
import redis from "../services/redis.service.js";

export const registerUserController = async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    try {
        const { fullname, email, password } = req.body;

        const user = await userServices.registerUserService({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password
        });
        const token = await user.genrateAuthToken();
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const loginUserController = async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
        return res.status(400).json({ errors: err.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email,
        }).select('+password')
        if (!user) {
            return res.status(404).json({ message: "Invalid Email Or Password" })
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(404).json({ message: "Invalid Email Or Password" })
        }
        const token =await user.genrateAuthToken();
        delete user._doc.password;
        res.status(201).json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

export const profileUsercontroller = async (req, res) => {
    res.status(201).json(req.user)
}

export const logoutUsercontroller = async (req, res) => {
    try {
        const time = req.tokenData.exp * 1000 - Date.now();
        await redis.set(`blacklist:${req.tokenData.token}`, true, "EX", Math.floor(time / 1000));
        res.status(200).json({ message: "Logged out successfully " });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}