import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";


class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Username"
          leftIcon={<Icon name="user" size={24} color="black" />}
          containerStyle={styles.inputContainer}
        />

        <Input
          placeholder="Password"
          leftIcon={<Icon name="key" size={24} color="black" />}
          containerStyle={styles.inputContainer}
        />

        <Button
          title="Submit"
          type="solid"
          raised={true}
          containerStyle={styles.SubmitButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 6,
    marginBottom: 10,
    height: 56
  },
  SubmitButton: {
    width: 200,
    height: 30,
    borderRadius: 6
  }
});

 export default Login;
