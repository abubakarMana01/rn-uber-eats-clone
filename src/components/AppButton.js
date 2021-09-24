import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

import {Colors} from '../constants';

export default function AppButton({text, onPress}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 230,
    height: 47,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  text: {
    color: Colors.light,
    fontSize: 16,
  },
});
