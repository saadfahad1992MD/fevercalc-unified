import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  currentLanguage: string;
  availableLanguages: string[];
  onToggle: () => void;
  isRTL?: boolean;
}

const languageNames: Record<string, string> = {
  ar: 'العربية',
  en: 'English',
  id: 'Bahasa',
  tr: 'Türkçe',
  es: 'Español',
  pt: 'Português',
  tl: 'Tagalog',
  hi: 'हिंदी',
};

export function LanguageToggle({ currentLanguage, availableLanguages, onToggle, isRTL }: LanguageToggleProps) {
  if (availableLanguages.length <= 1) {
    return null;
  }

  // Get the OTHER language to display on the button
  const otherLanguage = availableLanguages.find(lang => lang !== currentLanguage) || availableLanguages[0];
  const displayName = languageNames[otherLanguage] || otherLanguage.toUpperCase();

  return (
    <button
      onClick={onToggle}
      className={cn(
        "flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
        isRTL && "flex-row-reverse"
      )}
    >
      <Globe className="w-4 h-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">{displayName}</span>
    </button>
  );
}
