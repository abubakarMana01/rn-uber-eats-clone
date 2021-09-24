import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

import {Colors} from '../../constants';

export default function ({provider, onPress}) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.providerImage}
          source={
            provider === 'google'
              ? require('../../assets/images/iconGoogle.png')
              : require('../../assets/images/iconEmail.png')
          }
        />
        <Text style={styles.text}>
          {provider === 'google'
            ? 'Continue with Google'
            : 'Continue with Email'}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    height: 60,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 55,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: {width: -1, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: Colors.dark,
    marginLeft: 30,
    fontSize: 18,
    fontWeight: '600',
  },
  providerImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
