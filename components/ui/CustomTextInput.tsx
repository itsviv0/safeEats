import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { TextInputProps } from "../../types";

const CustomTextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline
      numberOfLines={4}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default CustomTextInput;
