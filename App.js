
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KKR LUDO</Text>
      <Text style={styles.subtitle}>
        Offline Ludo Game
      </Text>
      <Text style={styles.players}>
        2 - 4 Players
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101827",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#F4BD32"
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    marginTop: 15
  },
  players: {
    color: "white",
    marginTop: 20
  }
});
