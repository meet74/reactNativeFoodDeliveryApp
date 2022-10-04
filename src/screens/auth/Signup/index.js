// Signing up screen for first time users

// All imports
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import TopMenu from '../../../components/TopMenu';
import {
  LOGINSCREEN,
  OTPLOGINSCREEN,
} from '../../../navigation/componentsAndNames';
import { signupUser } from '../../../store/actions/authActions';
import { setProfileData } from '../../../store/actions/profileActions';

function SignUpScreen({ navigation }) {
  // initializing state using useState Hook
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const data = useSelector((state) => state.auth);
  // const profileData = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.status === 200 && data.id) {
      setError(data.status);
      dispatch(setProfileData(data.id));
      navigation.replace(LOGINSCREEN.name);
    } else {
      console.log('Error');
      setError(data.status);
    }
  }, [data]);

  const submitHandler = () => {
    setLoader(true);
    if (email != null && password != null) {
      dispatch(signupUser(email, password));
    } else {
      setError(400);
    }

    setLoader(false);
  };

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <TopMenu title="Signup" onBack={() => navigation.pop()} />
          <View className="items-center  flex-1">
            <Image
              source={require('../../../assets/images/illustrations-5.png')}
              className="w-11/12 h-1/4 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Get started with Next
            </Text>
            <Input
              label="Name"
              onChangeText={(val) => {
                setName(val);
                setError(null);
              }}
              value={name}
              // ref={emailRef}
              // onSubmitEditing={() => console.log(passRef)}
            />
            <Input
              label="Email"
              onChangeText={(val) => {
                setEmail(val);
                setError(null);
              }}
              value={email}
              // ref={emailRef}
              // onSubmitEditing={() => console.log(passRef)}
            />
            <Input
              label="Password"
              onChangeText={(val) => {
                setPassword(val);
                setError(null);
              }}
              value={password}
              // ref={passRef}
              // onSubmitEditing={() => console.log("p", passRef)}
            />
            <Pressable
              className="self-start"
              onPress={() => navigation.navigate(OTPLOGINSCREEN.name)}>
              <Text className="m-2 mt-4  ml-8 text-base font-displayMedium ">
                SignUp using OTP ?
              </Text>
            </Pressable>
            <Text className="self-center text-displayRed text-lg pt-4 font-displayMedium">
              {error === 500
                ? 'Something went wrong!!'
                : error === 400
                ? 'Please enter email and password again'
                : ''}
            </Text>
          </View>
          <View className="m-4">
            {loader ? (
              <ActivityIndicator />
            ) : (
              <Button
                title="SignUp"
                onPress={submitHandler}
                externalButtonStyle="m-0"
              />
            )}
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
