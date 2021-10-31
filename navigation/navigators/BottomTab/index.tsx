import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../../../constants/Colors";
import { BottomTabParamList } from "../../../types/ParamLists";
import TabBarIcon from "./TabBarIcon";
import { HomeNavigator } from "./Home";
import { SearchNavigator } from "./Search";
import { ProfileNavigator } from "./Profile";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors["dark"].tint,
        inactiveTintColor: "black",
        showLabel: false,
        style: { backgroundColor: Colors["dark"].bottomTabBackground },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="search1" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
