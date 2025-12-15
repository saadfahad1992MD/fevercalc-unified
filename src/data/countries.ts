export interface Country {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  path: string;
  defaultLanguage: string;
  languages: string[];
  currency: string;
  direction: 'ltr' | 'rtl';
  hreflang: string;
}

export const countries: Country[] = [
  {
    code: 'sa',
    name: 'Saudi Arabia',
    nativeName: 'المملكة العربية السعودية',
    flag: '🇸🇦',
    path: '/',
    defaultLanguage: 'ar',
    languages: ['ar'],
    currency: 'SAR',
    direction: 'rtl',
    hreflang: 'ar-SA',
  },
  {
    code: 'ph',
    name: 'Philippines',
    nativeName: 'Pilipinas',
    flag: '🇵🇭',
    path: '/ph',
    defaultLanguage: 'en',
    languages: ['en', 'tl'],
    currency: 'PHP',
    direction: 'ltr',
    hreflang: 'en-PH',
  },
  {
    code: 'id',
    name: 'Indonesia',
    nativeName: 'Indonesia',
    flag: '🇮🇩',
    path: '/id',
    defaultLanguage: 'id',
    languages: ['id', 'en'],
    currency: 'IDR',
    direction: 'ltr',
    hreflang: 'id-ID',
  },
  {
    code: 'tr',
    name: 'Turkey',
    nativeName: 'Türkiye',
    flag: '🇹🇷',
    path: '/tr',
    defaultLanguage: 'tr',
    languages: ['tr'],
    currency: 'TRY',
    direction: 'ltr',
    hreflang: 'tr-TR',
  },
  {
    code: 'mx',
    name: 'Mexico',
    nativeName: 'México',
    flag: '🇲🇽',
    path: '/mx',
    defaultLanguage: 'es',
    languages: ['es'],
    currency: 'MXN',
    direction: 'ltr',
    hreflang: 'es-MX',
  },
  {
    code: 'br',
    name: 'Brazil',
    nativeName: 'Brasil',
    flag: '🇧🇷',
    path: '/br',
    defaultLanguage: 'pt',
    languages: ['pt'],
    currency: 'BRL',
    direction: 'ltr',
    hreflang: 'pt-BR',
  },
  {
    code: 'ng',
    name: 'Nigeria',
    nativeName: 'Nigeria',
    flag: '🇳🇬',
    path: '/ng',
    defaultLanguage: 'en',
    languages: ['en'],
    currency: 'NGN',
    direction: 'ltr',
    hreflang: 'en-NG',
  },
  {
    code: 'in',
    name: 'India',
    nativeName: 'भारत',
    flag: '🇮🇳',
    path: '/in',
    defaultLanguage: 'en',
    languages: ['en', 'hi'],
    currency: 'INR',
    direction: 'ltr',
    hreflang: 'en-IN',
  },
  {
    code: 'eg',
    name: 'Egypt',
    nativeName: 'مصر',
    flag: '🇪🇬',
    path: '/eg',
    defaultLanguage: 'ar',
    languages: ['ar', 'en'],
    currency: 'EGP',
    direction: 'rtl',
    hreflang: 'ar-EG',
  },
];

export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(c => c.code === code);
};

export const getCountryByPath = (path: string): Country | undefined => {
  return countries.find(c => c.path === path || c.path === `/${path}`);
};
