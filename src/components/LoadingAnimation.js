import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function LoadingAnimation() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/bouncing-loading-circle.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
