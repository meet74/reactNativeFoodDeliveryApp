/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
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
  Pressable,
  SafeAreaView,
  LogBox,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Geolocation from '@react-native-community/geolocation';
import Swiper from 'react-native-swiper';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DropDownPicker from 'react-native-dropdown-picker';
import BottomSheet from '../../../components/BottomSheet';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import colors from '../../../theme/colors';
import { RESTAURANTDETAILSCREEN } from '../../../navigation/componentsAndNames';
import {
  getAllDishesData,
  getAllRestaurantData,
  getRestaurantsByLatLong,
} from '../../../store/actions/restaurantAction';
import RestaurantCard from '../../../components/RestaurantCard';
import { GOOGLE_API_KEY } from '../../../constants';
import { extractFromAddress } from './utils';
import {
  getProfileData,
  setUserAddress,
  setUserAddressInState,
} from '../../../store/actions/profileActions';
import TopMenu from '../../../components/TopMenu';

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
]);

const image = require('../../../assets/images/food-1.jpg');
const cardImage = require('../../../assets/images/food-2.jpg');
const imageSecond = require('../../../assets/images/food-3.jpg');
const imageThird = require('../../../assets/images/food-4.jpg');

function HomeScreen({ navigation }) {
  const sheetRef = useRef();
  const addressSheetRef = useRef();
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const restaurantData = useSelector((state) => state.restaurant);
  const userData = useSelector((state) => state.profile);

  console.log(userData);

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const [addressTitle, setAddressTitle] = useState(
    userData.userAddress.address_1 === null
      ? 'Add Address'
      : userData.userAddress.address_1
  );

  const [locationDetail, setLocationDetail] = useState({
    address_1: '',
    address_2: '',
    latitude: 0,
    longitude: 0,
    street: '',
    postal_code: '',
    city: '',
  });
  console.log('add', userData);
  const loadRestaurant = async (latitude, longitude) => {
    const AsyncStorageToken = await AsyncStorage.getItem('token');
    console.log('calling load');
    dispatch(
      getRestaurantsByLatLong({
        latitude,
        longitude,
        token: AsyncStorageToken,
      })
    );
  };

  useEffect(() => {
    loadRestaurant(
      userData.userAddress.latitude,
      userData.userAddress.longitude
    );
  }, []);

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
  const setAddressHandler = (address) => {
    sheetRef.current.close();
    addressSheetRef.current.close();
    setAddressTitle(address.address_1);
    loadRestaurant(address.latitude, address.longitude);
    setUserAddressInState({
      locationDetail: address,
      profile_id: userData.id,
      token: authData.token,
    });
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
  const openBottomSheet = () => {
    console.log('calling if');
    if (userData.userAddresses.length > 0) {
      console.log('calling if');
      addressSheetRef.current.open();
    } else {
      console.log('calling else');
      sheetRef.current.open();
    }
  };
  useEffect(() => {
    openBottomSheet();
  }, []);
  const locationHandler = () => {
    console.log(userData.id);
    sheetRef.current.close();
    addressSheetRef.current.close();
    setAddressTitle(locationDetail.address_1);
    dispatch(
      setUserAddress({
        locationDetail,
        profile_id: userData.id,
        token: authData.token,
      })
    );
    dispatch(
      setUserAddressInState({
        locationDetail,
        profile_id: userData.id,
        token: authData.token,
      })
    );
    loadRestaurant(locationDetail.latitude, locationDetail.longitude);
  };
  console.log('location', userData.userAddress);
  return (
    <SafeAreaView>
      <ScrollView
        nestedScrollEnabled
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
        className="flex-1 ">
        <View className="mb-4">
          <View className="flex flex-row items-center justify-between m-4">
            <TouchableOpacity onPress={() => openBottomSheet()}>
              <View className="flex flex-col items-center">
                <Text className="text-primary font-displayLight">
                  DELIVERY TO
                </Text>
                <View className="flex flex-row items-center">
                  <Text className="font-displayLight m-2 text-black">
                    {addressTitle}
                  </Text>

                  <AntDesign name="down" size={12} color="black" />
                </View>
              </View>
            </TouchableOpacity>
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
            {restaurantData.allRestaurants.length ? (
              restaurantData.allRestaurants.map((restaurant, index) => (
                <RestaurantCard
                  onPress={() =>
                    navigation.navigate(RESTAURANTDETAILSCREEN.name, {
                      restaurant,
                    })
                  }
                  key={index}
                  restaurantName={restaurant.name}
                />
              ))
            ) : (
              <Text className="text-primary self-center m-4 font-displayMedium text-lg">
                No Restaurants found in this area
              </Text>
            )}
          </View>
        </View>
        <BottomSheet
          sheetRef={sheetRef}
          topMenuTitle="Enter new Address"
          enabledGestureInteraction
          enabledContentGestureInteraction={false}
          enabledContentTapInteraction={false}
          height={Dimensions.get('screen').height * 0.75}>
          <View>
            <Text className="font-displayBold text-2xl text-black m-3 text-center ">
              Find restaurants near you
            </Text>
            <Text className="font-display text-base m-6 text-center text-black ">
              Please enter your location or allow access to your location to
              find restaurants near you.
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
            <Text className="m-3 font-displayBold">Address</Text>

            <GooglePlacesAutocomplete
              // className="flex-row bg-white border-2 mt-[15px] h-[60px] border-white shadow-xl self-center rounded-xl max-w-[90%] min-w-[90%] items-center pb-[15px]  z-0"
              placeholder="Search"
              keyboardShouldPersistTaps="always"
              fetchDetails
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true

                const city = extractFromAddress(
                  details.address_components,
                  'administrative_area_level_2',
                  'long_name'
                );

                const postal_code = extractFromAddress(
                  details.address_components,
                  'postal_code',
                  'long_name'
                );
                const street = extractFromAddress(
                  details.address_components,
                  'route',
                  'long_name'
                );
                console.log(city + postal_code + street);
                setLocationDetail({
                  address_1: data.structured_formatting.main_text,
                  address_2: data.structured_formatting.secondary_text,
                  postal_code,
                  city,
                  latitude: details.geometry.location.lat,
                  longitude: details.geometry.location.lng,
                });
              }}
              query={{
                key: GOOGLE_API_KEY,
                language: 'en',
              }}
            />

            {locationDetail.latitude !== 0 && locationDetail.latitude !== 0 && (
              <Button
                onPress={locationHandler}
                title="Set Address"
                externalButtonStyle="mt-12"
              />
            )}
            {userData.userAddresses.length > 0 && (
              <Button
                title="Open my Address"
                onPress={() => {
                  addressSheetRef.current.open();
                  sheetRef.current.close();
                }}
              />
            )}
          </View>
        </BottomSheet>
        <BottomSheet
          sheetRef={addressSheetRef}
          topMenuTitle="Choose Address"
          enabledGestureInteraction
          enabledContentGestureInteraction={false}
          enabledContentTapInteraction={false}
          height={Dimensions.get('screen').height * 0.75}>
          <View>
            <View className="mb-12">
              {userData.userAddresses.length > 0 ? (
                userData.userAddresses.map((add, index) => (
                  <TouchableOpacity onPress={() => setAddressHandler(add)}>
                    <View className="flex-row items-center mt-4">
                      <Entypo name="home" size={28} color={colors.primary} />
                      <View className="mx-2">
                        <Text className="my-1 font-displayMedium text-displayBlack text-lg">
                          {add.address_1}
                        </Text>
                        <Text>{`${add.address_1}, ${add.city}`}</Text>
                      </View>
                    </View>
                    <View className="border-0.5 border-displayLightGray mt-4 w-[95%] self-center" />
                  </TouchableOpacity>
                ))
              ) : (
                <Text className="text-primary self-center m-4 font-displayMedium text-lg">
                  No Addresses found
                </Text>
              )}
            </View>
            <Button
              title="Add new Address"
              onPress={() => {
                sheetRef.current.open();
                addressSheetRef.current.close();
              }}
            />
          </View>
        </BottomSheet>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
