import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import path from 'path';

dotenv.config({ path: '.env' });

const app = express();

app.use('/media', express.static(path.join(__dirname, './media')));
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

mongoose.connect(process.env.DB_CONNECT, (err) => {
    if (err) console.error('DB connection error');
    else console.log('Connected to db');
});

app.listen(3000, () => {
    console.log('Server running');
});
