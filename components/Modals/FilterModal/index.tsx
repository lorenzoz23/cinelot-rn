import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import FilterModal from "./FilterModal";
import Sorter from "./Sorter";

const FilterModalStack = createStackNavigator();

const FilterModalNavigator = () => {
  return (
    <FilterModalStack.Navigator
      initialRouteName="Filter"
      screenOptions={{
        cardStyleInterpolator:
          CardStyleInterpolators.forRevealFromBottomAndroid,
        headerShown: false,
        cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }}
    >
      <FilterModalStack.Screen name="Filter">
        {() => <FilterModal />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="Sorter"
        options={{ gestureEnabled: false }}
      >
        {() => <Sorter />}
      </FilterModalStack.Screen>
    </FilterModalStack.Navigator>
  );
};

export default FilterModalNavigator;
