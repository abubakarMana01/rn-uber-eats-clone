import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeTabNavigator from './HomeTabNavigator';
import {RestaurantDetails} from '../screens';

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTabNavigator} />
      <Stack.Screen
        name="Restaurant Details"
        component={RestaurantDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
