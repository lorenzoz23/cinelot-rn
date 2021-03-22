import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsModal from "./Settings";

const SettingsModalStack = createStackNavigator();

const SettingsModalNavigator = () => {
  return (
    <SettingsModalStack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <SettingsModalStack.Screen name="Settings">
        {() => <SettingsModal />}
      </SettingsModalStack.Screen>
    </SettingsModalStack.Navigator>
  );
};

export default SettingsModalNavigator;
