import React, {useState} from 'react';
import {
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';

import {
  AppButton,
  AuthTextInput,
  Loading,
  InputErrorMessage,
} from '../../components';
import {Colors} from '../../constants';

export default function Login({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const loginSchema = Yup.object({
    email: Yup.string().required().min(3).email().trim(),
    password: Yup.string().required().min(6).max(255),
  });

  const handleUserSubmit = async (email, password) => {
    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(email.trim(), password.trim());
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.green} />
        <View style={styles.topContainer}>
          <Text style={styles.headerTitle}>Welcome back!</Text>
        </View>
        <View style={styles.authContainer}>
          {isLoading ? (
            <Loading />
          ) : (
            <Formik
              initialValues={{email: '', password: ''}}
              onSubmit={(values, actions) => {
                handleUserSubmit(values.email, values.password);
              }}
              validationSchema={loginSchema}>
              {({values, handleChange, handleSubmit, errors}) => (
                <View style={styles.formikContainer}>
                  <View style={styles.mainContent}>
                    <AuthTextInput
                      label="Email"
                      placeholder="E.g, someone@example.com"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      // value={email}
                      value={values.email}
                      // setValue={setEmail}
                      setValue={handleChange('email')}
                    />
                    <InputErrorMessage error={errors.email} />

                    <AuthTextInput
                      placeholder=""
                      autoCapitalize="none"
                      autoCorrect={false}
                      secureTextEntry={true}
                      label="Password"
                      // value={password}
                      // setValue={setPassword}
                      value={values.password}
                      setValue={handleChange('password')}
                    />
                    <InputErrorMessage error={errors.password} />
                  </View>
                  <View style={styles.bottom}>
                    <View style={styles.buttonContainer}>
                      <AppButton
                        text="Login"
                        // onPress={handleSubmit}
                        onPress={handleSubmit}
                      />
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
            </Formik>
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
    flex: Dimensions.get('window').height < 700 ? 0.3 : 0.4,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 36,
    color: Colors.light,
    fontFamily: 'Signika-SemiBold',
  },
  authContainer: {
    flex: Dimensions.get('window').height < 700 ? 0.7 : 0.6,
    backgroundColor: Colors.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  formikContainer: {
    flex: 1,
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height < 700 ? 0 : 50,
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
