import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Card, Header, Image } from "react-native-elements";

class FormInput extends Component {
  render() {
    return (
      <View>
        <Header
        leftComponent={{icon=<Icon name="arrow-left" size={25}/>}}
          centerComponent={{ text: "Add Item Form", style: { color: "#fff" } }}
        />
        <Card>
          <Card>
            <Image
              // source={{ uri: image }}
              style={{
                width: 200,
                height: 200,
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center"
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </Card>
          <Input placeholder="Item Name" errorMessage="Required Field" />
          <Input placeholder="Item Price" errorMessage="Required Field" />
          <Button
            title="Add Item"
            type="solid"
            icon={<Icon name="plus" size={25} />}
            raised={true}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  MenuButton: {
    width: 300,
    height: 30,
    borderRadius: 6
  }
});

export default FormInput;
