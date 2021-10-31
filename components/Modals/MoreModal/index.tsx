import React from "react";
import {
  Modal as NativeModal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import { MoreModalStyles } from "./styles";
import { MonoText as Text } from "../../Text";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";
import { Avatar } from "../../Avatar";
import { sharedModalStyles } from "../styles";

const users = [
  {
    id: 0,
    name: "lorenzoz",
    rating: 5,
    tags: ["blu-ray"],
    profileImage:
      "https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/18960007Final_ulj6bd/sweater-giu-giu.jpg",
  },
  {
    id: 1,
    name: "fucusbutadmin",
    rating: 4,
    tags: ["blu-ray", "digital"],
    profileImage:
      "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:eco/18980004_V1_web_llswvr/dress-jw-anderson.jpg",
  },
  {
    id: 2,
    name: "lzenitsky",
    rating: 3,
    tags: ["4k-uhd", "blu-ray"],
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthhFLlZMBoOytT-U0HELMTDsOba3kAL8wpSgxtvK9agwrb8WeVRydoaFGCs5Lw9oA1u4&usqp=CAU",
  },
];

interface MoreModalProps {
  handleClose: () => void;
  movie: Movie;
}

const MoreModal = (props: MoreModalProps) => {
  const { handleClose, movie } = props;
  return (
    <View>
      <NativeModal
        animationType="fade"
        transparent={true}
        visible
        onDismiss={handleClose}
      >
        <BlurView intensity={100} style={sharedModalStyles.blurContainer}>
          <TouchableOpacity
            style={sharedModalStyles.flex}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={sharedModalStyles.rootContainer}>
              <TouchableWithoutFeedback>
                <View
                  style={[
                    sharedModalStyles.modal,
                    MoreModalStyles.contentContainer,
                  ]}
                >
                  <View style={MoreModalStyles.innerContentContainer}>
                    <View style={MoreModalStyles.imageContainer}>
                      <Image
                        source={{
                          uri: movie.poster,
                        }}
                        style={MoreModalStyles.image}
                      />
                    </View>
                    <View style={sharedModalStyles.row}>
                      {Array(5)
                        .fill(0)
                        .map(() => (
                          <TouchableOpacity>
                            <AntDesign
                              name="star"
                              size={40}
                              color="white"
                              style={{ padding: 5 }}
                            />
                          </TouchableOpacity>
                        ))}
                    </View>
                    <TouchableOpacity style={MoreModalStyles.watchedContainer}>
                      <FontAwesome name="eye-slash" size={60} color="white" />
                      <Text style={MoreModalStyles.watchedText}>Watch</Text>
                    </TouchableOpacity>
                    <ScrollView
                      horizontal
                      directionalLockEnabled
                      contentContainerStyle={MoreModalStyles.scrollContainer}
                    >
                      <TouchableOpacity
                        style={sharedModalStyles.row}
                        activeOpacity={1}
                      >
                        {users.map((user) => (
                          <TouchableWithoutFeedback>
                            <TouchableOpacity
                              key={user.id}
                              style={MoreModalStyles.userFollowerContainer}
                              activeOpacity={0.5}
                            >
                              <View>
                                <Avatar image={user.profileImage} />
                                <View style={MoreModalStyles.userTagsContainer}>
                                  <Text>{user.tags.length}</Text>
                                  <AntDesign
                                    name="tags"
                                    color="white"
                                    size={15}
                                  />
                                </View>
                              </View>
                              <View style={MoreModalStyles.userStarRatings}>
                                {Array(user.rating)
                                  .fill(0)
                                  .map(() => (
                                    <AntDesign
                                      name="star"
                                      size={15}
                                      color="#F7DC6F"
                                    />
                                  ))}
                              </View>
                            </TouchableOpacity>
                          </TouchableWithoutFeedback>
                        ))}
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                  <View style={sharedModalStyles.bottomButtonContainer}>
                    <TouchableOpacity onPress={handleClose} activeOpacity={0.5}>
                      <AntDesign name="closecircle" color="#FF18B2" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      activeOpacity={0.5}
                      disabled
                    >
                      <AntDesign
                        name="checkcircle"
                        color="#58D68D"
                        size={40}
                        style={{ opacity: 0.4 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableOpacity>
        </BlurView>
      </NativeModal>
    </View>
  );
};

export default MoreModal;
