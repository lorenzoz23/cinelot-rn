import React, { ReactElement, useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { NavBarStyles } from "./styles";

interface NavBarBaseProps {
  leftElement?: ReactElement | JSX.Element;
  rightElement?: ReactElement | JSX.Element;
  title: string;
}

const NavBar = (props: NavBarBaseProps) => {
  const { leftElement, rightElement, title } = props;
  const fader = new Animated.Value(1);

  useEffect(() => {
    Animated.timing(fader, {
      toValue: 1,
      duration: 600,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={NavBarStyles.container}>
      <View style={{ ...NavBarStyles.left, ...NavBarStyles.text }}>
        {leftElement}
      </View>
      <Animated.Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          ...NavBarStyles.headerContentTitle,
          ...NavBarStyles.headerContent,
          opacity: fader,
        }}
      >
        {title}
      </Animated.Text>
      <View style={{ ...NavBarStyles.right, ...NavBarStyles.text }}>
        {rightElement}
      </View>
    </View>
  );
};

export default NavBar;
