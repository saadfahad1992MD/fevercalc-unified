import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ChevronDown, X } from 'lucide-react';
import { countries, Country } from '@/data/countries';
import { cn } from '@/lib/utils';

interface CountrySelectorProps {
  currentCountry: Country;
  isRTL?: boolean;
}

export function CountrySelector({ currentCountry, isRTL }: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectCountry = (country: Country) => {
    setIsOpen(false);
    navigate(country.path);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 bg-white/80 backdrop-blur rounded-lg border border-gray-200 hover:bg-white transition-colors",
          isRTL && "flex-row-reverse"
        )}
      >
        <span className="text-xl">{currentCountry.flag}</span>
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {currentCountry.name}
        </span>
        <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className={cn(
            "absolute top-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[200px]",
            isRTL ? "left-0" : "right-0"
          )}>
            <div className="p-2 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-medium text-gray-500 px-2">Select Country</span>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <div className="max-h-[300px] overflow-y-auto">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleSelectCountry(country)}
                  className={cn(
                    "w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors",
                    currentCountry.code === country.code && "bg-primary-50",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <span className="text-xl">{country.flag}</span>
                  <div className={cn("flex-1", isRTL ? "text-right" : "text-left")}>
                    <p className="text-sm font-medium text-gray-900">{country.name}</p>
                    <p className="text-xs text-gray-500">{country.nativeName}</p>
                  </div>
                  {currentCountry.code === country.code && (
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
