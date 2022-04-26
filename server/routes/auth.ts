import { Router } from 'express';
import AuthController from '../controllers/auth/AuthController';

const router = Router();

router.post('/register', AuthController.register);

export default router;
