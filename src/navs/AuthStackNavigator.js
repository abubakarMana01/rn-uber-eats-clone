import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ChooseAuth, Login, Onboarding, SignUp} from '../screens';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="ChooseAuth Screen" component={ChooseAuth} />
      <AuthStack.Screen
        name="Login Screen"
        component={Login}
        options={{presentation: 'modal'}}
      />
      <AuthStack.Screen
        name="SignUp Screen"
        component={SignUp}
        options={{presentation: 'modal'}}
      />
    </AuthStack.Navigator>
  );
}
