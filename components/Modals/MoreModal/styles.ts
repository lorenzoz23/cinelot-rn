import { StyleSheet } from "react-native";

export const MoreModalStyles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    maxHeight: "75%",
  },
  button: {
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 15,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#E74C3C",
    margin: 20,
  },
  headerText: {
    fontSize: 45,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
  },
  userStarRatings: {
    flexDirection: "row",
    paddingTop: 5,
  },
  userTagsContainer: {
    borderRadius: 30,
    backgroundColor: "#2471A3",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  userFollowerContainer: {
    marginHorizontal: 15,
    alignItems: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  watchedContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  watchedText: {
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 150,
    height: 225,
    borderRadius: 10,
    borderColor: "#CACFD2",
    borderWidth: 1,
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  innerContentContainer: {
    alignItems: "center",
    marginVertical: 20,
    flex: 1,
  },
});
