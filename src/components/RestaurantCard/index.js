import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';

const cardImage = require('../../assets/images/food-2.jpg');

function RestaurantCard({ restaurantName = '', onPress, available = true }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        className={`flex ${
          available ? 'bg-background' : 'bg-displayLightGray'
        } w-[92%] self-center rounded-lg shadow-2xl pb-4 my-4`}>
        <Image
          source={cardImage}
          className="w-[99%] h-[200] rounded-t-xl self-center"
          resizeMode="stretch"
        />
        <Text
          className={`m-2 ml-3 mt-4 font-displayLight  text-xl ${
            !available ? ' text-displayGray' : 'text-displayBlack'
          }`}>
          {restaurantName}
        </Text>
        {!available && (
          <Text className="mb-2 ml-3  font-displayLight text-displayGray">
            (Service not available in this area)
          </Text>
        )}
        <View className="flex-row justify-around flex-1 ">
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            • Chinese
          </Text>
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            • American
          </Text>
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            • Desi food
          </Text>
        </View>
        <View className="flex-row justify-around flex-1 mt-4">
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            <AntDesign
              name="star"
              size={18}
              color={available ? colors.primary : colors.gray}
            />{' '}
            4.3{' '}
          </Text>
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            200+ ratings
          </Text>
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            <AntDesign name="clockcircle" size={16} color={colors.gray} /> 25
            mins
          </Text>
          <Text
            className={`font-displayMedium ${
              !available && ' text-displayGray'
            }`}>
            {' '}
            <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;
