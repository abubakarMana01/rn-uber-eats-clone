import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './AppStackNavigator';
import navigationTheme from './navigationTheme';

export default function Navigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
