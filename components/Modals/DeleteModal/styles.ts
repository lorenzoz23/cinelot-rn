import { StyleSheet } from "react-native";

export const DeleteModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  blurContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
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
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  removeFilmText: {
    fontSize: 18,
    textAlign: "center",
  },
});
