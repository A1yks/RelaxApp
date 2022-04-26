import User from '../../models/User';
import { ClientUserData } from './types';

class UserService {
    async getUserData(userEmail: string): Promise<ClientUserData | Services.Error> {
        const user = await User.findOne({ email: userEmail });

        if (!user) return { status: 400, error: 'Пользователя с таким email не существует' };

        return {
            name: user.name,
            email: user.email,
        };
    }
}

export default new UserService();
