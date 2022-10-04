// Login screen for existing user

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
import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import TopMenu from '../../../components/TopMenu';
import {
  FORGOTPASSWORDSCREEN,
  SIGNUPSCREEN,
  TABSCREENS,
} from '../../../navigation/componentsAndNames';
import { loginUser } from '../../../store/actions/authActions';

function LoginScreen({ navigation }) {
  // initializing refs using useRef Hook
  // const emailRef = useRef();
  // const passRef = useRef();

  // initializing state using useState Hook
  // initializing state using useState Hook
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const data = useSelector((state) => state.auth);

  const stateChange = useCallback(() => {
    if (data.status === 200 && data.id) {
      navigation.replace(TABSCREENS.name);
      setError(data.status);
    } else {
      console.log('Error');
      setError(data.status);
    }
  }, [data.id]);

  useEffect(() => {
    stateChange();
  }, [data]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    setLoader(true);
    if (email != null && password != null) {
      dispatch(loginUser(email, password));
    } else {
      setError(400);
    }

    setLoader(false);
  };

  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <TopMenu title="Login" onBack={() => navigation.pop()} />
          <View className="items-center  flex-1">
            <Image
              source={require('../../../assets/images/illustrations-2.png')}
              className="w-11/12 h-1/3 self-center m-10"
              resizeMode="contain"
            />
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Welcome to Next Food Services
            </Text>

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
              className="self-end"
              onPress={() => navigation.navigate(FORGOTPASSWORDSCREEN.name)}>
              <Text className="m-2  mr-7 text-base font-displayMedium ">
                Forgot password ?
              </Text>
            </Pressable>
            <Text className="self-center text-displayRed text-lg pt-4 font-displayMedium">
              {error === 500
                ? 'Something went wrong!!'
                : error === 400
                ? 'Email or Password is wrong'
                : error === 404
                ? "Email does'nt exist"
                : ''}
            </Text>
          </View>
          <View>
            {loader ? (
              <ActivityIndicator />
            ) : (
              <Button
                title="Login"
                onPress={submitHandler}
                externalButtonStyle="m-0"
              />
            )}
            <Pressable
              className="self-end"
              onPress={() => navigation.navigate(SIGNUPSCREEN.name)}>
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
