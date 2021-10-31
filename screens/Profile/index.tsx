import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import Avatar from "../../components/Avatar";
import { styles } from "./styles";
import { MonoText as Text } from "../../components/StyledText";
import { mockPrizedPossessions } from "../../mocks/PrizedPossessions";
import MovieCard from "../../components/MovieCard";
import { Movie } from "../../types/Movie";
import { useNavigation } from "@react-navigation/core";
import { defaultSelectedMovie } from "../LotHome";
import { AntDesign } from "@expo/vector-icons";

const ACTIVE_OPACITY = 0.5;
const AVATAR_IMAGE =
  "https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/18960007Final_ulj6bd/sweater-giu-giu.jpg";

export const ProfileScreen = () => {
  const { navigate } = useNavigation();
  const [selectedPrizedMovie, setSelectedPrizedMovie] =
    useState(defaultSelectedMovie);

  useEffect(() => {
    if (!Boolean(selectedPrizedMovie.id < 0))
      navigate("MovieDetailsScreen", {
        movieData: selectedPrizedMovie,
        setSelectedMovie: () => setSelectedPrizedMovie(defaultSelectedMovie),
      });
  }, [selectedPrizedMovie]);

  const handleSignOut = useCallback(
    () =>
      Alert.alert("Sign out", "Are you sure you want to sign out?", [
        { text: "Yes" },
        { text: "Nevermind", style: "cancel" },
      ]),
    []
  );

  const handleAvatarPress = useCallback(() => {
    navigate("SettingsHome", {
      screen: "EditProfile",
    });
  }, []);

  const renderPrizedPossessions = (item: Movie) => (
    <View style={styles.movie} key={item.id}>
      <MovieCard data={item} showMovie={setSelectedPrizedMovie} />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.avatar}
            activeOpacity={ACTIVE_OPACITY}
            onPress={handleAvatarPress}
          >
            <Avatar size="large" image={AVATAR_IMAGE} />
          </TouchableOpacity>
        </View>
        <View style={styles.prizedContainer}>
          <Text style={styles.prizedText}>Prized Possessions</Text>
          <FlatList
            data={mockPrizedPossessions}
            renderItem={({ item }) => renderPrizedPossessions(item)}
            directionalLockEnabled
            horizontal
            style={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.rowContentContainer}>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => navigate("TagsScreen")}
          >
            <Text style={styles.headerText}>Tags</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.row, styles.middle]}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => navigate("FollowingScreen")}
          >
            <Text style={styles.headerText}>Following</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.row}
            activeOpacity={ACTIVE_OPACITY}
            onPress={() => navigate("FollowersScreen")}
          >
            <Text style={styles.headerText}>Followers</Text>
            <AntDesign name="caretright" size={25} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signOut}
          activeOpacity={ACTIVE_OPACITY}
          onPress={handleSignOut}
        >
          <Text style={styles.signOutText}>Sign out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
