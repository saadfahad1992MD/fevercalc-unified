# FeverCalc Unified

A unified fever medicine dosage calculator for children, supporting 9 countries with localized medications and multiple languages.

## 🌍 Supported Countries

| Country | Path | Languages | Medications |
|---------|------|-----------|-------------|
| 🇸🇦 Saudi Arabia | `/` | Arabic | 24 |
| 🇵🇭 Philippines | `/ph/` | English, Tagalog | 8 |
| 🇮🇩 Indonesia | `/id/` | Indonesian, English | 9 |
| 🇹🇷 Turkey | `/tr/` | Turkish | 11 |
| 🇲🇽 Mexico | `/mx/` | Spanish | 17 |
| 🇧🇷 Brazil | `/br/` | Portuguese | 18 |
| 🇳🇬 Nigeria | `/ng/` | English | 16 |
| 🇮🇳 India | `/in/` | English, Hindi | 15 |
| 🇪🇬 Egypt | `/eg/` | Arabic, English | 19 |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── FeverCalculator.tsx
│   ├── CountrySelector.tsx
│   └── LanguageToggle.tsx
├── data/
│   ├── countries.ts     # Country configuration
│   └── medications.ts   # Medication database
├── hooks/
│   └── useLanguage.ts   # Language management hook
├── lib/
│   └── utils.ts         # Utility functions
├── pages/
│   └── CountryPage.tsx  # Country-specific page
├── translations/
│   └── index.ts         # All translations
├── App.tsx              # Main app with routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🔧 Features

- **Multi-country support**: 9 countries with localized medications
- **Bilingual support**: 4 countries with language toggle
- **RTL support**: Arabic interface with proper RTL layout
- **SEO optimized**: Hreflang tags, meta tags, canonical URLs
- **Responsive design**: Works on mobile and desktop
- **Dosage calculation**: Accurate paracetamol and ibuprofen dosing

## 📱 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure custom domain: `fevercalc.com`
4. Deploy

### Environment Variables

No environment variables required for basic deployment.

## 🔗 SEO Configuration

The app automatically generates:
- Hreflang tags for all country versions
- Canonical URLs
- Open Graph meta tags
- Language-specific titles and descriptions

## 📄 License

MIT
