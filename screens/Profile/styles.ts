import { StyleSheet } from "react-native";

export const ProfileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  scrollContent: {
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",
  },
  avatar: {
    alignItems: "center",
  },
  signOut: {
    backgroundColor: "#17202A",
    padding: 10,
    borderRadius: 30,
    width: "50%",
    alignItems: "center",
    marginTop: 20,
  },
  signOutText: {
    color: "red",
    fontSize: 18,
  },
  headerContainer: {
    flexDirection: "column",
  },
  movie: {
    marginRight: 10,
  },
  flatListContainer: {
    marginVertical: 10,
    maxHeight: 145,
  },
  prizedContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  headerText: {
    fontSize: 20,
  },
  prizedText: {
    fontSize: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#17202A",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  rowContentContainer: {
    width: "100%",
  },
  middle: {
    marginVertical: 10,
  },
});
