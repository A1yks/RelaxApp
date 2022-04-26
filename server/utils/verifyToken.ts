import { NextFunction } from 'express';
import { Token } from '../services/auth/types';
import jwt from 'jsonwebtoken';

export function verifyToken(req: Server.Request, res: Server.Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({ error: 'Отсутствует заголовок авторизации' });
    }

    const tokenMatch = authHeader.match(/bearer (.+$)/i);

    if (!tokenMatch) {
        return res.status(403).json({ error: 'Не удалось распознать токен' });
    }

    const token: Token = tokenMatch[1];

    const verified = jwt.verify(token, process.env.TOKEN_SECRET);

    if (verified) next();
    else res.status(403).json({ error: 'Невалидный токен' });
}
