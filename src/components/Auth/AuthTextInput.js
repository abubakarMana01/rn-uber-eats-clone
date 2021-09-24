import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function AuthTextInput({
  placeholder,
  keyboardType = 'default',
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
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
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
    borderColor: '#870093',
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    fontSize: 16,
    lineHeight: 19,
    flex: 1,
    paddingLeft: 15,
    fontFamily: 'Signika-Regular',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily: 'Signika-SemiBold',
  },
});
