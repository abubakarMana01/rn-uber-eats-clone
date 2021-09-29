import React, {useState} from 'react';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import {AppButton, AuthTextInput, HeaderText, Loading} from '../../components';
import {Colors} from '../../constants';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (email.trim() && password.trim()) {
        setIsLoading(true);
        await auth().signInWithEmailAndPassword(email.trim(), password.trim());
        setIsLoading(false);
      } else {
        Alert.alert('Error', 'Please fill all inputs', [{text: 'Ok'}]);
      }
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.green} />
        <View style={styles.topContainer}>
          <HeaderText
            title="Welcome!"
            // subTitle="If you already have an Uber eats account please log in!"
          />
        </View>
        <View style={styles.authContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{flex: 1}}>
              <View style={styles.mainContent}>
                <AuthTextInput
                  label="Email"
                  placeholder="someone@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  setValue={setEmail}
                />
                <AuthTextInput
                  placeholder=""
                  keyboardType="visible-password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  label="Password"
                  value={password}
                  setValue={setPassword}
                />
              </View>

              <View style={styles.bottom}>
                <View style={styles.buttonContainer}>
                  <AppButton text="Login" onPress={handleSubmit} />
                </View>
                <Text style={styles.question}>Don't have an account?</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate('SignUp Screen')}>
                  <Text style={styles.signUpText}>Create one!</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  topContainer: {
    flex: 0.3,
    justifyContent: 'center',
  },
  authContainer: {
    flex: 0.7,
    backgroundColor: Colors.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  mainContent: {
    paddingHorizontal: 30,
    marginTop: 45,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
  bottom: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'Signika-SemiBold',
    textAlign: 'center',
    marginTop: 20,
  },
  signUpText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Signika-SemiBold',
    color: Colors.green,
    textAlign: 'center',
  },
});
