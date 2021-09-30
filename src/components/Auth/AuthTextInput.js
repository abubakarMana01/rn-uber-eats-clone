import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {Colors} from '../../constants';

export default function AuthTextInput({
  placeholder,
  keyboardType,
  autoCapitalize = true,
  autoCorrect = false,
  secureTextEntry = false,
  label,
  value,
  setValue,
}) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <SimpleLineIcons name="lock" size={20} color={Colors.dark} />
        <TextInput
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    lineHeight: 19,
    flex: 1,
    paddingLeft: 15,
    fontFamily: 'Signika-Regular',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontFamily: 'Signika-SemiBold',
  },
});
