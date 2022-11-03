/* eslint-disable no-unused-vars */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../theme/colors';
import { addToCart, removeFromCart } from '../../store/actions/cartActions';

// const imageSecond = require('../../assets/images/food-3.jpg');

function RestaurantDetailCard({
  image = '',
  dishTitle = '',
  dishIngredients = '',
  dishType = '',
  price = '',
  dish,
}) {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);

  const [added, setAdded] = useState(false);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const dishData = cartData.cart.find((cart) => cart.id === dish.id);

    if (dishData) {
      setCounter(dishData.quantity);
    } else {
      setCounter(0);
      setAdded(false);
    }
  }, [cartData]);

  const handleCounter = (value, type) => {
    console.log(value, 'cart state-1');
    if (value >= 1) {
      setCounter(value);
      if (type === 'add') {
        console.log(counter + 1, 'cart state');
        dispatch(
          addToCart({
            category_id: dish.category_id,
            description: dish.description,
            id: dish.id,
            image_url: dish.image_url,
            is_available: dish.is_available,
            name: dish.name,
            price: dish.price,
            restaurant_id: dish.restaurant_id,
            type: dish.type,
          })
        );
      } else {
        dispatch(
          removeFromCart({
            category_id: dish.category_id,
            description: dish.description,
            id: dish.id,
            image_url: dish.image_url,
            is_available: dish.is_available,
            name: dish.name,
            price: dish.price,
            restaurant_id: dish.restaurant_id,
            type: dish.type,
          })
        );
      }
    } else {
      setCounter(0);
      setAdded(false);
      dispatch(
        removeFromCart({
          category_id: dish.category_id,
          description: dish.description,
          id: dish.id,
          image_url: dish.image_url,
          is_available: dish.is_available,
          name: dish.name,
          price: dish.price,
          restaurant_id: dish.restaurant_id,
          type: dish.type,
        })
      );
    }
  };

  const onAddButton = () => {
    setAdded(true);
    setCounter(1);
    dispatch(addToCart(dish));
  };
  return (
    <View>
      <View className="my-4">
        <View className="self-center flex-row w-[95%] h-40 mb-4">
          <Image
            source={image}
            resizeMode="stretch"
            className="w-[30%] h-32 self-center rounded-2xl "
          />

          <View className="items-start ml-6 w-[60%]">
            <Text className="font-displayLight text-lg text-black  ">
              {dishTitle}
            </Text>
            <Text className="font-displayMedium text-sm my-2">
              {dishIngredients}
            </Text>
            <View className="my-4">
              <Text className="font-displayMedium mr-5">• {dishType}</Text>
            </View>
            <View className="flex-row w-[100%] justify-between items-center ">
              <Text className="font-displayMedium text-primary">$ {price}</Text>
              <View className="flex-row bg-primary justify-around rounded-md mt-3 p-1 items-center">
                {added ? (
                  <View className=" flex-row justify-around p-1">
                    <TouchableOpacity
                      onPress={() => handleCounter(counter - 1, 'remove')}>
                      <AntDesign name="minus" size={16} color={colors.white} />
                    </TouchableOpacity>
                    <Text className="text-white px-5">{counter}</Text>

                    <TouchableOpacity
                      onPress={() => handleCounter(counter + 1, 'add')}>
                      <AntDesign name="plus" size={16} color={colors.white} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text
                    onPress={onAddButton}
                    className="px-8 py-1 text-white font-display">
                    Add
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
        <View className="border-0.5 border-displayLightGray mt-4 w-[95%] self-center" />
      </View>
    </View>
  );
}

export default RestaurantDetailCard;
