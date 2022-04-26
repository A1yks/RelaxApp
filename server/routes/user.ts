import { Router } from 'express';
import UserController from '../controllers/user/UserController';
import { verifyToken } from '../utils/verifyToken';

const router = Router();

router.get('/:email', verifyToken, UserController.getUser);

export default router;
