import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default function App() {
  return (
    <View style={styles.container}>
      <Input placeholder="BASIC INPUT" />

      <Input
        placeholder="Username"
        leftIcon={<Icon name="user" size={24} color="black" />}
        containerStyle={styles.inputContainer}
      />

      <Input
        placeholder="Password"
        leftIcon={<Icon name="baseline-vpn_key-24px" size={24} color="black" />}
        containerStyle={styles.inputContainer}
      />

      <Button title="Submit" type="raised" />
    </View>
  );
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
  }
});
