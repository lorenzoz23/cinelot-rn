import React, { ReactElement, useEffect, useRef } from "react";
import { View, Animated, Easing } from "react-native";
import { styles } from "./styles";

interface NavBarBaseProps {
  leftElement?: ReactElement | JSX.Element;
  rightElement?: ReactElement | JSX.Element;
  title: string;
}

export const NavBar = ({
  leftElement,
  rightElement,
  title,
}: NavBarBaseProps) => {
  const fader = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fader, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.left}>{leftElement}</View>
      <View style={styles.headerContent}>
        <Animated.Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            ...styles.headerContentTitle,
            opacity: fader,
          }}
        >
          {title}
        </Animated.Text>
      </View>
      <View style={styles.right}>{rightElement}</View>
    </View>
  );
};
