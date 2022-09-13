import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import { ScreenNames } from "../../../navigation/screens";

function InitialPage({ navigation }) {
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <View style={{}} className="items-center justify-center flex-1">
            <Image
              source={require("../../../assets/images/illustrations-1.png")}
              className="w-11/12 h-1/2 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-3xl text-black ">
              All you favorites
            </Text>
            <Text className="font-display text-base m-6 text-center text-black ">
              Order from the best local restaurants with easy, on-demand
              delivery.
            </Text>
          </View>
          <View className="m-4">
            <Button
              title="Login"
              onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            />
            <Button
              title="Signup"
              onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default InitialPage;
