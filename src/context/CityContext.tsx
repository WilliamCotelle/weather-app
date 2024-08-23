import React, { createContext, useState, useContext, ReactNode } from 'react';

// Type pour le contexte
type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

// Contexte avec des valeurs par défaut
const CityContext = createContext<CityContextType>({
  city: 'Casteljaloux',
  setCity: () => {},
});

// Hook personnalisé pour utiliser le contexte
export const useCity = () => useContext(CityContext);

// Fournisseur de contexte
export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState('Casteljaloux');

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
