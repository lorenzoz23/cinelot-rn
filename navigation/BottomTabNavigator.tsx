import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { Alert, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/LotHome/LotHome";
import NotFoundScreen from "../screens/NotFoundScreen";
import SearchScreen from "../screens/Search/TabTwoScreen";
import {
  BottomTabParamList,
  HomeParamList,
  SearchParamList,
  SettingsParamList,
} from "../types/types";
import TabBarIcon from "./TabBarIcon";
import { MonoText as Text } from "../components/StyledText";
import { MaterialIcons } from "@expo/vector-icons";
import FilterModal from "../components/Modals/FilterModal";
import FilterModalNavigator from "../components/Modals/FilterModal";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        inactiveTintColor: "black",
        showLabel: false,
        style: { backgroundColor: "#C39BD3" },
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
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="setting" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

const HomeStack = createStackNavigator<HomeParamList>();
const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="HomeScreen"
        options={(optionProps) => ({
          headerTitle: () => (
            <NavBar
              title="Cinelot"
              {...optionProps}
              rightElement={
                <TouchableOpacity
                  onPress={() => optionProps.navigation.navigate("FilterHome")}
                >
                  <MaterialIcons name="filter-list" color="white" size={30} />
                </TouchableOpacity>
              }
              leftElement={
                <TouchableOpacity
                  onPress={() =>
                    Alert.alert(
                      "You have 16 films in your collection!",
                      "",
                      [
                        {
                          text: "Sick!",
                        },
                      ],
                      { cancelable: false }
                    )
                  }
                >
                  <Text
                    style={{ color: "white", fontSize: 15 }}
                    ellipsizeMode="tail"
                  >
                    7 films
                  </Text>
                </TouchableOpacity>
              }
            />
          ),
        })}
      >
        {(props) => <HomeScreen {...props} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const SearchStack = createStackNavigator<SearchParamList>();
const SearchNavigator = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={(optionProps) => ({
          headerTitle: () => <NavBar title="Search" {...optionProps} />,
        })}
      />
    </SearchStack.Navigator>
  );
};

const SettingsStack = createStackNavigator<SettingsParamList>();
const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={(optionProps) => ({
          headerTitle: () => <NavBar title="Settings" {...optionProps} />,
        })}
      />
    </SettingsStack.Navigator>
  );
};
