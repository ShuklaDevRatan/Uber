import userModel from "../models/user.model.js";


export const registerUserService = async ({ firstname, lastname, email, password }) => {
    if (!firstname || !email || !password) throw new error("all field are require")
    const userExists = await userModel.findOne({
        email
    });
    if (userExists) {
        throw new Error("user already exists");
    }
    const hashPassword = await userModel.hashPassword(password)
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password: hashPassword
    })
    await user.save();
    delete user._doc.password;
    return user
}