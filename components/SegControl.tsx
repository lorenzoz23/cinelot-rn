import React from "react";
import { SegmentedControl, Segment } from "react-native-resegmented-control";

interface SegControlProps {
  onChange: (name: string) => void;
  selected: string;
}

const SegControl = (props: SegControlProps) => {
  const { onChange, selected } = props;
  return (
    <SegmentedControl
      activeTintColor="#3498DB"
      inactiveTintColor="white"
      initialSelectedName={selected}
      onChangeValue={(name: string) => {
        onChange(name);
      }}
      style={{ width: "100%", backgroundColor: "#3498DB" }}
    >
      <Segment name="lot" content="Your Lot" />
      <Segment name="wishlist" content="Your Wishlist" />
    </SegmentedControl>
  );
};

export default SegControl;
