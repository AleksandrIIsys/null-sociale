import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import { Text } from 'react-native';

function BaseInput({ label, ...props }: TextInputProps) {
  return (
    <TextInput
      activeUnderlineColor="#fff"
      label={<Text style={{ color: '#fff' }}>{label}</Text>}
      style={{ backgroundColor: '#1a1a1a' }}
      textColor="#fff"
      underlineColor="#fff"
      {...props}
    />
  );
}

export default BaseInput;