// Custom Button Component

// All imports
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

function Button({
  type = 'default',
  title = '',
  // size = "75",
  onPress,
  color,
  image,
  icon,
  externalButtonStyle,
  externalTextstyle,
  disabled = false,
}) {
  // size of button
  // const tempSize = size ? `[${parseInt(size, 10)}vw]` : "full";

  // styling and classnames
  const classNames = {
    container: `
    ${color ? `bg-[${color}]` : 'bg-primary'} 
    w-11/12  self-center my-2 rounded-xl items-center
   ${!image && 'justify-center  py-4'} flex-row  
   ${type === 'inverted' ? 'bg-gray-200' : ''}
    ${type === 'outline' ? 'bg-white border-primary border-[1.5px]' : ''}
    ${disabled === true ? 'bg-white border-primary border-[1.5px]' : ''}
    ${externalButtonStyle}`,

    defaultButtonText: `text-xl text-white leading-relaxed font-displayMedium 
    ${type === 'inverted' ? 'text-black' : ''}
    ${type === 'outline' ? 'text-primary' : ''}
    ${disabled === true ? 'text-primary' : ''}
    ${externalTextstyle}`,

    defaultButtonBG: `  ${image ? 'ml-[10px]' : ''}
   `,
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      className={classNames.container}
      onPress={onPress}>
      {image && (
        <Image
          source={image}
          className="w-[45px] h-[45px] m-2 mx-5"
          resizeMode="contain"
        />
      )}
      {icon && <View className="mx-5 ml-[-10px]">{icon}</View>}
      <View className={classNames.defaultButtonBG}>
        <Text className={classNames.defaultButtonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
