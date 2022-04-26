import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth';
import userRouter from './routes/user';

dotenv.config({ path: '.env' });

const app = express();

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

mongoose.connect(process.env.DB_CONNECT, (err) => {
    if (err) console.error('DB connection error');
    else console.log('Connected to db');
});

app.listen(3000, () => {
    console.log('Server running');
});
