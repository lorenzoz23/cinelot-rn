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
    flex: 1,
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
  textInput: {
    height: 50,
    color: "white",
    fontSize: 18,
    fontFamily: "space-mono",
    borderBottomColor: "#85929E",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  avatar: {
    alignItems: "center",
  },
  avatarText: {
    color: "#85929E",
    paddingTop: 5,
  },
  secondaryListCellItem: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },
  switchLabelContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  importButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3498DB",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
    marginBottom: 10,
  },
  exportButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#9B59B6",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    justifyContent: "center",
  },
  deleteButton: {
    backgroundColor: "#E74C3C",
    padding: 20,
    borderRadius: 30,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  importExportContainer: {},
  deleteAccountContainer: {
    alignContent: "center",
    flexDirection: "column",
    width: "100%",
  },
  deleteAccountTextHeader: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  centeredText: {
    textAlign: "center",
    marginBottom: 5,
  },
});
