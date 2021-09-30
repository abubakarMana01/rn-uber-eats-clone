import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function InputErrorMessage({error}) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    marginBottom: 20,
  },
  error: {
    color: 'red',
  },
});
