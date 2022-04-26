import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import { Token } from './types';

class AuthService {
    async login(email: string, password: string): Promise<Token | Services.Error> {
        const user = await User.findOne({ email });

        if (!user) return { status: 400, error: 'Пользователь с таким email не существует' };

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) return { status: 400, error: 'Неверный email и/или пароль' };

        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });

        return token;
    }

    async register(name: string, email: string, password: string): Promise<Token> {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ name, email, password: hashedPassword });
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });

        await user.save();

        return token;
    }
}

export default new AuthService();
