import React, {useContext, useState} from 'react';
import {
  Alert,
  Keyboard,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {AppButton, AuthTextInput, HeaderText, Loading} from '../../components';
import {Colors} from '../../constants';
import {AuthContext} from '../../contexts/AuthProvider';

export default function SignUp({navigation}) {
  const {setUser} = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      return Alert.alert('Error', "Passwords don't match", [{text: 'Ok'}]);
    }

    try {
      if (email.trim() && password.trim() && username.trim()) {
        setIsLoading(true);
        const cred = await auth().createUserWithEmailAndPassword(
          email.trim(),
          password.trim(),
        );

        auth()
          .currentUser.updateProfile({
            displayName: username,
          })
          .then(() => {
            setUser(auth().currentUser);
          })
          .catch(error => {
            console.log('Update failed', error.message);
          });

        const db = firestore();
        db.collection('users')
          .doc(cred.user.uid)
          .set({
            email: email,
            uid: cred.user.uid,
            username: username,
          })
          .then(() => console.log('User information set', cred))
          .catch(err => console.log(err.message));

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
        {isLoading ? (
          <Loading />
        ) : (
          <ScrollView>
            <StatusBar backgroundColor={Colors.light} />
            <HeaderText
              title="Create account"
              subTitle="If you don't have an Uber eats account please create one"
            />

            <View style={styles.mainContent}>
              <AuthTextInput
                label="Username"
                placeholder="E.g, johndoe"
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                setValue={setUsername}
              />
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
                label="Password"
                placeholder=""
                keyboardType="visible-password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={password}
                setValue={setPassword}
              />
              <AuthTextInput
                label="Confirm Password"
                placeholder=""
                keyboardType="visible-password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
                value={confirmPassword}
                setValue={setConfirmPassword}
              />
              <View style={styles.buttonContainer}>
                <AppButton text="Sign up" onPress={handleSubmit} />
              </View>
            </View>

            <View style={styles.bottom}>
              <Text style={styles.question}>Already have an account?</Text>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Login Screen')}>
                <Text style={styles.signUpText}>Login!</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mainContent: {
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 30,
  },
  bottom: {
    alignSelf: 'center',
  },
  question: {
    fontSize: 18,
    color: Colors.dark,
    textAlign: 'center',
    fontFamily: 'Signika-SemiBold',
  },
  signUpText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Signika-SemiBold',
    color: Colors.darkBlue,
    textAlign: 'center',
  },
});
