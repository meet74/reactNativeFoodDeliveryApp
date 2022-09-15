// Custom Button Component

// All imports
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

function Button({
  type = "default",
  title = "",
  // size = "75",
  onPress,
  color,
  image,
  externalButtonStyle,
  externalTextstyle,
}) {
  // size of button
  // const tempSize = size ? `[${parseInt(size, 10)}vw]` : "full";
  // console.log(tempSize);

  // styling and classnames
  const classNames = {
    container: `
    ${color ? `bg-[${color}]` : "bg-primary"} 
    w-11/12  self-center my-2 rounded-xl items-center
   ${!image && "justify-center  py-4"} flex-row  
   ${type === "inverted" ? "bg-gray-200" : ""}
    ${type === "outline" ? "bg-gray-200 border-black border-1" : ""}
    ${externalButtonStyle}`,

    defaultButtonText: `text-xl text-white leading-relaxed font-displayMedium 
    ${type === "inverted" ? "text-black" : ""}
    ${type === "outline" ? "text-black" : ""}
    ${externalTextstyle}`,

    defaultButtonBG: `  ${image ? "ml-[10px]" : ""}
   `,
  };

  return (
    <View className={classNames.container}>
      {image && (
        <Image
          source={image}
          className="w-[45px] h-[45px] m-2 mx-5"
          resizeMode="contain"
        />
      )}
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
