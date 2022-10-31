/* eslint-disable default-param-last */
/* eslint-disable camelcase */
import { ALL_ORDER, ORDER } from '../constant';

export const orderDish = ({
  total_amount = null,
  cartData = [],
  token = null,
}) => {
  const cart = [];
  cartData.forEach((cartItem) => {
    cart.push({
      dish_id: cartItem.id,
      amount: cartItem.price,
      quantity: cartItem.quantity,
    });
  });

  return {
    type: ORDER,
    restaurant_id: cartData[0].restaurant_id,
    cart,
    total_amount,
    token,
  };
};

export const getOrderById = () => {};

export const getOrderByRestaurant = () => {};

export const getAllOrders = (token = null) => ({
  type: ALL_ORDER,
  token,
});
