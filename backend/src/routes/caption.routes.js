import {Router} from 'express';
import * as captionController from '../controllers/caption.controller.js'
import * as captionMiddleware from '../middleware/caption.middleware.js'
const router = Router();

router.post('/register',captionMiddleware.registerCaptionValidation,captionController.registerCaptionController)

export default router;