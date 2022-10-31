/* eslint-disable react/no-array-index-key */
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TopMenu from '../../../../components/TopMenu';
import CartCard from '../../../../components/CartCard';
import colors from '../../../../theme/colors';
import Button from '../../../../components/Button';
import { orderDish } from '../../../../store/actions/orderActions';
import { ORDERDETAIL } from '../../../../navigation/componentsAndNames';
import { clearCart } from '../../../../store/actions/cartActions';
import { ORDER } from '../../../../store/constant';

const cartImage = require('../../../../assets/images/cart-1.png');

function CartScreen({ navigation }) {
  const cartData = useSelector((state) => state.cart);
  const authData = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const addOrderHandler = () => {
    dispatch(
      orderDish({
        cartData: cartData.cart,
        total_amount: cartData.totalPrice,
        token: authData.token,
      })
    );
    dispatch(clearCart());
    navigation.navigate(ORDER, { screen: ORDERDETAIL.name });
  };
  return (
    <SafeAreaView>
      <ScrollView className="flex-1 bg-displayWhite">
        <TopMenu onBack={() => navigation.pop()} title="Your orders" />
        {cartData.totalCartItems > 0 ? (
          <>
            <View className=" mt-4 w-[95%] rounded-md bg-displayWhite shadow-md self-center">
              {cartData.cart.map((cart, index) => (
                <CartCard
                  dish={cart}
                  index={index}
                  key={index}
                  cartTitle={cart.name}
                  price={cart.price}
                  quantity={cart.quantity}
                />
              ))}
            </View>
            <View className="my-4 w-[95%] rounded-md bg-displayWhite shadow-md self-center flex-row items-center justify-between p-2">
              <Text className="text-primary font-displayMedium text-lg m-2">
                Apply coupon{' '}
                <MaterialCommunityIcons
                  name="brightness-percent"
                  size={24}
                  color={colors.primary}
                />
              </Text>
              <AntDesign name="right" size={14} color={colors.lightGray} />
            </View>
            <View className="mt-4 w-[95%] rounded-md bg-displayWhite shadow-md self-center   p-2">
              <View className="flex-row items-center justify-between m-1">
                <Text className="font-displayMedium text-sm text-displayGray">
                  SubTotal
                </Text>
                <Text className="font-displayMedium text-black p-1 text-displayGray">
                  $ {cartData.totalPrice}
                </Text>
              </View>
              <View className="flex-row items-center justify-between m-1">
                <Text className="font-displayMedium text-sm text-displayGray">
                  Delivery
                </Text>
                <Text className="font-displayMedium text-black p-1 text-displayGray">
                  $ 0
                </Text>
              </View>
              <View className="border-0.5 border-displayLightGray mt-4 w-[95%] self-center" />
              <View className="flex-row items-center justify-between m-1">
                <Text className="font-displayMedium text-sm text-black">
                  Total
                </Text>
                <Text className="font-displayMedium text-primary p-1">
                  $ {cartData.totalPrice}
                </Text>
              </View>
            </View>

            <View className=" w-[95%] rounded-md bg-displayWhite shadow-md self-center mt-4 p-2">
              <Text className="text-black m-2 font-displayLight text-base">
                Payment Method
              </Text>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Text className="text-primary font-displayMedium text-lg m-2 ">
                    Cash on Delivery{' '}
                  </Text>
                  <MaterialIcons
                    name="payment"
                    size={24}
                    color={colors.primary}
                  />
                </View>
                <AntDesign name="right" size={14} color={colors.lightGray} />
              </View>
            </View>
            <View>
              <Button
                onPress={addOrderHandler}
                title={`Place Order (${cartData.totalCartItems} dishes)`}
                externalButtonStyle="mt-12"
              />
            </View>
          </>
        ) : (
          <View className="items-center justify-center flex-1 h-screen">
            <Image source={cartImage} className="w-64 h-64" />
            <Text className="text-primary text-xl font-display">
              Your Cart is Empty
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default CartScreen;
