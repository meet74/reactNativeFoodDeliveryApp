// Forgot Password screen

// All imports
import { View, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ScreenNames } from "../../../navigation/screens";
import TopMenu from "../../../components/TopMenu";

function ForgotPasswordScreen({ navigation }) {
  // initializing state using useState Hook
  const [email, setemail] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-background">
      <TopMenu title="Forgot Password" onBack={() => navigation.pop()} />
      <View className="mt-4">
        <Text className="font-display text-4xl text-black m-4">
          Forgot password
        </Text>
        <Text className="font-display text-gray w-10/12 ml-4 text-base">
          Enter your email address and we will send you a reset instructions.
        </Text>
        <Input
          label="Email address"
          externalInputStyle="my-5"
          value={email}
          externalLabelFocusedStyle="left-8"
          onChangeText={setemail}
        />
        <Button
          title="Reset Password"
          onPress={() => navigation.navigate(ScreenNames.AUTH)}
        />
      </View>
    </SafeAreaView>
  );
}

export default ForgotPasswordScreen;
