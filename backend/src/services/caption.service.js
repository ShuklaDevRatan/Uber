import captionModel from "../models/caption.model.js";

export const registerCaptionService = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captionExists = await captionModel.findOne({
        email
    });
    if (captionExists) {
        throw new Error("caption already exists");
    }
    const hashPassword = await captionModel.hashPassword(password);

    const caption = await captionModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashPassword,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    })
    // await caption.save()
    delete caption._doc.password
    return caption;
}