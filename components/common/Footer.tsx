import React from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

interface DahsbordProps {
  navigation: any;
}
function Footer(props: DahsbordProps) {
  const dashboard = () => {
    props.navigation.navigate("Dashboard");
  };
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Box
        flex={1}
        safeAreaTop
        width="100%"
        alignSelf="center"
        style={styles.footer}
      >
        <HStack style={styles.col} alignItems="center" safeAreaBottom>
          <Pressable
            // cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => setSelected(0)}
            onPressIn={dashboard}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                style={styles.icon}
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                style={styles.icon}
                size="sm"
              />
              <Text color="white" fontSize="12">
                Search
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "doctor" : "doctor"}
                  />
                }
                style={styles.icon}
                size="sm"
              />
              <Text color="white" fontSize="12">
                History
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(3)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                style={styles.icon}
                size="sm"
              />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
  },
  col: {
    backgroundColor: "#06B6D4",
  },
  icon: {
    color: "white",
    fontSize: 18,
  },
});

export default Footer;
