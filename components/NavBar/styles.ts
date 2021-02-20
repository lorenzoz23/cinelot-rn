import { StyleSheet } from "react-native";
export const NavBarStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    paddingLeft: 15,
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "center",
    width: "20%",
  },
  right: {
    paddingRight: 15,
    alignItems: "flex-end",
    height: "100%",
    justifyContent: "center",
    width: "20%",
  },
  middle: {
    flexDirection: "column",
    height: "100%",
    alignItems: "center",
  },
  headerContent: {
    width: "60%",
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
