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

export interface IHoroscopeContext {
    zodiacSign: ZodiacSigns;
    loading: boolean;
    horoscope: string[] | null;
    fetchHoroscope(): Promise<void>;
    setZodiacSign(zodiacSign: ZodiacSigns): void;
    setLoading(loading: boolean): void;
    setHoroscope(horoscope: string[]): void;
}
