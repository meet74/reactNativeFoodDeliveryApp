/* eslint-disable array-callback-return */
/* eslint-disable default-param-last */

import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_FROM_CART,
  REMOVE_FROM_CART,
} from '../constant';

const initialState = {
  cart: [],
  totalCartItems: 0,
  totalPrice: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const allCartData = [...state.cart];
      let cartItems = state.totalCartItems;
      let cartTotal = state.totalPrice;
      const dishItem = allCartData.find(
        (cart) => cart.restaurant_id === action.restaurant_id
      );
      console.log(dishItem, 'this is item');
      if (dishItem) {
        console.log('dishitem true');
        const dishIndex = allCartData.findIndex(
          (cart) => cart.id === action.id
        );
        console.log('this is index', allCartData);
        if (dishIndex !== -1) {
          console.log('dishIndex true');
          allCartData[dishIndex] = {
            categpry_id: action.categpry_id,
            description: action.description,
            id: action.id,
            image_url: action.image_url,
            is_availabel: action.is_availabel,
            name: action.name,
            price: action.price,
            restaurant_id: action.restaurant_id,
            type: action.dishType,
            quantity: parseInt(allCartData[dishIndex].quantity, 10) + 1,
          };
        } else {
          console.log('dishIndex false');
          allCartData.push({
            categpry_id: action.categpry_id,
            description: action.description,
            id: action.id,
            image_url: action.image_url,
            is_availabel: action.is_availabel,
            name: action.name,
            price: action.price,
            restaurant_id: action.restaurant_id,
            type: action.dishType,
            quantity: 1,
          });
        }
        cartItems += 1;
        cartTotal += action.price;
      } else if (allCartData.length !== 0) {
        console.log('(allCartData.length !== 0 true');
        allCartData.splice(0, allCartData.length);
        allCartData.push({
          categpry_id: action.categpry_id,
          description: action.description,
          id: action.id,
          image_url: action.image_url,
          is_availabel: action.is_availabel,
          name: action.name,
          price: action.price,
          restaurant_id: action.restaurant_id,
          type: action.dishType,
          quantity: 1,
        });
        cartItems = 1;
        cartTotal = action.price;
      } else {
        console.log('(dishitem false');
        allCartData.push({
          categpry_id: action.categpry_id,
          description: action.description,
          id: action.id,
          image_url: action.image_url,
          is_availabel: action.is_availabel,
          name: action.name,
          price: action.price,
          restaurant_id: action.restaurant_id,
          type: action.dishType,
          quantity: 1,
        });
        cartItems += 1;
        cartTotal += action.price;
      }

      return {
        ...state,
        cart: allCartData,
        totalCartItems: cartItems,
        totalPrice: cartTotal,
      };
    }
    case REMOVE_FROM_CART: {
      const allCartData = [...state.cart];
      const dishItem = allCartData.find((cart) => cart.id === action.id);
      let cartItems = state.totalCartItems;
      let cartTotal = state.totalPrice;
      const dishIndex = allCartData.findIndex((cart) => cart.id === action.id);
      if (dishItem) {
        allCartData[dishIndex] = {
          categpry_id: action.categpry_id,
          description: action.description,
          id: action.id,
          image_url: action.image_url,
          is_availabel: action.is_availabel,
          name: action.name,
          price: action.price,
          restaurant_id: action.restaurant_id,
          type: action.dishType,
          quantity: parseInt(allCartData[dishIndex].quantity, 10) - 1,
        };
      } else {
        allCartData.splice(dishIndex, 1);
      }
      cartItems -= 1;
      cartTotal -= action.price;
      return {
        ...state,
        cart: allCartData,
        totalCartItems: cartItems,
        totalPrice: cartTotal,
      };
    }
    case DELETE_FROM_CART: {
      const allCartData = [...state.cart];
      const dishIndex = allCartData.findIndex((cart) => cart.id === action.id);
      let cartTotal = state.totalPrice;
      allCartData.splice(dishIndex, 1);
      let cartItems = state.totalCartItems;
      cartItems -= parseInt(action.quantity, 10);
      cartTotal -= action.price * action.quantity;

      return {
        ...state,
        cart: allCartData,
        totalCartItems: cartItems,
        totalPrice: cartTotal,
      };
    }
    case CLEAR_CART: {
      return {
        cart: [],
        totalCartItems: 0,
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};
