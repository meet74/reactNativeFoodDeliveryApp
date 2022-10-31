import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const cardImage = require('../../assets/images/food-1.jpg');

function RestaurantCard({ restaurantName = '', onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className="flex bg-background w-[90%] self-center items-center rounded-lg shadow-2xl pb-4 m-4 ">
        <Image
          source={cardImage}
          className="w-[100%] h-[200] rounded-t-xl self-center"
        />
        <Text className="m-2 ml-3 mt-4 font-displayLight text-black text-xl">
          {restaurantName}
        </Text>
        <View className="flex-row justify-around flex-1 ">
          <Text className="font-displayMedium mx-2 p-2">• Chinese</Text>
          <Text className="font-displayMedium p-2">• American</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default RestaurantCard;
