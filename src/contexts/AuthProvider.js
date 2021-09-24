import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (err) {
            console.log(err.message);
          }
        },
        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
          } catch (err) {
            console.log(err.message);
          }
        },
        signup: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (err) {
            console.log(err.message);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (err) {
            console.log(err.message);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
}
