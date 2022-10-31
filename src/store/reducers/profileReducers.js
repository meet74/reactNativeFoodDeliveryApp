/* eslint-disable default-param-last */

import {
  SET_GET_USER,
  SET_PROFILE_DATA,
  SET_USER_ADDRESS,
  USER_ADDRESS_STATE,
} from '../constant';

const initialState = {
  id: null,
  user_id: null,
  role_id: null,
  avatar_link: null,
  status: null,
  userAddresses: [],
  dropdownAddress: [],
  userAddress: {
    id: null,
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
    case SET_PROFILE_DATA:
      return {
        ...state,
        id: action.id,
        user_id: action.user_id,
        role_id: action.role_id,
        avatar_link: action.avatar_link,
        status: action.status,
      };

    case SET_GET_USER: {
      console.log('add', action);
      const dropdownAddressCopy = [];
      action.address.forEach((add) =>
        dropdownAddressCopy.push({
          label: add.address_1,
          value: add,
        })
      );
      const userAddressesCopy = action.address ? action.address : [];
      const address = action.address ? action.address.pop() : {};
      console.log(address);
      return {
        ...state,
        id: action.id,
        user_id: action.user_id,
        role_id: action.role_id,
        avatar_link: action.avatar_link,
        status: action.status,
        userAddresses: userAddressesCopy,
        dropdownAddress: dropdownAddressCopy,
        userAddress: {
          address_1: address ? address.address_1 : null,
          address_2: address ? address.address_2 : null,
          address_3: address ? address.address_3 : null,
          city: address ? address.city : null,
          street: address ? address.street : null,
          postal_code: address ? address.postal_code : null,
          latitude: address ? address.latitude : null,
          longitude: address ? address.longitude : null,
        },
      };
    }

    case SET_USER_ADDRESS: {
      return {
        ...state,
        userAddress: {
          id: action.id || null,
          address_1: action.address_1 || null,
          address_2: action.address_2 || null,
          address_3: action.address_3 || null,
          city: action.city || null,
          street: action.street || null,
          postal_code: action.postal_code || null,
          latitude: action.latitude || null,
          longitude: action.longitude || null,
        },
      };
    }
    case USER_ADDRESS_STATE: {
      const userAddressesCopy = [...state.userAddresses];
      console.log('red', action);
      const newAddress = {
        id: action.profile_id || null,
        address_1: action.locationDetail.address_1 || null,
        address_2: action.locationDetail.address_2 || null,
        address_3: action.locationDetail.address_3 || null,
        city: action.locationDetail.city || null,
        street: action.locationDetail.street || null,
        postal_code: action.locationDetail.postal_code || null,
        latitude: action.locationDetail.latitude || null,
        longitude: action.locationDetail.longitude || null,
      };
      userAddressesCopy.push(newAddress);
      return {
        ...state,
        userAddresses: userAddressesCopy,
        userAddress: newAddress,
      };
    }
    default:
      return state;
  }
};
