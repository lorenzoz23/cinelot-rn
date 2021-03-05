import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import FilterModal from "./FilterModal";
import Sorter from "./Sorter";
import MediaTagsFilter from "./MediaTags";
import GenreFilter from "./Genre";
import StarRatingsFilter from "./StarRatings";
import WatchedFilter from "./Watched";

const FilterModalStack = createStackNavigator();

const FilterModalNavigator = () => {
  return (
    <FilterModalStack.Navigator
      initialRouteName="Filter"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <FilterModalStack.Screen name="Filter">
        {() => <FilterModal />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="MediaTagsFilter"
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {() => <MediaTagsFilter />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="GenreFilter"
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {() => <GenreFilter />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="StarRatingsFilter"
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {() => <StarRatingsFilter />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="WatchedFilter"
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {() => <WatchedFilter />}
      </FilterModalStack.Screen>
      <FilterModalStack.Screen
        name="Sorter"
        options={{
          gestureEnabled: false,
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {() => <Sorter />}
      </FilterModalStack.Screen>
    </FilterModalStack.Navigator>
  );
};

export default FilterModalNavigator;
