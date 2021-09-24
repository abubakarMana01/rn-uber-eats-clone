import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppProvider({children}) {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('Los Angeles');

  return (
    <AppContext.Provider value={{activeTab, setActiveTab, city, setCity}}>
      {children}
    </AppContext.Provider>
  );
}
