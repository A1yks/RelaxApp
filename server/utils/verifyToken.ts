import { NextFunction } from 'express';
import { Token } from '../services/auth/types';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export async function verifyToken(req: Server.Request, res: Server.Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ error: 'Отсутствует заголовок авторизации' });
    }

    const tokenMatch = authHeader.match(/bearer (.+$)/i);

    if (!tokenMatch) {
        return res.status(403).json({ error: 'Не удалось распознать токен' });
    }

    const token: Token = tokenMatch[1];
    const tokenData = jwt.verify(token, process.env.TOKEN_SECRET) as jwt.JwtPayload & { userId: string };
    const userExists = await User.exists({ _id: tokenData.userId });

    if (userExists) {
        req.userId = tokenData.userId;
        next();
    } else {
        res.status(403).json({ error: 'Невалидный токен' });
    }
}
