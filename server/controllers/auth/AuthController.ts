import AuthService from '../../services/auth/AuthService';
import { isServiceError } from '../../types';
import { isValidEmail } from '../../utils/isValidEmail';
import { LoginBody, RegisterBody } from './types';

class AuthController {
    async login(req: Server.Request<LoginBody>, res: Server.Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Заполнены не все поля' });
        }

        try {
            const result = await AuthService.login(email.toLowerCase(), password);

            if (isServiceError(result)) {
                return res.status(result.status).json({ error: result.error });
            }

            res.status(200).json({ data: result });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }

    async register(req: Server.Request<RegisterBody>, res: Server.Response) {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Заполнены не все поля' });
        }

        if (password.length < 7) {
            return res.status(400).json({ error: 'Длина пароля должна быть больше 6 символов' });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ error: 'Почта указана в неверном формате' });
        }

        try {
            const result = await AuthService.register(name, email, password);

            if (isServiceError(result)) {
                return res.status(result.status).json({ error: result.error });
            }

            res.status(201).json({ data: result });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }
}

export default new AuthController();
