import React from "react";
import { MotiView } from "moti";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";

const _color = "#6182d2";
const _size = 100;

export function Voice() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={(styles.dot, styles.center)}></View>
      <Feather name="mic" size={32} color="#fff" />
    </View>
  );
}

function VoiceSpeaking() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={(styles.dot, styles.center)}></View>
      {[...Array(3).keys()].map((index) => {
        return (
          <MotiView
            from={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: "timing",
              duration: 2000,
              easing: Easing.out(Easing.ease),
              delay: index * 400,
              repeatReverse: false,
              loop: true,
            }}
            key={index}
            style={[StyleSheet.absoluteFillObject, styles.dot]}
          />
        );
      })}
      <Feather name="mic" size={32} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgoundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default VoiceSpeaking;
