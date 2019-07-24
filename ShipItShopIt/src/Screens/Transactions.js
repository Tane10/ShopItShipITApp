import { ListItem } from "react-native-elements";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card , Header} from "react-native-elements";

const list = [
  {
    name: "Vest",
    subtitle: "Vice President"
  },
  {
    name: "Hat",
    subtitle: "Vice Chairman"
  },
  {
    name: "Jumper",
    subtitle: "Vice Chairman"
  },
];
class Basket extends Component {
  render() {
    return (
      <View>
        <Header
          centerComponent={{ text: "Transaction History", style: { color: "#fff" } }}
        />
        <Card>
          {list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
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

export default Basket;
