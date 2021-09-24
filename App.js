import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import {AppProvider} from './src/contexts/AppProvider';
import Navigator from './src/navs/Navigator';
import {AuthProvider} from './src/contexts/AuthProvider';

const App = () => {
  return (
    <AuthProvider>
      <AppProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" animated />
          <Navigator />
        </SafeAreaView>
      </AppProvider>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
