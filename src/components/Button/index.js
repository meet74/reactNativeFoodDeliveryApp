import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Button({
  type = "default",
  title = "",
  // size = "75",
  onPress,
  color,
  externalButtonStyle,
  externalTextstyle,
}) {
  // const tempSize = size ? `[${parseInt(size, 10)}vw]` : "full";
  // console.log(tempSize);
  const classNames = {
    defaultButtonText: `text-xl text-white leading-relaxed font-display
    ${type === "inverted" ? "text-black" : ""}
    ${type === "outline" ? "text-black" : ""}
    ${externalTextstyle}`,

    defaultButtonBG: `${
      color ? `bg-[${color}]` : "bg-primary"
    } w-11/12  self-center  py-4 my-3 rounded-xl items-center
    ${type === "inverted" ? "bg-gray-200" : ""}
    ${type === "outline" ? "bg-gray-200 border-black border-1" : ""}
    ${externalButtonStyle}`,
  };
  return (
    <View>
      <TouchableOpacity
        className={classNames.defaultButtonBG}
        onPress={onPress}
      >
        <Text className={classNames.defaultButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
