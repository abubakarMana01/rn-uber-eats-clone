import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../constants';

export default function HomeHeaderButton({text, activeTab, setActiveTab}) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[
        styles.container,
        {backgroundColor: activeTab === text ? Colors.dark : Colors.light},
      ]}
      onPress={() => setActiveTab(text)}>
      <Text
        style={[
          styles.text,
          {color: activeTab === text ? Colors.light : Colors.dark},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    // fontWeight: '700',
    fontSize: 14,
    fontFamily: 'Signika-Bold',
  },
});
