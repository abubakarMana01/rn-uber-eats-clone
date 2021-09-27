import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import {CheckoutScreen, RestaurantDetails, ViewCartScreen} from '../screens';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={HomeTabNavigator} />
      <Stack.Screen name="Restaurant Details" component={RestaurantDetails} />
      <Stack.Screen
        name="View Cart"
        component={ViewCartScreen}
        options={{presentation: 'transparentModal'}}
      />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
