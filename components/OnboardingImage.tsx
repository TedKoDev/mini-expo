import { View, Text, Image } from "react-native";
import React from "react";
import className from "twrnc";

const OnboardingImage = ({ source }) => {
  return (
    <View>
      <Image source={source} style={className`p-3 `} />
    </View>
  );
};

export default OnboardingImage;
