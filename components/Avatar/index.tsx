import React from "react";
import { Image, View } from "react-native";

interface AvatarProps {
  image: string;
}

const Avatar = (props: AvatarProps) => {
  const { image } = props;
  return (
    <View
      style={{
        borderColor: "#FF33C7",
        borderWidth: 3,
        borderRadius: 50,
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 60, height: 60, borderRadius: 50 }}
      />
    </View>
  );
};

export default Avatar;
