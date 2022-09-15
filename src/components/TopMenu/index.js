// Top menu with back and action button

// All imports
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function TopMenu({ onBack, title, actionTitle, onAction }) {
  // styling and classNames
  const classNames = {
    profileTopMenuContainer: " m-3 flex-row m- justify-between items-center",
    profileTopMenuTitle: "font-displayBold text-xl text-black",
    profileTopMenuActionTitle: "font-displayBold text-sm text-black",
  };

  return (
    <View className={classNames.profileTopMenuContainer}>
      <TouchableOpacity onPress={onBack}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text className={classNames.profileTopMenuTitle}>{title}</Text>
      <Text className={classNames.profileTopMenuActionTitle} onPress={onAction}>
        {actionTitle}
      </Text>
    </View>
  );
}
export default TopMenu;
