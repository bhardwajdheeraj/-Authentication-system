// authRoutes.js
import express from 'express';
import { google, signup } from '../controllers/authController.js';
import { signin } from '../controllers/authController.js';
const router = express.Router();

router.post('/signup', signup);
router.post('/signin',signin);
router.post('/google', google); // Assuming Google sign-in uses the same controller
export default router;
