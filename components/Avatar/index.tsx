import React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";

interface AvatarProps {
  image: string;
  size?: "small" | "large";
}

export const Avatar = ({ image, size = "small" }: AvatarProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={[
          styles.image,
          size === "small" && styles.small,
          size === "large" && styles.large,
        ]}
      />
    </View>
  );
};
