import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from '../../store/actions/cartActions';

function CartCard({ cartTitle = '', price = '', quantity = 1, index, dish }) {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);
  const [counter, setCounter] = useState(quantity);

  const handleCounter = (value, type) => {
    if (value >= 1) {
      setCounter(value);
      if (type === 'add') {
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
      dispatch(
        deleteFromCart({
          id: dish.id,
          quantity: dish.quantity,
          price: dish.price,
        })
      );
    }
  };

  const crossSubmitHandler = () => {
    dispatch(
      deleteFromCart({
        id: dish.id,
        quantity: dish.quantity,
        price: dish.price,
      })
    );
  };

  return (
    <View className="my-2 p-2">
      <TouchableOpacity onPress={crossSubmitHandler}>
        <Entypo name="cross" size={15} color={colors.lightGray} />
      </TouchableOpacity>
      <View className="flex-row flex-1 justify-around items-center w-[95%] self-center">
        <View className="mr-3">
          <View className="flex-row bg-displayWhite justify-around rounded-md mt-3 border border-primary  items-center">
            <View className=" flex-row justify-around p-1  items-center">
              <TouchableOpacity
                onPress={() => handleCounter(counter - 1, 'remove')}>
                <AntDesign name="minus" size={12} color={colors.primary} />
              </TouchableOpacity>
              <Text className="text-primary px-2">{counter}</Text>

              <TouchableOpacity
                onPress={() => handleCounter(counter + 1, 'add')}>
                <AntDesign name="plus" size={12} color={colors.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-[60%]">
          <Text className="font-displayLight text-lg my-1 ">{cartTitle}</Text>
          <Text className="font-displayLight">
            Shortbread, chocalate turtle cookies and red velvet
          </Text>
        </View>
        <Text className="text-primary font-displayMedium text-base ml-2 ">
          $ {price}
        </Text>
      </View>
      {cartData.cart.length - 1 !== index && (
        <View className="border-0.5 border-displayLightGray mt-4 w-[95%] self-center" />
      )}
    </View>
  );
}

export default CartCard;
