import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

interface AvatarProps {
  image: string;
}

const Avatar = (props: AvatarProps) => {
  const { image } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default Avatar;
