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
import { MonoText as Text } from "../../StyledText";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Movie } from "../../../types/Movie";
import { BlurView } from "expo-blur";
import Avatar from "../../Avatar";

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
        <BlurView
          intensity={100}
          style={{ width: "100%", flex: 1, justifyContent: "flex-end" }}
        >
          <TouchableOpacity
            style={{ flex: 1 }}
            activeOpacity={1}
            onPressOut={handleClose}
          >
            <View style={MoreModalStyles.container}>
              <TouchableWithoutFeedback>
                <View
                  style={{
                    ...MoreModalStyles.modal,
                    flex: 1,
                    maxHeight: "75%",
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      marginVertical: 20,
                      flex: 1,
                    }}
                  >
                    <View
                      style={{
                        marginVertical: 20,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{
                          uri: movie.poster,
                        }}
                        style={{
                          width: 150,
                          height: 225,
                          borderRadius: 10,
                          borderColor: "#CACFD2",
                          borderWidth: 1,
                        }}
                      />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      {Array(5)
                        .fill(0)
                        .map((index, i) => (
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
                    <TouchableOpacity
                      style={{
                        marginVertical: 20,
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome name="eye-slash" size={60} color="white" />
                      <Text
                        style={{
                          ...MoreModalStyles.text,
                          fontSize: 20,
                        }}
                      >
                        Watch
                      </Text>
                    </TouchableOpacity>
                    <ScrollView
                      horizontal
                      directionalLockEnabled
                      contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity
                        style={{
                          flexDirection: "row",
                        }}
                        activeOpacity={1}
                      >
                        {users.map((user) => (
                          <TouchableWithoutFeedback>
                            <TouchableOpacity
                              key={user.id}
                              style={{
                                marginHorizontal: 15,
                                alignItems: "center",
                              }}
                              activeOpacity={0.5}
                            >
                              <View>
                                <Avatar image={user.profileImage} />
                                <View
                                  style={{
                                    borderRadius: 30,
                                    backgroundColor: "#2471A3",
                                    alignItems: "center",
                                    position: "absolute",
                                    bottom: 0,
                                    right: 0,
                                    paddingHorizontal: 5,
                                    flexDirection: "row",
                                    justifyContent: "center",
                                  }}
                                >
                                  <Text>{user.tags.length}</Text>
                                  <AntDesign
                                    name="tags"
                                    color="white"
                                    size={15}
                                  />
                                </View>
                              </View>
                              <View
                                style={{ flexDirection: "row", paddingTop: 5 }}
                              >
                                {Array(user.rating)
                                  .fill(0)
                                  .map((index, i) => (
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
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
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
