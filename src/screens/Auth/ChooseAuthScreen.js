import React, {useContext, useState} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-community/google-signin';

import {Loading, SignInOptionFrame} from '../../components';
import {Colors} from '../../constants';

export default function ChooseAuth({navigation}) {
  const [isLoading, setIsLoading] = useState(false);

  const googleLogin = async () => {
    try {
      setIsLoading(true);
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const cred = await auth().signInWithCredential(googleCredential);

      const db = firestore();

      cred.additionalUserInfo.isNewUser &&
        db
          .collection('users')
          .doc(cred.user.uid)
          .set({
            email: cred.user.email,
            uid: cred.user.uid,
            username: cred.user.displayName,
          })
          .then(() => {
            console.log('User information set');
          })
          .catch(err => console.log(err.message));

      return setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lightGrey} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../assets/images/logo.png')}
            />
          </View>

          <View>
            {Platform.OS === 'android' && (
              <SignInOptionFrame provider="google" onPress={googleLogin} />
            )}
            <SignInOptionFrame
              provider="email"
              onPress={() => navigation.navigate('Login Screen')}
            />
          </View>

          <View style={styles.bottom}>
            <Text style={styles.question}>New to Uber Eats?</Text>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('SignUp Screen')}>
              <Text style={styles.signUpText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  imageContainer: {
    marginVertical: Dimensions.get('window').height < 700 ? 60 : 100,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 100,
  },
  bottom: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
  },
  question: {
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'Signika-SemiBold',
    textAlign: 'center',
  },
  signUpText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Signika-Medium',
    color: Colors.darkBlue,
    textAlign: 'center',
  },
});
