import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {SignInOptionFrame} from '../../components';
import {Colors} from '../../constants';

export default function ChooseAuth({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lightGrey} />
      <SignInOptionFrame provider="google" onPress={() => {}} />
      <SignInOptionFrame
        provider="email"
        onPress={() => navigation.navigate('Login Screen')}
      />

      <View style={styles.bottom}>
        <Text style={styles.question}>New to Uber Eats?</Text>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate('SignUp Screen')}>
          <Text style={styles.signUpText}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  question: {
    fontSize: 18,
    color: Colors.dark,
    fontWeight: '600',
    textAlign: 'center',
  },
  signUpText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.darkBlue,
    textAlign: 'center',
  },
});
