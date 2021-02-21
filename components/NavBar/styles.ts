import { StyleSheet } from "react-native";
export const NavBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    paddingLeft: 10,
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "center",
    width: "25%",
  },
  right: {
    paddingRight: 10,
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "center",
    width: "25%",
  },
  middle: {
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  headerContent: {
    width: "50%",
    borderRadius: 50,
    backgroundColor: "#283747",
  },
  headerContentTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "space-mono",
    color: "white",
  },
  text: {
    textAlign: "center",
    fontFamily: "space-mono",
    color: "white",
  },
});
