import React from "react";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { RootNavigator } from "./navigators";

const Navigation = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
