export enum ZodiacSigns {
    AQUARIUS = 'aquarius',
    ARIES = 'aries',
    CANCER = 'cancer',
    CAPRICORN = 'capricorn',
    GEMINI = 'gemini',
    LEO = 'leo',
    LIBRA = 'libra',
    PISCES = 'pisces',
    SAGITTARIUS = 'sagittarius',
    SCORPIO = 'scorpio',
    TAURUS = 'taurus',
    VIRGO = 'virgo',
}

export interface GetUserParams {
    email: string;
}

export interface GetHoroscopeParams {
    zodiacSign: ZodiacSigns;
}

export interface DeleteImageBody {
    fileName: string;
}
