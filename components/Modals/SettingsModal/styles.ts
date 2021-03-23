import { StyleSheet } from "react-native";
import Layout from "../../../constants/Layout";

export const SettingsModalStyles = StyleSheet.create({
  container: {
    paddingVertical: Layout.window.height * 0.07,
    height: "100%",
  },
  modal: {
    backgroundColor: "rgba(23, 32, 42, 0.5)",
    padding: 10,
    alignItems: "center",
    width: "100%",
  },
  listCellText: {
    fontSize: 18,
  },
  listCellContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(23, 32, 42, 0.5)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  deleteColor: {
    color: "#E74C3C",
  },
  clearCacheColor: {
    color: "#5DADE2",
  },
  separator: {
    backgroundColor: "#85929E",
    width: "100%",
    height: 1,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  flatListContainer: {
    height: 145,
    marginBottom: 10,
  },
  movie: {
    marginRight: 5,
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
  },
});
