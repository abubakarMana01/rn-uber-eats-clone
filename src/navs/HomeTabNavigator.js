import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  AccountScreen,
  FavoritesScreen,
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
          fontFamily: 'Signika-Medium',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
          tabBarLabel: 'Orders',
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="heart" size={size} color={color} />
          ),
          tabBarLabel: 'Favorites',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          tabBarLabel: 'Account',
        }}
      />
      {/* <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
          tabBarLabel: 'Browse',
        }}
      /> */}
    </Tab.Navigator>
  );
}
