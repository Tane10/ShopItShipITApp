import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Card } from "react-native-elements";

class MainMenu extends Component {
  render() {
    return (
      <Card style={styles.container}>
        <View>
          <Text h1> ShopIt ShipIt</Text>
        </View>
        <Button
          title="Add Clothing Item"
          type="clear"
          icon={<Icon name="plus" size={25}  />}
        />
        <Button
          title="Check Basket"
          type="clear"
          icon={<Icon name="shopping-basket" size={25}  />}
        />
        <Button
          title="Check History"
          type="clear"
          icon={<Icon name="history" size={25}  />}
        />
        <Button
          title="Log Out"
          type="clear"
          icon={<Icon name="sign-out" size={25}  />}
        />
      </Card>
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
  MenuButton: {
    width: 300,
    height: 30,
    borderRadius: 6
  }
});

export default MainMenu;
