import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-community/google-signin';

import auth from '@react-native-firebase/auth';

import AppStackNavigator from './AppStackNavigator';
import navigationTheme from './navigationTheme';
import AuthStackNavigator from './AuthStackNavigator';
import {Loading} from '../components';
import {AuthContext} from '../contexts/AuthProvider';
import {AppContext} from '../contexts/AppProvider';

export default function Navigator() {
  const authContext = useContext(AuthContext);
  const appContext = useContext(AppContext);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    // authContext.setUser(user);
    authContext.setUser(auth().currentUser);

    !user && appContext.setUserCredentials(null);

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    GoogleSignin.configure({
      webClientId:
        '155166791496-3t7k4etivm8h3ealr8gu3qh8aethlum1.apps.googleusercontent.com',
    });
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
