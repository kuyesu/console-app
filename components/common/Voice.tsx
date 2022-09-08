import React from "react";
import { MotiView } from "moti";
import { View } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Easing } from "react-native-reanimated";

const _color = "#06B6D4";
const _size = 50;

export function Voice() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={(styles.dot, styles.center)}></View>
      <Feather name="mic" size={22} color="#154d56" />
    </View>
  );
}

function VoiceSpeaking() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={(styles.dot, styles.center)}></View>
      {[...Array(7).keys()].map((index) => {
        return (
          <MotiView
            from={{ opacity: 1, scale: 2 }}
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
      <Feather name="mic" size={32} color="#fff" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    position: "relative",
    top: -5,
    left: 7,
  },
});

export default VoiceSpeaking;
