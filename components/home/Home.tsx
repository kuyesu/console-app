import React from "react";
import { Text, Link, HStack, Heading, VStack, Box } from "native-base";
// import NativeBaseIcon from "../NativeBaseIcon";
import ToggleDarkMode from "../common/ColorThem";
import VoiceSpeaking from "../common/Voice";
function HomeScreen() {
  return (
    <VStack space={5} alignItems="center">
      <VoiceSpeaking />
      <Heading size="lg">Welcome to NativeBase</Heading>
      <HStack space={2} alignItems="center">
        <Text>Edit</Text>
        <Box
          _web={{
            _text: {
              fontFamily: "monospace",
              fontSize: "sm",
            },
          }}
          px={2}
          py={1}
          _dark={{ bg: "blueGray.800" }}
          _light={{ bg: "blueGray.200" }}
        >
          App.js
        </Box>
        <Text>and save to reload.</Text>
      </HStack>
      <Link href="https://docs.nativebase.io" isExternal>
        <Text color="primary.500" underline fontSize={"xl"}>
          Learn NativeBase
        </Text>
      </Link>
      <ToggleDarkMode />
    </VStack>
  );
}

export default HomeScreen;
