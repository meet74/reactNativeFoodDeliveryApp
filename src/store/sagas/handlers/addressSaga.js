import { put, takeEvery } from 'redux-saga/effects';
import {
  API_URL,
  GET_RESTAURANT_ADDRESS,
  LOGOUT,
  RESTAURANT_ADDRESS,
  SET_RESTAURANT_ADDRESS,
} from '../../constant';

function* setRestaurantAddressRequest(action) {
  const params = {
    restaurant_id: action.restaurant_id,
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
  const response = yield fetch(`${API_URL}/restaurant/address`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  console.log('resAddress', response.status);
  const res = yield response.json();
  console.log('resAddressStatus', res);
  if (response.status === 200) {
    yield put({
      type: SET_RESTAURANT_ADDRESS,
      id: res.id,
      restaurant_id: action.restaurant_id,
      address_1: action.locationDetail.address_1,
      address_2: '',
      address_3: '',
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
      type: SET_RESTAURANT_ADDRESS,
      restaurant_id: null,
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

function* getRestuarantAddressByIdRequest(action) {
  console.log('saga res', action.address_id);
  const response = yield fetch(
    `${API_URL}/restaurant/address/${action.address_id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${action.token}`,
      },
    }
  );
  console.log(response.status);
  if (response.status === 200) {
    const res = yield response.json();
    console.log('resAddress', res);
    yield put({
      type: SET_RESTAURANT_ADDRESS,
      id: res.id,
      restaurant_id: action.restaurant_id,
      address_1: action.locationDetail.address_1,
      address_2: '',
      address_3: '',
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
      type: SET_RESTAURANT_ADDRESS,
      restaurant_id: null,
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

function* AddressSaga() {
  yield takeEvery(RESTAURANT_ADDRESS, setRestaurantAddressRequest);
  yield takeEvery(GET_RESTAURANT_ADDRESS, getRestuarantAddressByIdRequest);
}

export default AddressSaga;
