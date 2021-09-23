import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  AccountScreen,
  BrowseScreen,
  GroceryScreen,
  HomeScreen,
  OrdersScreen,
} from '../screens';
import colors from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.dark,
        tabBarInactiveTintColor: colors.darkGrey,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: colors.lightGrey,
        },
      }}>
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Browse Screen"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
          tabBarLabel: 'Browse',
        }}
      />
      <Tab.Screen
        name="Grocery Screen"
        component={GroceryScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: 'Grocery',
        }}
      />
      <Tab.Screen
        name="Orders Screen"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
          tabBarLabel: 'Orders',
        }}
      />
      <Tab.Screen
        name="Account Screen"
        component={AccountScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}
