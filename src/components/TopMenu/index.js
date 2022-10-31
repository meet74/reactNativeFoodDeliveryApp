// Top menu with back and action button

// All imports
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function TopMenu({
  onBack,
  title,
  actionTitle,
  onAction,
  textColor = 'text-black',
  iconColor = 'black',
  rightIcon = (
    <MaterialIcons name="keyboard-arrow-left" size={30} color={iconColor} />
  ),
  showRightIcon = true,
}) {
  // styling and classNames
  const classNames = {
    profileTopMenuContainer: ' m-3 flex-row m- justify-between items-center',
    profileTopMenuTitle: `font-displayBold text-xl ${textColor}`,
    profileTopMenuActionTitle: `font-displayBold text-sm ${textColor}`,
  };

  return (
    <View className={classNames.profileTopMenuContainer}>
      <TouchableOpacity onPress={onBack}>
        {showRightIcon && rightIcon}
      </TouchableOpacity>
      <Text className={classNames.profileTopMenuTitle}>{title}</Text>
      <Text className={classNames.profileTopMenuActionTitle} onPress={onAction}>
        {actionTitle}
      </Text>
    </View>
  );
}
export default TopMenu;
