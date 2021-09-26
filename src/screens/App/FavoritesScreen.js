import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Grocery screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
