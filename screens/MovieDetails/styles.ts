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
    paddingTop: 45,
    paddingBottom: 30,
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
  movieHeaderContent: {
    marginBottom: 10,
  },
  scrollableContentWrapper: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  movieDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  movieDetailsText: {
    fontSize: 18,
    textShadowRadius: 3,
    textShadowOffset: { width: 3, height: 3 },
    textShadowColor: "black",
  },
  separator: {
    backgroundColor: "white",
    width: "90%",
    height: 1,
    alignItems: "center",
    marginBottom: 10,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  plot: {
    fontSize: 20,
  },
  middleDetail: {
    paddingHorizontal: 10,
  },
  tagButton: {
    backgroundColor: "#ECF0F1",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  tagButtonText: {
    fontSize: 18,
    paddingLeft: 5,
    color: "#283747",
  },
  bottomButtonContainer: {
    paddingVertical: 10,
  },
  backButtonText: {
    fontSize: 25,
    paddingLeft: 5,
    textShadowRadius: 3,
    textShadowOffset: { width: 3, height: 3 },
    textShadowColor: "black",
  },
  movieDetailsTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});
