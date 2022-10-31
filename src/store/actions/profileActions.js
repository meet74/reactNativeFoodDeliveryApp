/* eslint-disable camelcase */
import {
  GET_USER,
  PROFILE,
  USER_ADDRESS,
  USER_ADDRESS_STATE,
} from '../constant';

export const setProfileData = (user_id = null) => {
  if (user_id != null) {
    return {
      type: PROFILE,
      user_id,
    };
  }
  return null;
};

export const getProfileData = (token = null) => {
  if (token != null) {
    return {
      type: GET_USER,
      token,
    };
  }
  return null;
};

export const setUserAddress = ({
  locationDetail = null,
  profile_id = null,
  token = null,
}) => {
  console.log(profile_id);
  return {
    type: USER_ADDRESS,
    locationDetail,
    profile_id,
    token,
  };
};

export const setUserAddressInState = ({
  locationDetail = null,
  profile_id = null,
  token = null,
}) => {
  console.log(profile_id);
  return {
    type: USER_ADDRESS_STATE,
    locationDetail,
    profile_id,
    token,
  };
};
