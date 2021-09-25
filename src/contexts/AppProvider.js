import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export function AppProvider({children}) {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [city, setCity] = useState('San Francisco');
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        city,
        setCity,
        selectedFoods,
        setSelectedFoods,
        cartTotal,
        setCartTotal,
        showCart,
        setShowCart,
      }}>
      {children}
    </AppContext.Provider>
  );
}
