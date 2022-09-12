import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ScreenNames } from "../../../navigation/screens";

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <KeyboardAvoidingView>
        <View style={{}} className="items-center  flex-1">
          <Image
            source={require("../../../assets/images/illustrations-2.png")}
            className="w-11/12 h-1/3 self-center m-10"
            resizeMode="contain"
          />
          <Text className="font-displayBold text-2xl text-black m-3 text-center ">
            Welcome to Next Food Services
          </Text>

          <Input label="Email" />
          <Input label="Password" />
        </View>
        <View className="m-4">
          <Button
            title="Login"
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            externalButtonStyle="m-0"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
