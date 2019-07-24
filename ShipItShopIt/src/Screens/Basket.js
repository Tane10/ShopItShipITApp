import { ListItem } from "react-native-elements";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Card, Header } from "react-native-elements";

const list = [
  {
    name: "Amy Farha",
    subtitle: "Vice President"
  },
  {
    name: "Chris Jackson",
    subtitle: "Vice Chairman"
  },
  {
    name: "jef jef",
    subtitle: "Vice Chairman"
  },
  {
    name: "gt git",
    subtitle: "Vice Chairman"
  },
  {
    name: "hit Jackson",
    subtitle: "Vice Chairman"
  },
  {
    name: "mug Jackson",
    subtitle: "Vice Chairman"
  }
];
class Basket extends Component {
  render() {
    return (
      <View>
          <Header
          centerComponent={{ text: "Basket", style: { color: "#fff" } }}
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
