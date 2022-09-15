// Home Screen of App

// All imports
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useRef } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BottomSheet from "../../../components/BottomSheet";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

function HomeScreen() {
  const sheetRef = useRef();

  const openBottomSheet = () => sheetRef.current.open();
  useEffect(() => {
    openBottomSheet();
  }, []);

  return (
    <View className="flex-1 bg-background items-center justify-center">
      <TouchableOpacity onPress={() => openBottomSheet()}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>

      <BottomSheet
        sheetRef={sheetRef}
        height={Dimensions.get("screen").height * 0.75}
      >
        <KeyboardAvoidingView>
          <Text className="font-displayBold text-2xl text-black m-3 text-center ">
            Find restaurants near you
          </Text>
          <Text className="font-display text-base m-6 text-center text-black ">
            Please enter your location or allow access to your location to find
            restaurants near you.
          </Text>
          <Button
            title="Use current location"
            type="outline"
            icon={
              <FontAwesome name="location-arrow" size={28} color="orange" />
            }
          />
          <Text className="self-center m-3 font-displayBold">or</Text>
          <Input
            label="Enter a new address"
            externalInputFieldStyle="bg-gray-100 border-[1px] border-gray-200 text-base"
            externalLabelFocusedStyle="left-6"
          />
        </KeyboardAvoidingView>
      </BottomSheet>
    </View>
  );
}

export default HomeScreen;
