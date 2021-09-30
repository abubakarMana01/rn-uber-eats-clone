import React, {useContext, useState} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {AppButton, AuthTextInput, Loading} from '../../components';
import {Colors} from '../../constants';
import {AuthContext} from '../../contexts/AuthProvider';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function SignUp({navigation}) {
  const {setUser} = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const signUpSchema = Yup.object({
    username: Yup.string().required().min(3).max(255).trim(),
    email: Yup.string().required().min(3).email().trim(),
    password: Yup.string().required().min(6).max(255),
    confirmPassword: Yup.string().required().min(6).max(255),
  });

  const handleUserSubmit = async (
    username,
    email,
    password,
    confirmPassword,
  ) => {
    if (password !== confirmPassword) {
      return Alert.alert('Error', "Passwords don't match", [{text: 'Ok'}]);
    }

    try {
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
        .catch(err => console.log(err.message));

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View style={styles.container}>
            <StatusBar backgroundColor={Colors.green} animated />
            <View style={styles.topContainer}>
              <Text style={styles.headerTitle}>Create account</Text>
            </View>

            <Formik
              initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              onSubmit={values => {
                handleUserSubmit(
                  values.username,
                  values.email,
                  values.password,
                  values.confirmPassword,
                );
              }}
              validationSchema={signUpSchema}>
              {({handleSubmit, handleChange, values}) => (
                <View style={styles.mainContent}>
                  <AuthTextInput
                    label="Username"
                    placeholder="E.g, johndoe"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // value={username}
                    // setValue={setUsername}
                    value={values.username}
                    setValue={handleChange('username')}
                  />
                  <AuthTextInput
                    label="Email"
                    placeholder="E.g, someone@example.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // value={email}
                    // setValue={setEmail}
                    value={values.email}
                    setValue={handleChange('email')}
                  />
                  <AuthTextInput
                    label="Password"
                    placeholder=""
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    // value={password}
                    // setValue={setPassword}
                    value={values.password}
                    setValue={handleChange('password')}
                  />
                  <AuthTextInput
                    label="Confirm Password"
                    placeholder=""
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    // value={confirmPassword}
                    // setValue={setConfirmPassword
                    value={values.confirmPassword}
                    setValue={handleChange('confirmPassword')}
                  />

                  <View style={styles.bottom}>
                    <View style={styles.buttonContainer}>
                      <AppButton text="Sign up" onPress={handleSubmit} />
                    </View>
                    <Text style={styles.question}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => navigation.navigate('Login Screen')}>
                      <Text style={styles.signUpText}>Login!</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
  },
  topContainer: {
    justifyContent: 'center',
    minHeight: 200,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 36,
    color: Colors.light,
    fontFamily: 'Signika-SemiBold',
  },
  mainContent: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    backgroundColor: Colors.light,
    paddingHorizontal: 25,
  },
  textInputContainer: {
    paddingHorizontal: 25,
  },
  buttonContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  bottom: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
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
    color: Colors.green,
    textAlign: 'center',
  },
});
