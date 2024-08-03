import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  fluid?: boolean;
}

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  fluid,
  ...props
}: CustomInputProps) => {
  return (
    <View style={styles.input_wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          {...props}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input_wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
  },
});
