import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { countries, getCountryByCode } from '@/data/countries';
import { CountryPage } from '@/pages/CountryPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Saudi Arabia - Root path */}
          <Route 
            path="/" 
            element={<CountryPage country={getCountryByCode('sa')!} />} 
          />
          
          {/* Other countries with their subdirectory paths */}
          {countries.filter(c => c.code !== 'sa').map(country => (
            <Route
              key={country.code}
              path={country.path}
              element={<CountryPage country={country} />}
            />
          ))}
          
          {/* Redirect old paths or unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
