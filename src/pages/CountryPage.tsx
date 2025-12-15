import { Helmet } from 'react-helmet-async';
import { QrCode } from 'lucide-react';
import { Country, countries } from '@/data/countries';
import { getMedicationsByCountry } from '@/data/medications';
import { useLanguage } from '@/hooks/useLanguage';
import { FeverCalculator } from '@/components/FeverCalculator';
import { CountrySelector } from '@/components/CountrySelector';
import { LanguageToggle } from '@/components/LanguageToggle';
import { cn } from '@/lib/utils';

interface CountryPageProps {
  country: Country;
}

export function CountryPage({ country }: CountryPageProps) {
  const { language, translations, toggleLanguage, isRTL } = useLanguage(
    country.defaultLanguage,
    country.languages
  );

  const medications = getMedicationsByCountry(country.code);

  // Generate hreflang links for SEO
  const hreflangLinks = countries.map(c => ({
    hreflang: c.hreflang,
    href: `https://fevercalc.com${c.path}`,
  }));

  return (
    <>
      <Helmet>
        <html lang={language} dir={isRTL ? 'rtl' : 'ltr'} />
        <title>{translations.siteName} | {translations.siteTagline}</title>
        <meta name="description" content={translations.siteTagline} />
        <link rel="canonical" href={`https://fevercalc.com${country.path}`} />
        
        {/* Hreflang tags for international SEO */}
        {hreflangLinks.map(link => (
          <link key={link.hreflang} rel="alternate" hrefLang={link.hreflang} href={link.href} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://fevercalc.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${translations.siteName} - ${country.name}`} />
        <meta property="og:description" content={translations.siteTagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://fevercalc.com${country.path}`} />
        <meta property="og:locale" content={country.hreflang.replace('-', '_')} />
      </Helmet>

      <div className={cn("min-h-screen bg-gradient-to-b from-blue-50 to-white", isRTL && "font-arabic")}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
              {country.languages.length > 1 && (
                <LanguageToggle
                  currentLanguage={language}
                  availableLanguages={country.languages}
                  onToggle={toggleLanguage}
                  isRTL={isRTL}
                />
              )}
            </div>

            <div className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
              <CountrySelector currentCountry={country} isRTL={isRTL} />
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">
                <QrCode className="w-4 h-4" />
                <span className="text-sm font-medium">{translations.share}</span>
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary-50 to-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className={cn(
                "text-2xl sm:text-3xl font-bold",
                isRTL ? "text-primary-600" : "text-gray-900"
              )}>
                {isRTL && <span className="text-primary-500">حرارة</span>}
                {!isRTL && translations.siteName}
              </h1>
              <span className="text-3xl">💉</span>
            </div>
            <h2 className="text-lg text-gray-600 max-w-xl mx-auto">
              {translations.siteTagline}
            </h2>
          </div>
        </div>

        {/* Calculator */}
        <main className="py-6">
          <FeverCalculator
            medications={medications}
            translations={translations}
            isRTL={isRTL}
            language={language}
          />
        </main>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} FeverCalc. {translations.disclaimer}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
