import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AppStackNavigator from './AppStackNavigator';
import navigationTheme from './navigationTheme';
import AuthStackNavigator from './AuthStackNavigator';
import {Loading} from '../components';
import {AuthContext} from '../contexts/AuthProvider';

export default function Navigator() {
  const authContext = useContext(AuthContext);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    authContext.setUser(user);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return <Loading />;
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      {authContext.user ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}
