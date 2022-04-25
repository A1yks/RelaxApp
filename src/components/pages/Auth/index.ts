import Auth from './Auth';
import { PageTexts } from './types';

export const pageTexts: PageTexts = {
    login: {
        page: 'Войти',
        buttonText: 'Авторизоваться',
        bottomText: 'Нет аккаунта?',
        pressableText: 'Зарегистрироваться',
    },
    register: {
        page: 'Зарегистрироваться',
        buttonText: 'Зарегистрироваться',
        bottomText: 'Уже есть аккаунт?',
        pressableText: 'Войти',
    },
};

export default Auth;
