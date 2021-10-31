import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotFoundScreen from "../../screens/NotFound";
import { TagsScreen } from "../../screens/Profile/Tags";
import { FollowingScreen } from "../../screens/Profile/Following";
import { FollowersScreen } from "../../screens/Profile/Followers";
import { BottomTabNavigator } from ".";
import { MovieDetailsScreen } from "../../screens/MovieDetails";

const MainStack = createStackNavigator();
export const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <MainStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
      />
      <MainStack.Screen name="TagsScreen" component={TagsScreen} />
      <MainStack.Screen name="FollowingScreen" component={FollowingScreen} />
      <MainStack.Screen name="FollowersScreen" component={FollowersScreen} />
      <MainStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </MainStack.Navigator>
  );
};
