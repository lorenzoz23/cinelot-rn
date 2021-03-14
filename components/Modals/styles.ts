import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

export const sharedModalStyles = StyleSheet.create({
  blurContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  flex: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: "transparent",
    borderRadius: 50,
    padding: 35,
    alignItems: "center",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: Layout.window.width,
    alignItems: "center",
  },
});
