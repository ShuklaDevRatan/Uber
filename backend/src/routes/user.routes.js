import {Router} from 'express';
import * as userController from "../controllers/user.controller.js";
import *as userMiddleware from '../middleware/user.middleware.js'
const router = Router();

router.post('/register',userMiddleware.registerUserValidation,userController.registerUserController)

router.post("/login" , userMiddleware.loginUserValidation , userController.loginUserController)

router.get("/profile" ,userMiddleware.authUser , userController.profileUsercontroller)

router.get("/logout" ,userMiddleware.authUser , userController.logoutUsercontroller)

export default router;