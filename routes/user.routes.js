import express from 'express';
import upload from '../controllers/multer.controllers.js';
import registeruser from '../controllers/register.controllers.js';

let router = express.Router();

router.post('/register',upload.single('avatar'), registeruser);

export default router;