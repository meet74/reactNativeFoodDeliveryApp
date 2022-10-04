/* eslint-disable no-plusplus */
/* eslint-disable no-var */
import {
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TopMenu from '../../../components/TopMenu';
import Button from '../../../components/Button';

import { forgotPassword } from '../../../store/actions/authActions';

function EmailVerificationPage({ navigation, route }) {
  const [timerState, setTimerState] = useState(false);
  const [time, setTime] = useState(`${2}m ${0}s `);

  const timer = () => {
    const countDownDate = 120000;
    let now = 0;
    // Update the count down every 1 second
    var x = setInterval(() => {
      // Get today's date and time

      // Find the distance between now and the count down date
      const distance = countDownDate - now * 1000;

      // Time calculations for minutes and seconds
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      now++;

      setTime(`${minutes}m ${seconds}s `);
      if (distance < 0) {
        clearInterval(x);
        setTimerState(true);
      }
    }, 1000);
  };

  const resetTimer = () => {
    setTimerState(false);
    timer();
  };

  useEffect(() => {
    timer();
  }, []);

  const dispatch = useDispatch();

  const submitHandler = () => {
    // setLoader(true);
    resetTimer();
    dispatch(forgotPassword(route.params.email));

    // setLoader(false);
  };
  return (
    <ScrollView>
      <SafeAreaView className="flex-1 bg-background h-screen">
        <KeyboardAvoidingView>
          <ImageBackground
            source={require('../../../assets/images/circle-background.png')}
            resizeMode="contain">
            <TopMenu
              title="Email Verification"
              onBack={() => navigation.pop()}
            />

            <View className="mt-10">
              <Text className="font-displayBold text-2xl text-black m-3 text-center ">
                Verify your email adddress
              </Text>
              <Text className="font-display text-base m-6 text-center text-black ">
                Please verify your email addreses
              </Text>

              <Text className="font-display text-base m-6 text-center text-black ">
                Did'nt receive Email ?{' '}
              </Text>
              <Button
                disabled={!timerState}
                title={!timerState ? `Send again after ${time}` : 'Send Again'}
                onPress={submitHandler}
              />
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

export default EmailVerificationPage;
