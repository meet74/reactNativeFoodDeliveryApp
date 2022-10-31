import {
  EDIT_RESTAURANT_ADDRESS,
  GET_RESTAURANT_ADDRESS,
  RESTAURANT_ADDRESS,
} from '../constant';

export const getRestaurantAddress = (address_id = null, token = null) => {
  return {
    type: GET_RESTAURANT_ADDRESS,
    address_id,
    token,
  };
};

export const setRestaurantAddress = ({
  locationDetail = null,
  restaurant_id = null,
  token = null,
}) => {
  console.log(restaurant_id);
  return {
    type: RESTAURANT_ADDRESS,
    locationDetail,
    restaurant_id,
    token,
  };
};

export const editRestaurantAddress = (
  locationDetail = null,
  restaurant_id = null,
  token = null
) => {
  return {
    type: EDIT_RESTAURANT_ADDRESS,
    locationDetail,
    restaurant_id,
    token,
  };
};
