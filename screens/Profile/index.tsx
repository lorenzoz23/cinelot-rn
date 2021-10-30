import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Avatar from "../../components/Avatar";
import { ProfileStyles } from "./styles";
import { MonoText as Text } from "../../components/StyledText";
import { mockPrizedPossessions } from "../../mocks/PrizedPossessions";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/Movie";
import { useNavigation } from "@react-navigation/core";
import { defaultSelectedMovie } from "../LotHome/LotHome";
import { AntDesign } from "@expo/vector-icons";

const Profile = () => {
  const navigation = useNavigation();
  const [selectedPrizedMovie, setSelectedPrizedMovie] =
    useState(defaultSelectedMovie);

  useEffect(() => {
    if (selectedPrizedMovie.id > 0)
      navigation.navigate("MovieDetailsScreen", {
        movieData: selectedPrizedMovie,
        setSelectedMovie: () => setSelectedPrizedMovie(defaultSelectedMovie),
      });
  }, [selectedPrizedMovie]);

  const handleSignOut = () =>
    Alert.alert("Sign out", "Are you sure you want to sign out?", [
      { text: "Yes" },
      { text: "Nevermind", style: "cancel" },
    ]);

  return (
    <View style={ProfileStyles.container}>
      <ScrollView
        style={ProfileStyles.scrollViewContainer}
        contentContainerStyle={ProfileStyles.scrollContent}
      >
        <View style={ProfileStyles.headerContainer}>
          <TouchableOpacity
            style={ProfileStyles.avatar}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("SettingsHome", {
                screen: "EditProfile",
              })
            }
          >
            <Avatar
              size="large"
              image="https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/18960007Final_ulj6bd/sweater-giu-giu.jpg"
            />
          </TouchableOpacity>
        </View>
        <View style={ProfileStyles.prizedContainer}>
          <Text style={ProfileStyles.prizedText}>Prized Possessions</Text>
          <FlatList
            data={mockPrizedPossessions}
            renderItem={({ item }) => (
              <View style={ProfileStyles.movie} key={item.id}>
                <MovieCard
                  data={item as Movie}
                  showMovie={setSelectedPrizedMovie}
                />
              </View>
            )}
            directionalLockEnabled
            horizontal
            style={ProfileStyles.flatListContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={ProfileStyles.rowContentContainer}>
          <TouchableOpacity
            style={ProfileStyles.row}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("TagsScreen")}
          >
            <Text style={ProfileStyles.headerText}>Tags</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[ProfileStyles.row, ProfileStyles.middle]}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("FollowingScreen")}
          >
            <Text style={ProfileStyles.headerText}>Following</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={ProfileStyles.row}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("FollowersScreen")}
          >
            <Text style={ProfileStyles.headerText}>Followers</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={ProfileStyles.signOut}
          activeOpacity={0.5}
          onPress={handleSignOut}
        >
          <Text style={ProfileStyles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;
