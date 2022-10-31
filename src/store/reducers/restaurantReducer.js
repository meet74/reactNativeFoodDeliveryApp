/* eslint-disable array-callback-return */
/* eslint-disable default-param-last */

import {
  RESTAURANT_LOADED,
  RESTAURANT_LOADING,
  SET_DISHES_DATA,
  SET_RESTAURANT_DATA,
  SET_SEARCHED_RESTAURANT_DATA,
  SET_SEARCH_RESTAURANT_LAT_LONG,
} from '../constant';

const initialState = {
  allRestaurants: [],
  searchedRestaurant: [],
  dishes: [],
  restaurant: {
    id: 0,
    name: null,
    image_url: null,
    status: null,
    is_published: null,
    order_options: null,
    is_veg: null,
    is_non_veg: null,
  },
  restaurantNames: [],
  isFetching: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANT_DATA: {
      const allRestaurantsCopy = action.restaurants;
      return {
        ...state,
        allRestaurants: allRestaurantsCopy,
        searchedRestaurant: allRestaurantsCopy,
        restaurant: allRestaurantsCopy[0],
        isFetching: false,
      };
    }
    case SET_SEARCHED_RESTAURANT_DATA: {
      const allRestaurantsCopy = action.restaurants;

      return {
        ...state,
        searchedRestaurant: allRestaurantsCopy,
        isFetching: false,
      };
    }
    case SET_SEARCH_RESTAURANT_LAT_LONG: {
      return {
        ...state,
        restaurant: action.restaurants[0],
        allRestaurants: action.restaurants,
        searchedRestaurant: action.restaurants,
      };
    }
    case SET_DISHES_DATA: {
      const allDishesCopy = action.dishes;

      return {
        ...state,
        dishes: allDishesCopy,
        isFetching: false,
      };
    }
    case RESTAURANT_LOADING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RESTAURANT_LOADED: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
