import { AntDesign } from "@expo/vector-icons";
import React from "react";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof AntDesign>["name"];
  color: string;
}) => {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
};

export default TabBarIcon;
