import {
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  Image,
} from "react-native";
import React, { useState } from "react";
import TopMenu from "../../../components/TopMenu";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { OTPVERIFICATIONSCREEN } from "../../../navigation/componentsAndNames";

function OTPLoginScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <TopMenu title="Signup to Next" onBack={() => navigation.pop()} />
          <View>
            <Image
              source={require("../../../assets/images/illustrations-3.png")}
              className="w-11/12 h-1/3 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Get started with Next
            </Text>
            <Text className="font-display text-base m-6 text-center text-black ">
              Enter your phone number to use next and enjoy your food :)
            </Text>
            <Input
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={(val) => setPhoneNumber(val)}
              externalLabelFocusedStyle="left-8"
              externalInputFieldStyle="text-lg"
              externalInputStyle="my-5"
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate(OTPVERIFICATIONSCREEN.name)}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default OTPLoginScreen;
