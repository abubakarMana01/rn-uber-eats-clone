import React from 'react';
import {View, StyleSheet} from 'react-native';

import {
  AboutRestaurant,
  MenuItems,
  ViewCart,
  ViewCartModal,
} from '../../components';

export default function RestautantDetails({route, navigation}) {
  return (
    <View style={styles.container}>
      <AboutRestaurant data={route.params.item} />
      <MenuItems data={route.params.item} />
      <ViewCart data={route.params.item} />
      <ViewCartModal data={route.params.item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
