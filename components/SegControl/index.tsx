import React from "react";
import { SegmentedControl, Segment } from "react-native-resegmented-control";
import { SegControlStyles } from "./styles";

interface SegControlProps {
  onChange: (name: string) => void;
  selected: string;
  search?: boolean;
}

const SegControl = (props: SegControlProps) => {
  const { onChange, selected, search } = props;
  if (!search) {
    return (
      <SegmentedControl
        activeTintColor="#3498DB"
        inactiveTintColor="white"
        initialSelectedName={selected}
        onChangeValue={onChange}
        style={SegControlStyles.container}
      >
        <Segment name="lot" content="Your Lot" />
        <Segment name="wishlist" content="Your Wishlist" />
      </SegmentedControl>
    );
  }
  return (
    <SegmentedControl
      activeTintColor="#3498DB"
      inactiveTintColor="white"
      initialSelectedName={selected}
      onChangeValue={onChange}
      style={SegControlStyles.container}
    >
      <Segment name="lot" content="Your Lot" />
      <Segment name="wishlist" content="Your Wishlist" />
      <Segment name="films" content="Films to add" />
      <Segment name="users" content="Users" />
    </SegmentedControl>
  );
};

export default SegControl;
