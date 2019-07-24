import React, { Component } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Input,
  Button,
  Card,
  Header,
  Image,
  Overlay
} from "react-native-elements";

class FormInput extends Component {
  constructor() {
    super();
    this.state = {
      showMe: false
    };
  }
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "Add Item Form", style: { color: "#fff" } }}
        />
        <Overlay isVisible={this.state.showMe}>
          <Text>
            If all the information is correct please select Confirm to add item
            or Cancle to go back and edit items info
          </Text>
          <Button
            title="Confirm"
            style="solid"
            icon={<Icon name="check-circle" size={25} />}
            onPress={() => {
              this.props.navigation.navigate("MainMenu");
            }}
          />
          <Button
            title="Cancle "
            style="solid"
            icon={<Icon name="times-circle" size={25} />}
            onPress={() => this.setState({ showMe: false })}
          />
        </Overlay>

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
            onPress={() => this.setState({ showMe: true })}
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
