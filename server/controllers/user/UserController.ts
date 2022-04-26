import UserService from '../../services/user/UserService';
import { isValidEmail } from '../../utils/isValidEmail';
import { GetUserParams } from './types';

class UserController {
    async getUser(req: Server.Request<any, GetUserParams>, res: Server.Response) {
        const { email } = req.params;

        if (!email) {
            return res.status(400).json({ error: 'Не указан email' });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ error: 'Указан неправильный email' });
        }

        try {
            const userData = await UserService.getUserData(email);

            res.status(200).json({ data: userData });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }
}

export default new UserController();
