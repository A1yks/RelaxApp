export type PageVariant = 'login' | 'register';

export type PageTexts = {
    [variant in PageVariant]: {
        page: string;
        buttonText: string;
        bottomText: string;
        pressableText: string;
    };
};
