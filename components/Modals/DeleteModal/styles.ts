import { StyleSheet } from "react-native";

export const DeleteModalStyles = StyleSheet.create({
  modal: {
    backgroundColor: "transparent",
    borderRadius: 30,
    padding: 35,
    alignItems: "center",
    width: "80%",
  },
  button: {
    borderRadius: 15,
    padding: 10,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#E74C3C",
    margin: 20,
  },
  headerText: {
    fontSize: 23,
    textAlign: "center",
  },
  removeFilmText: {
    fontSize: 18,
    textAlign: "center",
  },
});
