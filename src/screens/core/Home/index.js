// Home Screen of App

// All imports
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

function HomeScreen() {
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <TouchableOpacity>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
