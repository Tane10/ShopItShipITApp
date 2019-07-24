import React, { Component } from "react";
import {} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation" 
import Login from "./src/Screens/Login"
import MainMenu from "./src/Screens/MainMenu"
import FormInput from "./src/Screens/FormInput"
import Basket from "./src/Screens/Basket"
import Transactions from "./src/Screens/Transactions"



export default class App extends Component{
  render(){
    return(
      <AppContainer uriPrefix='/app' />
    )
  }
}


const AppStackNavigator = createStackNavigator({
  Login: Login,
  MainMenu: MainMenu,
  FormInput: FormInput,
  Basket: Basket,
  Transactions: Transactions
})

const AppContainer = createAppContainer(AppStackNavigator);