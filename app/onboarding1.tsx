import { View, Text } from "react-native";
import React from "react";
import SkipText from "@/components/SkipText";
import className from "twrnc";
import OnboardingImage from "@/components/OnboardingImage";

const onboarding1 = () => {
  return (
    <View style={className`p-5`}>
      <SkipText />
      {/* Big Image */}
      <OnboardingImage source={require(`../assets/images/onboarding1.png`)} />
    </View>
  );
};

export default onboarding1;
