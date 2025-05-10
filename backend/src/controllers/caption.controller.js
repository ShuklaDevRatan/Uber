import captionModel from "../models/caption.model.js";
import * as captionService from "../services/caption.service.js"
import { validationResult } from "express-validator"


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
        const token =  await caption.genrateAuthToken();
        res.status(201).json({ token, caption });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}