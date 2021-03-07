import { StyleSheet } from "react-native";
import Layout from "../../constants/Layout";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  segContainer: {
    marginHorizontal: 50,
    paddingVertical: 10,
  },
  gradientContainer: {
    flex: 1,
    width: Layout.window.width,
    alignItems: "flex-start",
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
