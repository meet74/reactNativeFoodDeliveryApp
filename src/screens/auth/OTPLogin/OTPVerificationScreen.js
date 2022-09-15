import {
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import TopMenu from "../../../components/TopMenu";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { HOME } from "../../../navigation/componentsAndNames";

function OTPVerificationScreen({ navigation }) {
  const [OTP, setOTP] = useState("");
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <ImageBackground
            source={require("../../../assets/images/circle-background.png")}
            resizeMode="contain"
          >
            <TopMenu title="Signup to next" onBack={() => navigation.pop()} />

            <View className="mt-10">
              <Text className="font-displayBold text-2xl text-black m-3 text-center ">
                Verify phone number
              </Text>
              <Text className="font-display text-base m-6 text-center text-black ">
                Enter the 4-Digit code sent to you at +610489632578
              </Text>
              <Input
                placeholder="Enter OTP"
                value={OTP}
                onChangeText={(val) => setOTP(val)}
                externalLabelFocusedStyle="left-8"
                externalInputFieldStyle="text-lg"
                externalInputStyle="my-5"
              />
              <Button
                title="Verify"
                onPress={() => navigation.navigate(HOME.name)}
              />
              <Text className="font-display text-base m-6 text-center text-black ">
                Did'nt receive code ?{" "}
                <Text className="text-primary">Resend Again</Text>
              </Text>
              <Text className="font-display text-base m-6 text-center text-gray ">
                By Signing up you agree to our Terms Conditions & Privacy
                Policy.
              </Text>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default OTPVerificationScreen;
