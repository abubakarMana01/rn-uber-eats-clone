import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  AccountScreen,
  FavoritesScreen,
  HomeScreen,
  OrdersScreen,
} from '../screens';
import colors from '../constants/colors';
import {Text, View} from 'react-native';
import {Colors} from '../constants';

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
          headerShown: true,
          headerTitle: () => (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="truck-delivery"
                size={27}
                color="green"
              />
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginLeft: 5,
                  fontFamily: 'Signika-SemiBold',
                  fontSize: 24,
                }}>
                Orders
              </Text>
            </View>
          ),
          headerStyle: {
            elevation: 7,
            shadowColor: Colors.darkGrey,
          },
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
          headerShown: true,
          headerTitleAlign: 'left',
          headerStyle: {
            elevation: 7,
            shadowColor: Colors.darkGrey,
          },
          headerTitle: () => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <AntDesign name="heart" size={23} color="#fc032c" />
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginLeft: 10,
                  fontFamily: 'Signika-SemiBold',
                  fontSize: 24,
                }}>
                Favorite restaurants
              </Text>
            </View>
          ),
          tabBarIcon: ({size, color}) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
          tabBarLabel: 'Favorites',
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            // <Ionicons name="person" size={size} color={color} />
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={27}
              color={color}
            />
          ),
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
}
