import { StyleSheet } from "react-native";
import Layout from "../../../constants/Layout";

export const TagModalStyles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  contentContainer: {
    maxHeight: "85%",
  },
  headerContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  flatListContainer: {
    width: Layout.window.width,
    marginBottom: 20,
  },
  tagContainer: {
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: "#CACFD2",
    borderWidth: 1,
  },
  innerTagContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreButtonWrapper: {
    marginRight: 10,
  },
  textInput: {
    width: "75%",
    height: 30,
    backgroundColor: "#1A5276",
    borderRadius: 10,
    paddingHorizontal: 10,
    color: "white",
    marginTop: 10,
  },
  tagNameText: {
    color: "#85C1E9",
    textAlign: "center",
    fontSize: 25,
  },
  ownershipNumberWrapper: {
    backgroundColor: "#AF7AC5",
    paddingHorizontal: 8,
    borderRadius: 30,
    marginLeft: 10,
  },
  ownershipNumberText: {
    fontSize: 18,
  },
  headerText: {
    textAlign: "center",
    fontSize: 35,
  },
});
