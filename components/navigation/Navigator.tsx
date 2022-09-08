import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../home/HomeScreen";
import Dashboard from "../home/Dashboard";

const { Navigator, Screen } = createNativeStackNavigator();

function NavigatorApp() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="HomeScreen"
      >
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </NavigationContainer>
  );
}

export default NavigatorApp;
