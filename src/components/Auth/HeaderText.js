import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from '../../constants';

export default function HeaderText({title, subTitle}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {subTitle && <Text style={styles.detailedText}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
  },
  title: {
    fontSize: 36,
    color: Colors.light,
    fontFamily: 'Signika-SemiBold',
  },
  detailedText: {
    fontSize: 14,
    maxWidth: 310,
    marginTop: 10,
    fontFamily: 'Signika-Regular',
    color: Colors.light,
  },
});
