import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ForgetPassword = () => {
  return (
    <View>
      <Text style={styles.signupText}>
        Don't have an Account?{" "}
        <Text style={styles.inlineText}>Sign Up Here</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  signupText: {
    color: "#ffffff",
    textAlign: "center",
  },
  inlineText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
export default ForgetPassword;
