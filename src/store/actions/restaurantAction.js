/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
import {
  DISHES,
  RESTAURANT,
  SEARCH_RESTAURANT,
  SEARCH_RESTAURANT_LAT_LONG,
} from '../constant';

export const getAllRestaurantData = ({ token = null }) => {
  return {
    type: RESTAURANT,
    token,
  };
};
export const getAllDishesData = ({ token = null, restaurant_id = null }) => {
  return {
    type: DISHES,
    restaurant_id,
    token,
  };
};

export const searchDishes = () => {};

export const searchRestaurant = ({
  restaurantName = null,
  city = null,
  token = null,
}) => {
  return {
    type: SEARCH_RESTAURANT,
    restaurantName,
    city,
    token,
  };
};

export const getRestaurantsByLatLong = ({
  longitude = null,
  latitude = null,
  token = null,
}) => {
  console.log(longitude);
  return {
    type: SEARCH_RESTAURANT_LAT_LONG,
    longitude,
    latitude,
    token,
  };
};
