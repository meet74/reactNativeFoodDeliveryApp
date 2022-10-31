/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
import {
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_FROM_CART,
  EDIT_CART,
  REMOVE_FROM_CART,
} from '../constant';

export const addToCart = ({
  categpry_id = null,
  description = null,
  id = null,
  image_url = null,
  is_availabel = null,
  name = null,
  price = null,
  restaurant_id = null,
  type = null,
}) => {
  return {
    type: ADD_TO_CART,
    categpry_id,
    description,
    id,
    image_url,
    is_availabel,
    name,
    price,
    restaurant_id,
    dishType: type,
  };
};

export const removeFromCart = ({
  categpry_id = null,
  description = null,
  id = null,
  image_url = null,
  is_availabel = null,
  name = null,
  price = null,
  restaurant_id = null,
  type = null,
}) => {
  return {
    type: REMOVE_FROM_CART,
    categpry_id,
    description,
    id,
    image_url,
    is_availabel,
    name,
    price,
    restaurant_id,
    dishType: type,
  };
};

export const editCart = ({ dish }) => {
  return {
    type: EDIT_CART,
    dish,
  };
};

export const deleteFromCart = ({
  id = null,
  quantity = null,
  price = null,
}) => {
  return {
    type: DELETE_FROM_CART,
    id,
    quantity,
    price,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
