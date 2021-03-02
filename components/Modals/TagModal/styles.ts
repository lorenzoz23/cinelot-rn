import { StyleSheet } from "react-native";

export const TagModalStyles = StyleSheet.create({
  container: {
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
  headerText: {
    fontSize: 35,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
