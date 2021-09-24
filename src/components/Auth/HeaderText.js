import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants';

export default function HeaderText({title, subTitle}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detailedText}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  title: {
    fontSize: 36,
    // fontWeight: '600',
    color: Colors.darkBlue,
    fontFamily: 'Signika-Bold',
  },
  detailedText: {
    fontSize: 14,
    maxWidth: 310,
    marginTop: 10,
    fontWeight: '600',
  },
});
