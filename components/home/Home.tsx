import React from "react";
import {
  Text,
  Link,
  HStack,
  Heading,
  VStack,
  Box,
  Stack,
  Center,
  Container,
  View,
  ScrollView,
} from "native-base";
// import NativeBaseIcon from "../NativeBaseIcon";
import ToggleDarkMode from "../common/ColorThem";
import VoiceSpeaking from "../common/Voice";
import Footer from "../common/Footer";
import { StyleSheet } from "react-native";
function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.home} flexDirection="column">
        <HStack>
          <VStack space={5} alignItems="center">
            <Stack direction="row" mb="2.5" mt="1.5" space={3}>
              <Center
                size="16"
                _text={{
                  // color: "warmGray.50",
                  color: "primary.400",
                  fontWeight: "medium",
                }}
                shadow={"3"}
              >
                <VoiceSpeaking />
              </Center>
              {/* footer goes here */}
            </Stack>
            {/* <ToggleDarkMode /> */}
          </VStack>
        </HStack>
      </View>
      {/* <ScrollView>main</ScrollView> */}
      <View style={styles.footer} flexDirection="column">
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxHeight: 800,
    maxWidth: 400,
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    maxHeight: 60,
    minWidth: 360,
  },
});
export default HomeScreen;
