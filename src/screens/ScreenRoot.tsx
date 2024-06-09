import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

interface Props {
  children: ReactNode;
}

const ScreenRoot = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar style="auto" backgroundColor="#f0f0f0" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f0f0f0",
  },
});

export default ScreenRoot;
