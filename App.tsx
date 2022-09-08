import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import "react-native-reanimated";
import HomeScreen from "./components/home/HomeScreen";
import Dashboard from "./components/home/Dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigatorApp from "./components/navigation/Navigator";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      {/* <HomeScreen /> */}
      <NavigatorApp />
    </NativeBaseProvider>
  );
}
