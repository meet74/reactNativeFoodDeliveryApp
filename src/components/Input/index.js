// Custom input component

// All imports
import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';

function Input({
  label = '',
  value,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  autoCorrect = false,
  keyboardType = 'default',
  returnKeyType = 'next',
  ref = {},
  onSubmitEditing,
  externalInputStyle,
  externalLabelFocusedStyle,
  externalInputFieldStyle,
  icon,
}) {
  // initializing state using useState Hook
  const [focused, setFocus] = useState(false);

  // styling and classnames
  const classNames = {
    inputContainer: `h-[60px] w-[250px] ml-[24px] m-1 ${externalInputStyle}   `,
    inputLabelFocused:
      focused || value
        ? `relative top-6 left-4 z-10 text-sm ${externalLabelFocusedStyle}`
        : '',
    inputField: `flex-row bg-white border-2 mt-[15px] h-[60px] border-white shadow-xl self-center rounded-xl max-w-[90%] min-w-[90%] items-center pb-[15px]  z-0 
        ${externalInputFieldStyle}
       
      `,
  };
  return (
    <View className={classNames.inputField}>
      {icon && <View className="m-1 mt-4">{icon}</View>}
      <View>
        <Text className={classNames.inputLabelFocused}>
          {focused || value ? label || placeholder : ''}
        </Text>

        <TextInput
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholder={focused ? '' : value ? '' : label || placeholder}
          autoCorrect={autoCorrect}
          value={value}
          ref={ref}
          onSubmitEditing={onSubmitEditing}
          returnKeyType={returnKeyType}
          onChangeText={onChangeText}
          className={classNames.inputContainer}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </View>
    </View>
  );
}

export default Input;
