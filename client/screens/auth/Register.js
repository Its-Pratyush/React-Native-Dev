import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Forms/InputBox";
import SubmitButton from "../../components/Forms/SubmitButton";
import ForgetPassword from "../../components/Forms/ForgetPassword";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please fill all fields");
        setLoading(false);
        return;
      }
      console.log("registering data ==> ", { name, email, password });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={styles.formContainer}>
        <InputBox title={"Name"} value={name} setValue={setName} />
        <InputBox
          title={"Email"}
          keyboardType="email-address"
          autoCompleteType="email"
          value={email}
          setValue={setEmail}
        />
        <InputBox
          title={"Password"}
          secureTextEntry={true}
          autoCompleteType="password"
          value={password}
          setValue={setPassword}
        />
      </View>
      <SubmitButton
        btnTitle="Register"
        loading={loading}
        handleSubmit={handleSubmit}
      />
      <ForgetPassword />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#202020",
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
    marginTop: 0,
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Transparent form container
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
});

export default Register;
