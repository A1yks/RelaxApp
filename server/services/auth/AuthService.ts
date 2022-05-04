import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User, { User as UserType } from '../../models/User';
import { ClientResponse } from './types';

class AuthService {
    async login(email: string, password: string): Promise<ClientResponse | Service.Error> {
        const user = await User.findOne({ email }).lean();

        if (!user) return { status: 400, error: 'Пользователя с таким email не существует' };

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) return { status: 400, error: 'Неверный email и/или пароль' };

        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });

        delete (user as Partial<UserType>).password;

        return { user, token };
    }

    async register(name: string, email: string, password: string): Promise<ClientResponse | Service.Error> {
        const userExists = await User.exists({ email });

        if (userExists) return { status: 409, error: 'Пользователь с таким email уже зарегистрирован' };

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({ name, email, password: hashedPassword });
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, { expiresIn: '7d' });

        await user.save();

        delete (user as Partial<UserType>).password;

        return { user, token };
    }
}

export default new AuthService();
