import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGOTPASSWORD, LOGIN, LOGOUT, SET_TOKEN, SIGNUP } from '../constant';

export const signupUser = (email = null, password = null) => {
  if (email != null && password != null) {
    return {
      type: SIGNUP,
      email,
      password,
    };
  }
  return null;
};

export const loginUser = (email = null, password = null) => {
  if (email != null && password != null) {
    return {
      type: LOGIN,
      email,
      password,
    };
  }
  return null;
};

export const forgotPassword = (email = null) => {
  if (email != null) {
    return {
      type: FORGOTPASSWORD,
      email,
    };
  }
  return null;
};

export const logOut = async () => {
  await AsyncStorage.setItem('token', null);
  return {
    type: LOGOUT,
  };
};

export const setToken = (token = null) => ({
  type: SET_TOKEN,
  token,
});
