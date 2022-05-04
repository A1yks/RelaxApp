import { Router } from 'express';
import UserController from '../controllers/user/UserController';
import { verifyToken } from '../utils/verifyToken';
import multer from 'multer';
import imagesStorage from '../multer-storages/images-storage';

const router = Router();
const upload = multer({ storage: imagesStorage });

router.get('/:email', verifyToken, UserController.getUser);

router.get('/horoscope/:zodiacSign', verifyToken, UserController.getHoroscope);

router.post('/images/upload', [verifyToken, upload.single('image')], UserController.uploadImage);

router.delete('/images/delete', verifyToken, UserController.deleteImage);

export default router;
