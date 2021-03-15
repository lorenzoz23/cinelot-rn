import { StyleSheet } from "react-native";

export const sharedFilterModalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  modal: {
    backgroundColor: "#283747",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 35,
    alignItems: "center",
    width: "100%",
    height: "75%",
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
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
  iconTextRow: {
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
  },
  homeRow: {
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
  sort: {
    backgroundColor: "#58D68D",
    borderColor: "#28B463",
  },
  reset: {
    alignItems: "center",
    backgroundColor: "rgba(229, 231, 233, .3)",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  done: {
    alignItems: "center",
    backgroundColor: "rgba(255, 24, 178, .3)",
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    margin: 10,
  },
  labelText: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "space-mono",
  },
  filtersWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  filtersHomeWrapper: {
    justifyContent: "space-between",
  },
  textInputWrapper: {
    width: "100%",
  },
  backButton: {
    borderRadius: 30,
    backgroundColor: "#2874A6",
    padding: 15,
    margin: 15,
  },
  contentContainer: {
    paddingBottom: 20,
    height: "40%",
    backgroundColor: "#2E86C1",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  tagButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 5,
    backgroundColor: "#212F3C",
    borderRadius: 30,
    borderColor: "#E5E7E9",
    borderWidth: 1,
  },
  itemText: {
    fontSize: 15,
    textAlign: "left",
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  resetText: {
    color: "#E5E7E9",
  },
  doneText: {
    color: "#FF18B2",
  },
});

export const StarRatingsStyles = StyleSheet.create({
  starRowWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
export const SorterStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    height: "90%",
  },
  switchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  sortItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
  },
});
export const GenreStyles = StyleSheet.create({});
export const MediaTagStyles = StyleSheet.create({
  mediaTagsContainer: {
    paddingHorizontal: 0,
  },
});
