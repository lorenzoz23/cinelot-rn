import { StyleSheet } from "react-native";

export const MovieDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
  },
  contentContainer: {
    backgroundColor: "#0045AF",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.8,
    padding: 5,
    paddingHorizontal: 15,
  },
  nameHeader: {
    fontSize: 35,
    color: "white",
    textShadowRadius: 3,
    textShadowOffset: { width: 3, height: 3 },
    textShadowColor: "black",
  },
  scrollContainer: {
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#E74C3C",
    borderRadius: 30,
    padding: 15,
  },
  moreButton: {
    borderRadius: 30,
    padding: 5,
    backgroundColor: "white",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
  },
});
