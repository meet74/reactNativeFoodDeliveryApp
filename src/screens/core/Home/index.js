/* eslint-disable react-native/no-inline-styles */
// Home Screen of App

// All imports
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Geolocation from '@react-native-community/geolocation';
import Swiper from 'react-native-swiper';
import BottomSheet from '../../../components/BottomSheet';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import colors from '../../../theme/colors';

const image = require('../../../assets/images/food-1.jpg');
const cardImage = require('../../../assets/images/food-2.jpg');
const imageSecond = require('../../../assets/images/food-3.jpg');
const imageThird = require('../../../assets/images/food-4.jpg');

function HomeScreen() {
  const sheetRef = useRef();

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  // const [address, setAddress] = useState('');
  // console.log(address);
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      // Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        // getting the Longitude from the location json
        const currentLongitudeCoords = JSON.stringify(
          position.coords.longitude
        );

        // getting the Latitude from the location json
        const currentLatitudeCoords = JSON.stringify(position.coords.latitude);

        // Setting Longitude state
        setCurrentLongitude(currentLongitudeCoords);

        // Setting Longitude state
        setCurrentLatitude(currentLatitudeCoords);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      }
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getOneTimeLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // To Check, If Permission is granted
          getOneTimeLocation();
        } else {
          setLocationStatus('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };
  console.log(currentLatitude, currentLongitude, locationStatus);
  // setAddress(locationStatus);
  const openBottomSheet = () => sheetRef.current.close();
  useEffect(() => {
    openBottomSheet();
  }, []);

  return (
    <ScrollView className="flex-1 bg-displayWhite">
      <View className="mb-4">
        <View className="flex flex-row items-center justify-between m-4">
          <View>
            <View className="flex flex-col items-center">
              <Text className="text-primary font-displayLight">
                DELIVERY TO
              </Text>
              <View className="flex flex-row items-center">
                <Text className="font-displayLight m-2 text-black">
                  HayStreet, Perth
                </Text>
                <TouchableOpacity onPress={() => openBottomSheet()}>
                  <AntDesign name="down" size={12} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Text className="font-display text-black text-lg m-2">Filter</Text>
        </View>
        <View className="border-0.5 border-displayLightGray w-screen" />
      </View>
      <View className="flex flex-1 items-center ">
        <Swiper
          showsButtons={false}
          height={200}
          autoplay
          style={{ borderRadius: 15 }}
          width={Dimensions.get('screen').width * 0.95}
          activeDotColor={colors.primary}>
          <Image
            source={image}
            className="w-[100%] h-[100%] rounded-lg"
            resizeMode="contain"
          />
          <Image
            source={imageSecond}
            className="w-[100%] h-[100%] rounded-lg"
            resizeMode="cover"
          />
          <Image
            source={imageThird}
            className="w-[100%] h-[100%] rounded-lg "
            resizeMode="cover"
          />
        </Swiper>
      </View>
      <View>
        <Text className="text-black m-4 font-displayMedium text-lg">
          Featured Restaurants
        </Text>
        <View>
          <View className="flex bg-background w-[92%] self-center rounded-lg shadow-2xl pb-4 my-4">
            <Image
              source={cardImage}
              className="w-[99%] h-[200] rounded-t-xl self-center"
              resizeMode="stretch"
            />
            <Text className="m-2 ml-3 mt-4 font-displayLight text-black text-xl">
              McDonald's
            </Text>
            <View className="flex-row justify-around flex-1 ">
              <Text className="font-displayMedium">• Chinese</Text>
              <Text className="font-displayMedium">• American</Text>
              <Text className="font-displayMedium">• Desi food</Text>
            </View>
            <View className="flex-row justify-around flex-1 mt-4">
              <Text className="font-displayMedium">
                <AntDesign name="star" size={18} color={colors.primary} /> 4.3{' '}
              </Text>
              <Text className="font-displayMedium">200+ ratings</Text>
              <Text className="font-displayMedium">
                <AntDesign name="clockcircle" size={16} color={colors.gray} />{' '}
                25 mins
              </Text>
              <Text className="font-displayMedium">
                {' '}
                <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
              </Text>
            </View>
          </View>
          <View className="flex bg-background w-[92%] self-center rounded-lg shadow-2xl pb-4 my-4">
            <Image
              source={cardImage}
              className="w-[99%] h-[200] rounded-t-xl self-center"
              resizeMode="stretch"
            />
            <Text className="m-2 ml-3 mt-4 font-displayLight text-black text-xl">
              McDonald's
            </Text>
            <View className="flex-row justify-around flex-1 ">
              <Text className="font-displayMedium">• Chinese</Text>
              <Text className="font-displayMedium">• American</Text>
              <Text className="font-displayMedium">• Desi food</Text>
            </View>
            <View className="flex-row justify-around flex-1 mt-4">
              <Text className="font-displayMedium">
                <AntDesign name="star" size={18} color={colors.primary} /> 4.3{' '}
              </Text>
              <Text className="font-displayMedium">200+ ratings</Text>
              <Text className="font-displayMedium">
                <AntDesign name="clockcircle" size={16} color={colors.gray} />{' '}
                25 mins
              </Text>
              <Text className="font-displayMedium">
                {' '}
                <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
              </Text>
            </View>
          </View>
          <View className="flex bg-background w-[92%] self-center rounded-lg shadow-2xl pb-4 my-4">
            <Image
              source={cardImage}
              className="w-[99%] h-[200] rounded-t-xl self-center"
              resizeMode="stretch"
            />
            <Text className="m-2 ml-3 mt-4 font-displayLight text-black text-xl">
              McDonald's
            </Text>
            <View className="flex-row justify-around flex-1 ">
              <Text className="font-displayMedium">• Chinese</Text>
              <Text className="font-displayMedium">• American</Text>
              <Text className="font-displayMedium">• Desi food</Text>
            </View>
            <View className="flex-row justify-around flex-1 mt-4">
              <Text className="font-displayMedium">
                <AntDesign name="star" size={18} color={colors.primary} /> 4.3{' '}
              </Text>
              <Text className="font-displayMedium">200+ ratings</Text>
              <Text className="font-displayMedium">
                <AntDesign name="clockcircle" size={16} color={colors.gray} />{' '}
                25 mins
              </Text>
              <Text className="font-displayMedium">
                {' '}
                <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
              </Text>
            </View>
          </View>
          <View className="flex bg-background w-[92%] self-center rounded-lg shadow-2xl pb-4 my-4">
            <Image
              source={cardImage}
              className="w-[99%] h-[200] rounded-t-xl self-center"
              resizeMode="stretch"
            />
            <Text className="m-2 ml-3 mt-4 font-displayLight text-black text-xl">
              McDonald's
            </Text>
            <View className="flex-row justify-around flex-1 ">
              <Text className="font-displayMedium">• Chinese</Text>
              <Text className="font-displayMedium">• American</Text>
              <Text className="font-displayMedium">• Desi food</Text>
            </View>
            <View className="flex-row justify-around flex-1 mt-4">
              <Text className="font-displayMedium">
                <AntDesign name="star" size={18} color={colors.primary} /> 4.3{' '}
              </Text>
              <Text className="font-displayMedium">200+ ratings</Text>
              <Text className="font-displayMedium">
                <AntDesign name="clockcircle" size={16} color={colors.gray} />{' '}
                25 mins
              </Text>
              <Text className="font-displayMedium">
                {' '}
                <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
              </Text>
            </View>
          </View>
        </View>
      </View>
      <BottomSheet
        sheetRef={sheetRef}
        height={Dimensions.get('screen').height * 0.75}>
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
            onPress={requestLocationPermission}
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
    </ScrollView>
  );
}

export default HomeScreen;
