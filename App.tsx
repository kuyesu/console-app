import React from "react";
import { Center, NativeBaseProvider } from "native-base";
import "react-native-reanimated";
import HomeScreen from "./components/home/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <HomeScreen />
      </Center>
    </NativeBaseProvider>
  );
}
