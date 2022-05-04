import UserService from '../../services/user/UserService';
import { isServiceError } from '../../types';
import { isValidEmail } from '../../utils/isValidEmail';
import { DeleteImageBody, GetHoroscopeParams, GetUserParams, ZodiacSigns } from './types';

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

    async getHoroscope(req: Server.Request<any, GetHoroscopeParams>, res: Server.Response) {
        const { zodiacSign } = req.params;

        if (!Object.values(ZodiacSigns).includes(zodiacSign)) {
            return res.status(400).json({ error: 'Выбран несуществующий знак зодиака' });
        }

        try {
            const result = await UserService.getHoroscope(zodiacSign);

            res.status(200).json({ data: result });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }

    async uploadImage(req: Server.Request, res: Server.Response) {
        if (!req.file) {
            return res.status(400).json({ error: 'Файл не был загружен' });
        }

        try {
            const result = await UserService.uploadImage(req.userId!, req.file);

            if (isServiceError(result)) {
                return res.status(result.status).json({ error: result.error });
            }

            res.status(201).json({ data: { uri: result } });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }

    async deleteImage(req: Server.Request<DeleteImageBody>, res: Server.Response) {
        const { fileName } = req.body;

        if (!fileName || typeof fileName !== 'string') {
            return res.status(400).json({ error: 'Не указано имя файла' });
        }

        try {
            const result = await UserService.deleteImage(req.userId!, fileName);

            if (isServiceError(result)) {
                return res.status(result.status).json({ error: result.error });
            }

            return res.status(200).json({ data: { photos: result } });
        } catch (err) {
            res.status(500).json({ error: 'Неизвестная ошибка' });
        }
    }
}

export default new UserController();
