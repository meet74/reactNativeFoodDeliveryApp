import { put, takeEvery } from 'redux-saga/effects';
import {
  GET_USER,
  LOGOUT,
  PROFILE,
  SET_GET_USER,
  SET_PROFILE_DATA,
  SET_USER_ADDRESS,
  USER_ADDRESS,
  USER_API_URL,
} from '../../constant';

function* getProfile(action) {
  const response = yield fetch(`${USER_API_URL}/users/profiles`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
  });
  console.log(response.status);
  if (response.status === 200) {
    const res = yield response.json();
    console.log('user', res.Addresses[0]);
    yield put({
      type: SET_GET_USER,
      id: res.id,
      user_id: res.user_id,
      role_id: res.role_id,
      avatar_link: 'abcd.jpg',
      status: response.status,
      address: res.Addresses,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_GET_USER,
      id: null,
      user_id: null,
      role_id: null,
      avatar_link: null,
      status: response.status,
      address: {},
    });
  }
}

function* setProfile(action) {
  const params = {
    user_id: action.user_id,
    role_id: 4,
    avatar_link: 'string',
  };

  const response = yield fetch(`${USER_API_URL}/users/profiles`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ ...params }),
  });

  if (response.status === 200) {
    const res = yield response.json();
    yield put({
      type: SET_PROFILE_DATA,
      id: res.id,
      user_id: action.user_id,
      role_id: 1,
      avatar_link: 'abcd.jpg',
      status: response.status,
    });
  } else {
    yield put({
      type: SET_PROFILE_DATA,
      id: null,
      user_id: null,
      role_id: null,
      avatar_link: null,
      status: response.status,
    });
  }
}

function* setUserAddressRequest(action) {
  const params = {
    profile_id: action.profile_id,
    address_1: action.locationDetail.address_1,
    address_2: action.locationDetail.address_1,
    address_3: action.locationDetail.address_1,
    city: action.locationDetail.city,
    street: action.locationDetail.street,
    postal_code: action.locationDetail.postal_code,
    latitude: action.locationDetail.latitude,
    longitude: action.locationDetail.longitude,
  };
  console.log('address', params);
  const response = yield fetch(`${USER_API_URL}/users/addresses`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  console.log('resUserAddress', response.status);
  const res = yield response.json();
  console.log('userAddressStatus', res);
  if (response.status === 200) {
    yield put({
      type: SET_USER_ADDRESS,
      id: res.id,
      profile_id: action.profile_id,
      address_1: action.locationDetail.address_1,
      address_2: action.locationDetail.address_1,
      address_3: action.locationDetail.address_1,
      city: action.locationDetail.city,
      street: action.locationDetail.street,
      postal_code: action.locationDetail.postal_code,
      latitude: action.locationDetail.latitude,
      longitude: action.locationDetail.longitude,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    console.log('resAddressError');
    yield put({
      type: SET_USER_ADDRESS,
      id: null,
      profile_id: null,
      address_1: null,
      address_2: null,
      address_3: null,
      city: null,
      street: null,
      postal_code: null,
      latitude: null,
      longitude: null,
    });
  }
}

function* profileSaga() {
  yield takeEvery(PROFILE, setProfile);
  yield takeEvery(USER_ADDRESS, setUserAddressRequest);
  yield takeEvery(GET_USER, getProfile);
}

export default profileSaga;
