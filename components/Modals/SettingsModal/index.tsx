import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingsModal from "./Settings";
import Preferences from "./Preferences";
import EditProfile from "./EditProfile";

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
      <SettingsModalStack.Screen
        name="EditProfile"
        options={{
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        {() => <EditProfile />}
      </SettingsModalStack.Screen>
      <SettingsModalStack.Screen
        name="LoginOptions"
        options={{
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        {() => <EditProfile />}
      </SettingsModalStack.Screen>
      <SettingsModalStack.Screen
        name="ImportExport"
        options={{
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        {() => <EditProfile />}
      </SettingsModalStack.Screen>
      <SettingsModalStack.Screen
        name="Preferences"
        options={{
          cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
        }}
      >
        {() => <Preferences />}
      </SettingsModalStack.Screen>
    </SettingsModalStack.Navigator>
  );
};

export default SettingsModalNavigator;
