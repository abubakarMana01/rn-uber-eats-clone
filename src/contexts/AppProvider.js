import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppProvider({children}) {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('San Francisco');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [userCredentials, setUserCredentials] = useState(null);

  return (
    <AppContext.Provider
      value={{
        userCredentials,
        setUserCredentials,
        activeTab,
        setActiveTab,
        city,
        setCity,
        selectedFoods,
        setSelectedFoods,
        cartTotal,
        setCartTotal,
      }}>
      {children}
    </AppContext.Provider>
  );
}
