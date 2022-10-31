import {
  SET_RECEIVED_RESTAURANT_ADDRESS,
  SET_RESTAURANT_ADDRESS,
} from '../constant';

const initialState = {
  allRestaurantAddress: [],
  restaurantAddress: {
    restaurant_id: 0,
    address_1: null,
    address_2: null,
    address_3: null,
    city: null,
    street: null,
    postal_code: null,
    latitude: null,
    longitude: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECEIVED_RESTAURANT_ADDRESS: {
      const newRestaurantAddress = {
        id: action.id,
        restaurant_id: action.restaurant_id,
        address_1: action.address_1,
        address_2: action.address_2,
        address_3: action.address_3,
        city: action.city,
        street: action.street,
        postal_code: action.postal_code,
        latitude: action.latitude,
        longitude: action.longitude,
      };
      const allAddressCopy = [...state.allRestaurantAddress];
      const restaurantAddress = allAddressCopy.find(
        (address) => address.id === action.id
      );
      if (restaurantAddress) {
        const restaurantAddressIndex = allAddressCopy.findIndex(
          (address) => address.id === action.id
        );
        allAddressCopy[restaurantAddressIndex] = newRestaurantAddress;
      } else {
        allAddressCopy.push(newRestaurantAddress);
      }
      return {
        ...state,
        allRestaurantAddress: allAddressCopy,
        restaurantAddress: restaurantAddress,
      };
    }
    case SET_RESTAURANT_ADDRESS: {
      const newRestaurantAddress = {
        id: action.id,
        restaurant_id: action.restaurant_id,
        address_1: action.address_1,
        address_2: action.address_2,
        address_3: action.address_3,
        city: action.city,
        street: action.street,
        postal_code: action.postal_code,
        latitude: action.latitude,
        longitude: action.longitude,
      };

      const allAddressCopy = [...state.allRestaurantAddress];
      allAddressCopy.push(newRestaurantAddress);
      return {
        ...state,
        allRestaurantAddress: allAddressCopy,
        restaurantAddress: newRestaurantAddress,
      };
    }

    default:
      return state;
  }
};
