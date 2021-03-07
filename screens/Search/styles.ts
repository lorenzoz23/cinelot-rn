import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 10,
  },
  searchBox: {
    height: 40,
    width: "80%",
    backgroundColor: "#34495E",
    borderRadius: 15,
    paddingLeft: 10,
    color: "white",
  },
  searchBoxWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  cancel: {
    fontSize: 18,
    textAlign: "center",
  },
  cancelWrapper: {
    width: "20%",
    paddingLeft: 5,
  },
  segContainer: {
    paddingVertical: 10,
  },
});
