import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({
  title,
  keyboardType,
  autoComplete,
  secureTextEntry = false,
  value,
  setValue,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoCompleteType={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        placeholder={`Enter ${title}`}
        placeholderTextColor="#af9f85"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  inputBox: {
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 10,
    color: "#333",
    borderWidth: 1,
    borderColor: "#af9f85",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default InputBox;
