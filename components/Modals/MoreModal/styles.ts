import { StyleSheet } from "react-native";

export const MoreModalStyles = StyleSheet.create({
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
  button: {
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#E74C3C",
    margin: 20,
  },
  headerText: {
    fontSize: 45,
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
