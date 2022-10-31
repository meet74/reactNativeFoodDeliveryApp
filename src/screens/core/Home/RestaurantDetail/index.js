/* eslint-disable react/no-array-index-key */
/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  ScrollView,
  ImageBackground,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import TopMenu from '../../../../components/TopMenu';
import colors from '../../../../theme/colors';
import RestaurantDetailCard from '../../../../components/ReastaurantDetailCard';
import Button from '../../../../components/Button';
import { CARTSCREEN } from '../../../../navigation/componentsAndNames';

const cardImage = require('../../../../assets/images/food-2.jpg');
const imageSecond = require('../../../../assets/images/food-3.jpg');

function RestaurantDetailScreen({ navigation, route }) {
  const restaurantParam = route.params.restaurant;
  const cartData = useSelector((state) => state.cart);

  return (
    <SafeAreaView className=" h-screen">
      <ScrollView className=" bg-displayWhite">
        <ImageBackground source={cardImage} className="h-[250px] w-screen">
          <TopMenu
            onBack={() => navigation.pop()}
            iconColor="white"
            onAction={() => navigation.navigate(CARTSCREEN.name)}
            actionTitle={
              <FontAwesome
                name="shopping-cart"
                size={30}
                color={colors.white}
              />
            }
          />
        </ImageBackground>

        <Text className="font-displayBold text-black text-2xl m-4">
          {restaurantParam.name}
        </Text>
        <View className="flex-row justify-around flex-1 mt-2">
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
            <AntDesign name="clockcircle" size={16} color={colors.gray} /> 25
            mins
          </Text>
          <Text className="font-displayMedium">
            {' '}
            <FontAwesome name="dollar" size={16} color={colors.gray} /> Free
          </Text>
        </View>
        <View className="mt-4">
          <Text className="font-displayLight text-black m-4 text-xl">
            All courses
          </Text>
          {restaurantParam.Dishes.map((dish, index) => (
            <RestaurantDetailCard
              dish={dish}
              key={index}
              dishTitle={dish.name}
              image={imageSecond}
              dishIngredients="Maida, Chocalate, Chips"
              dishType={dish.DishCategory ? dish.DishCategory.name : 'Bread'}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
      {cartData.totalCartItems > 0 && (
        <View className="absolute bottom-10 left-3">
          <Button
            onPress={() => navigation.navigate(CARTSCREEN.name)}
            title={`Add to cart (${cartData.totalCartItems} dishes)`}
            externalButtonStyle="w-[200rem]"
          />
        </View>
      )}
    </SafeAreaView>
  );
}

export default RestaurantDetailScreen;
