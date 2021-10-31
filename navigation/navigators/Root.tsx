import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/ParamLists";
import FilterModalNavigator from "../../components/Modals/FilterModal";
import { TransitionPresets } from "@react-navigation/stack";
import SettingsModalNavigator from "../../components/Modals/SettingsModal";
import { Layout } from "../../constants";
import { MainNavigator } from "./../navigators/Main";

const RootStack = createStackNavigator<RootStackParamList>();
export const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal"
    >
      <RootStack.Screen name="Root" component={MainNavigator} />
      <RootStack.Screen
        name="FilterHome"
        component={FilterModalNavigator}
        options={{
          ...TransitionPresets.FadeFromBottomAndroid,
          cardStyle: { backgroundColor: "transparent" },
          gestureResponseDistance: {
            vertical: Layout.window.height,
          },
        }}
      />
      <RootStack.Screen
        name="SettingsHome"
        component={SettingsModalNavigator}
        options={{
          ...TransitionPresets.ModalSlideFromBottomIOS,
          cardStyle: { backgroundColor: "transparent" },
          gestureResponseDistance: {
            vertical: Layout.window.height * 0.1,
          },
          gestureEnabled: true,
        }}
      />
    </RootStack.Navigator>
  );
};
