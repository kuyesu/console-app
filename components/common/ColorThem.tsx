import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  extendTheme,
  Icon,
} from "native-base";

import { Platform, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { spin } from "./Spin";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Icon as={Ionicons} name="settings" style={styles.icon} size="8" />
      <Text>Dark</Text>

      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "relative",
    top: -370,
    left: 195,
    color: "rgb(6, 182, 212)",
    zIndex: 1,
    // animation: "rotate 6s infinite linear",
  },
});

export default ToggleDarkMode;
