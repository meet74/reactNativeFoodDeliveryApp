// Forgot Password screen

// All imports
import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import TopMenu from '../../../components/TopMenu';
// import { AUTH } from '../../../navigation/componentsAndNames';
import { forgotPassword } from '../../../store/actions/authActions';
import { EMAILVERIFICATIONPAGE } from '../../../navigation/componentsAndNames';

function ForgotPasswordScreen({ navigation }) {
  // initializing state using useState Hook
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const data = useSelector((state) => state.auth);

  useEffect(() => {
    if (data.status === 200) {
      setError(data.status + 10);
      navigation.navigate(EMAILVERIFICATIONPAGE.name, { email });
    } else {
      console.log('Error');
      setError(data.status);
    }
  }, [data]);

  const dispatch = useDispatch();

  const submitHandler = () => {
    setLoader(true);
    if (email != null) {
      dispatch(forgotPassword(email));
    } else {
      setError(404);
    }
    setLoader(false);
  };

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
        <Text
          className={`self-center ${
            error === 210 ? 'text-displayGreen' : 'text-displayRed'
          } text-lg pt-4 font-displayMedium`}>
          {error === 500
            ? 'Something went wrong!!'
            : error === 400
            ? 'Email is wrong'
            : error === 404
            ? "Email does'nt exist"
            : error === 210
            ? 'Email sent successfully!!'
            : ''}
        </Text>
        <Input
          label="Email address"
          externalInputStyle="my-5 p-4"
          value={email}
          externalLabelFocusedStyle="left-4 top-9"
          onChangeText={(val) => {
            setEmail(val);
            setError(null);
          }}
        />
        {loader ? (
          <ActivityIndicator />
        ) : (
          <Button
            title="Reset Password"
            onPress={submitHandler}
            externalButtonStyle="m-0"
          />
        )}
      </View>
    </SafeAreaView>
  );
}

export default ForgotPasswordScreen;
