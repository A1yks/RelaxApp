import { ZodiacSigns } from '../../controllers/user/types';
import User from '../../models/User';
import { ClientUserData } from './types';
import axios from 'axios';
import { parse } from 'node-html-parser';
import fs from 'fs';
import path from 'path';

class UserService {
    async getUserData(userEmail: string): Promise<ClientUserData | Service.Error> {
        const user = await User.findOne({ email: userEmail });

        if (!user) return { status: 400, error: 'Пользователя с таким email не существует' };

        return {
            name: user.name,
            email: user.email,
            photos: user.photos,
        };
    }

    async getHoroscope(zodiacSign: ZodiacSigns) {
        const response = await axios.get<string>(`https://horo.mail.ru/prediction/${zodiacSign}/today/`);
        const horoscope = this.parseHoroscopePage(response.data);

        return horoscope;
    }

    async uploadImage(userId: string, file: Express.Multer.File): Promise<string | Service.Error> {
        const filePath = `/media/uploads/${file.filename}`;
        const result = await User.findByIdAndUpdate(userId, { $push: { photos: filePath } });

        if (!result) return { status: 404, error: 'Пользователь не найден' };

        return filePath;
    }

    async deleteImage(userId: string, fileName: string): Promise<string[] | Service.Error> {
        const filePath = `/media/uploads/${fileName}`;

        const [result] = await Promise.all([
            User.findByIdAndUpdate(userId, { $pull: { photos: filePath } }, { new: true }),
            fs.promises.unlink(path.resolve(`.${filePath}`)),
        ]);

        if (!result) return { status: 404, error: 'Пользователь не найден' };

        return result.photos;
    }

    private parseHoroscopePage(html: string) {
        const page = parse(html);
        const paragraphs = page.querySelectorAll('.article__item.article__item_alignment_left.article__item_html p');
        const content = paragraphs.map((p) => p.textContent);

        return content;
    }
}

export default new UserService();
