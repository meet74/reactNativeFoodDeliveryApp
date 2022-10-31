import { put, takeEvery } from 'redux-saga/effects';
import {
  ALL_ORDER,
  LOGOUT,
  ORDER,
  ORDER_API_URL,
  SET_ALL_ORDER_DATA,
  SET_ORDER_DATA,
} from '../../constant';

function* addOrderRequest(action) {
  const params = {
    restaurant_id: action.restaurant_id,
    total_amount: action.total_amount,
    cart: action.cart,
  };

  const response = yield fetch(`${ORDER_API_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
    body: JSON.stringify({ ...params }),
  });

  const res = yield response.json();

  if (response.status === 200) {
    yield put({
      type: SET_ORDER_DATA,
      id: res.id,
      restaurant_id: res.restaurant_id,
      customer_id: res.customer_id,
      partner_id: res.partner_id,
      total_amount: res.total_amount,
      delivery_date: res.delivery_date,
      status: res.status,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_ORDER_DATA,
      id: null,
      restaurant_id: null,
      customer_id: null,
      partner_id: null,
      total_amount: null,
      delivery_date: null,
      status: null,
    });
  }
}

function* allOrderRequest(action) {
  const response = yield fetch(`${ORDER_API_URL}/order/user/all`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${action.token}`,
    },
  });

  const res = yield response.json();
  console.log(res);
  if (response.status === 200) {
    yield put({
      type: SET_ALL_ORDER_DATA,
      orders: res,
    });
  } else if (response.status === 401) {
    yield put({
      type: LOGOUT,
    });
  } else {
    yield put({
      type: SET_ALL_ORDER_DATA,
      orders: [],
    });
  }
}

function* RestaurantSaga() {
  yield takeEvery(ORDER, addOrderRequest);
  yield takeEvery(ALL_ORDER, allOrderRequest);
}

export default RestaurantSaga;
