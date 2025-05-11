import {Router} from 'express';
import * as captionController from '../controllers/caption.controller.js'
import * as captionMiddleware from '../middleware/caption.middleware.js'
const router = Router();

router.post('/register',captionMiddleware.registerCaptionValidation,captionController.registerCaptionController)

router.post('/login' , captionMiddleware.loginCaptionValidation, captionController.loginCaptionController )

router.get('/profile' , captionMiddleware.authCaption , captionController.profileCaptionController);

router.get('/logout' , captionMiddleware.authCaption , captionController.logoutCaptionController);

export default router;