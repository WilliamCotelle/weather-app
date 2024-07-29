import React, { createContext, useState, useContext, ReactNode } from 'react';

// Définir le type pour le contexte
type CityContextType = {
  city: string;
  setCity: (city: string) => void;
};

// Créer un contexte avec des valeurs par défaut
const CityContext = createContext<CityContextType>({
  city: 'Casteljaloux',
  setCity: () => {},
});

// Créer un hook personnalisé pour utiliser le contexte
export const useCity = () => useContext(CityContext);

// Créer un fournisseur de contexte
export const CityProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState('Casteljaloux');

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
