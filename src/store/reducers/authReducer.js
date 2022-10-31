/* eslint-disable default-param-last */

import {
  SET_SIGNUP_DATA,
  SET_LOGIN_DATA,
  SET_FORGOTPASSWORD_DATA,
  SET_TOKEN,
  SET_LOGOUT_DATA,
} from '../constant';

const initialState = {
  id: null,
  email: null,
  phoneNumber: null,
  status: null,
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNUP_DATA:
      return {
        ...state,
        email: action.email,
        id: action.id,
        phoneNumber: action.phone_no,
        status: action.status,
      };
    case SET_LOGIN_DATA:
      return {
        ...state,
        email: action.email,
        id: action.id,
        phoneNumber: action.phone_no,
        status: action.status,
        token: action.token,
      };
    case SET_FORGOTPASSWORD_DATA:
      return {
        ...state,
        email: action.email,
        id: state.id,
        phoneNumber: state.phoneNumber,
        status: action.status,
      };
    case SET_LOGOUT_DATA:
      return {
        id: null,
        email: null,
        phoneNumber: null,
        status: null,
        token: null,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};
