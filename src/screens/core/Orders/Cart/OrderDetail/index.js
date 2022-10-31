/* eslint-disable react/no-array-index-key */
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../../../theme/colors';
import Button from '../../../../../components/Button';
import RestaurantCard from '../../../../../components/RestaurantCard';
import {
  ORDERSCREEN,
  RESTAURANTDETAILSCREEN,
} from '../../../../../navigation/componentsAndNames';
import TopMenu from '../../../../../components/TopMenu';

function OrderDetailScreen({ navigation }) {
  const orderData = useSelector((state) => state.order);
  const restaurantData = useSelector((state) => state.restaurant);
  return (
    <SafeAreaView>
      <ScrollView className=" bg-displayWhite h-screen">
        <TopMenu title="Your order detail" onBack={() => navigation.pop()} />
        {orderData.orderStatus === 'SUCCESS' ? (
          <View className="flex-row  items-center justify-around my-8 p-2">
            <AntDesign name="checkcircle" size={75} color={colors.green} />
            <View className="items-center ">
              <Text className="font-display text-displayBlack text-lg my-4">
                Your order placed SuccessFully!!
              </Text>
              <Button
                title="Your Orders"
                onPress={() => navigation.replace(ORDERSCREEN.name)}
              />
            </View>
          </View>
        ) : (
          <View className="flex-row  items-center justify-around my-8 p-2">
            <AntDesign
              name="exclamationcircle"
              size={75}
              color={colors.primary}
            />
            <View className="items-center ">
              <Text className="font-display text-displayBlack text-lg my-4">
                Order not placed!!
              </Text>
              <Button
                title="Your Orders"
                onPress={() => navigation.replace(ORDERSCREEN.name)}
              />
            </View>
          </View>
        )}
        <View className="border-0.5 border-displayLightGray mb-4 w-[95%] self-center" />
        <View>
          <Text className="text-black m-4 font-displayMedium text-lg">
            Order another Dish
          </Text>
          <View>
            {restaurantData.allRestaurants.map((restaurant, index) => (
              <RestaurantCard
                onPress={() =>
                  navigation.navigate(RESTAURANTDETAILSCREEN.name, {
                    restaurant,
                  })
                }
                key={index}
                restaurantName={restaurant.name}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OrderDetailScreen;

// <AntDesign name="exclamationcircle" size={24} color="black" />
// <AntDesign name="checkcircle" size={24} color="black" />
