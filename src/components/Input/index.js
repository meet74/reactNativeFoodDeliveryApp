// Custom input component

// All imports
import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

function Input({
  label = "",
  value,
  onChangeText,
  placeholder = "",
  secureTextEntry = false,
  autoCorrect = false,
  keyboardType = "default",
  returnKeyType = "next",
  ref = {},
  onSubmitEditing,
  externalInputStyle,
  externalLabelFocusedStyle,
}) {
  // initializing state using useState Hook
  const [focused, setFocus] = useState(false);

  // styling and classnames
  const classNames = {
    inputContainer: `${externalInputStyle}`,
    inputLabelFocused:
      focused || value
        ? `relative top-6 left-4 z-10 text-sm ${externalLabelFocusedStyle}`
        : "",
    inputField: `bg-white border-2 border-white shadow-xl self-center rounded-xl max-w-[90%] min-w-[90%] py-4 px-4 z-0 
        ${focused || value ? "py-5" : ""}
      `,
  };
  return (
    <View className={classNames.inputContainer}>
      <Text className={classNames.inputLabelFocused}>
        {focused || value ? label || placeholder : ""}
      </Text>
      <TextInput
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholder={focused ? "" : value ? "" : label || placeholder}
        autoCorrect={autoCorrect}
        value={value}
        ref={ref}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        onChangeText={onChangeText}
        className={classNames.inputField}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </View>
  );
}

export default Input;
