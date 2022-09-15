// Signing up screen for first time users

// All imports
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import TopMenu from "../../../components/TopMenu";
import { HOME, OTPLOGINSCREEN } from "../../../navigation/componentsAndNames";

function SignUpScreen({ navigation }) {
  // initializing state using useState Hook
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <TopMenu title="Signup" onBack={() => navigation.pop()} />
          <View className="items-center  flex-1">
            <Image
              source={require("../../../assets/images/illustrations-5.png")}
              className="w-11/12 h-1/4 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Get started with Next
            </Text>
            <Input
              label="Name"
              onChangeText={setName}
              value={name}
              // ref={emailRef}
              // onSubmitEditing={() => console.log(passRef)}
            />
            <Input
              label="Email"
              onChangeText={setEmail}
              value={email}
              // ref={emailRef}
              // onSubmitEditing={() => console.log(passRef)}
            />
            <Input
              label="Password"
              onChangeText={setPassword}
              value={password}
              // ref={passRef}
              // onSubmitEditing={() => console.log("p", passRef)}
            />
            <Pressable
              className="self-start"
              onPress={() => navigation.navigate(OTPLOGINSCREEN.name)}
            >
              <Text className="m-2 mt-4  ml-8 text-base font-displayMedium ">
                SignUp using OTP ?
              </Text>
            </Pressable>
          </View>
          <View className="m-4">
            <Button
              title="Signup"
              onPress={() => navigation.navigate(HOME.name)}
              externalButtonStyle="m-0"
            />
            {/* <Text className="self-center m-5 font-displayBold">or</Text>
            <Button
              title="Signup with google"
              onPress={() => navigation.navigate(HOME.name)}
              externalButtonStyle="m-0"
              color="#4285F4"
              image={require("../../../assets/images/google.png")}
            /> */}
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default SignUpScreen;
