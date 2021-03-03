import { StyleSheet } from "react-native";

export const FilterModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
    backgroundColor: "#283747",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 35,
    alignItems: "center",
    width: "100%",
    maxHeight: "90%",
    minHeight: "55%",
  },
  button: {
    backgroundColor: "#E74C3C",
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginTop: 20,
  },
  headerText: {
    fontSize: 23,
    marginBottom: 20,
  },
  text: {
    textAlign: "center",
    fontFamily: "space-mono",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  search: {
    height: 50,
    width: "100%",
    backgroundColor: "#34495E",
    borderRadius: 12,
    paddingLeft: 10,
    color: "white",
    margin: 10,
  },
  sort: {
    width: "100%",
    height: 50,
    borderRadius: 12,
    backgroundColor: "#58D68D",
    borderColor: "#28B463",
    borderWidth: 2,
    paddingHorizontal: 10,
    margin: 10,
    justifyContent: "center",
  },
  filter: {
    backgroundColor: "#5DADE2",
    borderColor: "#2E86C1",
  },
  reset: {
    backgroundColor: "#1B2631",
    width: "100%",
  },
});
