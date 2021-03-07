import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import NavBar from "../components/NavBar";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/LotHome/LotHome";
import NotFoundScreen from "../screens/NotFound/NotFoundScreen";
import SearchScreen from "../screens/Search";
import {
  BottomTabParamList,
  HomeParamList,
  SearchParamList,
  SettingsParamList,
} from "../types/types";
import TabBarIcon from "./TabBarIcon";
import { MonoText as Text } from "../components/StyledText";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

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
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
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
                  activeOpacity={0.5}
                  onPress={() => optionProps.navigation.navigate("FilterHome")}
                >
                  <MaterialIcons name="filter-list" color="white" size={30} />
                </TouchableOpacity>
              }
              leftElement={
                <TouchableOpacity
                  activeOpacity={0.5}
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
          headerTitle: () => (
            <NavBar
              title="lorenzoz"
              {...optionProps}
              rightElement={
                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                  <AntDesign name="setting" color="white" size={30} />
                </TouchableOpacity>
              }
            />
          ),
        })}
      />
    </SettingsStack.Navigator>
  );
};
