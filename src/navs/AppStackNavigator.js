import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import {CheckoutScreen, RestaurantDetails} from '../screens';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{presentation: 'modal'}}
      />
    </Stack.Navigator>
  );
}
