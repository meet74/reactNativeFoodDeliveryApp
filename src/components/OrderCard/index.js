/* eslint-disable camelcase */
import { View, Text, Image } from 'react-native';
import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import Button from '../Button';

const restaurantImage = require('../../assets/images/food-1.jpg');

function OrderCard({
  orderDetails = [],
  createdAt = '',
  totalPrice = 0,
  status = 'Pending',
  restaurantId = 0,
}) {
  console.log(createdAt);

  const restaurantDate = useSelector((state) => state.restaurant);
  let dishes = {};

  const restaurant = restaurantDate.allRestaurants.find(
    (res) => res.id === restaurantId
  );
  console.log('res', restaurantDate.allRestaurants);
  return (
    <View className="my-4 bg-displayWhite border border-primary w-[95%] self-center shadow-md rounded-md pb-4">
      <View className="flex-row justify-between items-center">
        <View className="flex-row  flex-1 my-4">
          <Image
            source={restaurantImage}
            className="w-24 h-24 mx-4 rounded-md"
          />
          <View>
            <Text className="font-displayMedium text-base text-displayBlack">
              {restaurant && restaurant.name}
            </Text>
            <Text className="font-display text-displayGray">
              {restaurant && restaurant.Address.street}
            </Text>
            <Text className="font-display text-displayGray">25 mins</Text>
          </View>
        </View>
        <View className="bg-displayLightGray rounded-md p-2 mr-2">
          <Text className="text-displayGray font-display">{status}</Text>
        </View>
      </View>
      <View className="m-2 ml-4">
        {orderDetails.map((order) => {
          if (restaurant) {
            dishes = restaurant.Dishes.find(
              (dish) => dish.id === order.dish_id
            );
            console.log('dish', restaurant.Dishes + order.dish_id);
          }
          return (
            <Text className="font-displayMedium text-displayBlack text-base">
              {order.quantity} X {dishes ? dishes.name : ''}
            </Text>
          );
        })}
      </View>
      <View className="flex-row justify-between m-4">
        <Text className="font-display text-displayLightGray">
          {moment(createdAt).format('MMMM Do YYYY, h:mm a')}
        </Text>
        <Text className="font-display text-displayBlack text-md">
          $ {totalPrice}
        </Text>
      </View>
      <Button title="Reorder" />
    </View>
  );
}

export default OrderCard;
