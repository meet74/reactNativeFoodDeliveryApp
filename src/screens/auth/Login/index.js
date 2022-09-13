// Login screen for existing user

// All imports
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ScreenNames } from "../../../navigation/screens";
import TopMenu from "../../../components/TopMenu";

function LoginScreen({ navigation }) {
  // initializing refs using useRef Hook
  // const emailRef = useRef();
  // const passRef = useRef();

  // initializing state using useState Hook
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <TopMenu title="Login" onBack={() => navigation.pop()} />
          <View className="items-center  flex-1">
            <Image
              source={require("../../../assets/images/illustrations-2.png")}
              className="w-11/12 h-1/3 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Welcome to Next Food Services
            </Text>

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
              className="self-end"
              onPress={() => navigation.navigate(ScreenNames.FORGOTPASSWORD)}
            >
              <Text className="m-2  mr-7 text-base font-displayMedium ">
                Forgot password ?
              </Text>
            </Pressable>
          </View>
          <View>
            <Button
              title="Login"
              onPress={() => navigation.navigate(ScreenNames.HOME)}
              externalButtonStyle="m-0"
            />
            <Pressable
              className="self-end"
              onPress={() => navigation.navigate(ScreenNames.SIGNUP)}
            >
              <Text className="m-5 mr-7 text-base font-displayMedium ">
                Don't have an account ? Create one
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
}

export default LoginScreen;
