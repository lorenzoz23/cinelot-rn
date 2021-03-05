import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName, Dimensions } from "react-native";
import NotFoundScreen from "../screens/NotFoundScreen";
import MovieDetailsScreen from "../screens/MovieDetails";
import { RootStackParamList } from "../types/types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import FilterModalNavigator from "../components/Modals/FilterModal";
import { TransitionPresets } from "@react-navigation/stack";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;

const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <MainStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={() => ({
          headerTransparent: true,
          headerShown: false,
        })}
      />
      <MainStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </MainStack.Navigator>
  );
};

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const RootStack = createStackNavigator<RootStackParamList>();
const RootNavigator = () => {
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
            vertical: Dimensions.get("window").height,
          },
        }}
      />
    </RootStack.Navigator>
  );
};
