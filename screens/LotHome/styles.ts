import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    width: Layout.window.width,
    alignItems: "flex-start",
  },
  segContainer: {
    marginHorizontal: 50,
    paddingVertical: 10,
  },
  movie: {
    marginRight: 10,
    marginBottom: 10,
  },
  flatListContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
});
